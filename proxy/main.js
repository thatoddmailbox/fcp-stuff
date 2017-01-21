var net = require('net');
var CONSTS = require('./consts');
var fcp = require('./fcp');
var commandParser = require('./commandParser');

var txSeed = 2171034441;
var rxSeed = 2171034441;

var hexDump = function(buffer, normalBuf) {
	if (buffer.length > 200) {
		//console.log("(over 200 bytes, skipped)");
		//process.stdout.write("\n");
		return;
	}
	for (var i = 0; i <= Math.ceil(buffer.length / 16); i++) {
		for (var off = 0; off < 16; off++) {
			var pos = (i * 16) + off;
			if (pos >= buffer.length) {
				process.stdout.write("   ");
				continue;
			}
			var char = buffer.readUInt8(pos);

			if (char < 16) {
				process.stdout.write("0");
			}
			process.stdout.write(char.toString(16));
			process.stdout.write(" ");
		}

		process.stdout.write("   ");

		for (var off = 0; off < 16; off++) {
			var pos = (i * 16) + off;
			if (pos >= buffer.length) {
				process.stdout.write(" ");
				continue;
			}
			var char = buffer.readUInt8(pos);

			if (char > 32 && char < 128) {
				process.stdout.write(String.fromCharCode(char));
			} else {
				process.stdout.write(".");
			}
		}

		process.stdout.write("\n");
	}
};

var decryptRx = function(data) {
	var result = fcp.encrypt(data, rxSeed);
	rxSeed = result.newSeed;
	return result.newData;
};

var decryptTx = function(data) {
	var result = fcp.encrypt(data, txSeed);
	txSeed = result.newSeed;
	return result.newData;
};

net.createServer(function(client) {
	console.log("[*] Incoming connection from " + client.remoteAddress + ":" + client.remotePort);
	
	var remote = new net.Socket();
	remote.connect(CONSTS.FCP_PORT, CONSTS.REMOTE_IP, function() {
		console.log("[*] Connection established to " + CONSTS.REMOTE_IP + ":" + CONSTS.FCP_PORT);

		remote.on('data', function(data) {
			var packets = commandParser.extractPackets(data);

			client.write(data);

			for (var i = 0; i < packets.length; i++) {
				var packet = packets[i];
				console.log("[ Remote -> Client ] " + commandParser.toString(packet));
			
				var dataBuf = new Buffer(packet.readUInt16BE(6));
				packet.copy(dataBuf, 0, 8, 8 + packet.readUInt16BE(6));
				var decryptedData = decryptRx(dataBuf);
				hexDump(decryptedData, packet);

				if (packet.readUInt8(3) == 51) {
					// cConnReq, so set the rxSeed
					rxSeed = decryptedData.readUInt32BE(16) >>> 0;
					console.log("[*] rxSeed set to " + rxSeed);
				}
			}
		});

		remote.on('close', function() {
			console.log("[*] Connection to remote lost!");
			console.log("[*] Disconnecting client...");
			client.destroy();
			process.exit(0);
		});

		var q = 0;

		client.on('data', function(data) {
			var packets = commandParser.extractPackets(data);

			remote.write(data);

			for (var i = 0; i < packets.length; i++) {
				var packet = packets[i];

				console.log("[ Client -> Remote ] " + commandParser.toString(packet));
				
				var dataBuf = new Buffer(packet.readUInt16BE(6));
				packet.copy(dataBuf, 0, 8, 8 + packet.readUInt16BE(6));

				console.log("BEFORE:");
				hexDump(dataBuf);

				var decryptedData = decryptTx(dataBuf);

				console.log("AFTER:");
				hexDump(decryptedData);

				if (packet.readUInt8(3) == 51) {
					// cConnReq, so set the txSeed
					txSeed = decryptedData.readUInt32BE(14) >>> 0;
					console.log("[*] txSeed set to " + txSeed);
				}
			}

			q++;
			if (q > 7) {
				console.log("kthxbai");
				process.exit(0);
			}
		});

		client.on('close', function(data) {
			console.log("[*] Disconnected from " + client.remoteAddress + ":" + client.remotePort);
			remote.destroy();
			process.exit(0);
		});
	});
}).listen(CONSTS.FCP_PORT, CONSTS.LOCAL_IP );

console.log("[*] Server listening on " + CONSTS.LOCAL_IP + ":" + CONSTS.FCP_PORT);