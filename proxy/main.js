var net = require('net');
var CONSTS = require('./consts');
var commandParser = require('./commandParser');

var hexDump = function(buffer) {
	if (buffer.length > 200) {
		console.log("(over 200 bytes, skipped)");
		process.stdout.write("\n");
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

net.createServer(function(client) {
	console.log("[*] Incoming connection from " + client.remoteAddress + ":" + client.remotePort);
	
	var remote = new net.Socket();
	remote.connect(CONSTS.FCP_PORT, CONSTS.REMOTE_IP, function() {
		console.log("[*] Connection established to " + CONSTS.REMOTE_IP + ":" + CONSTS.FCP_PORT);

		remote.on('data', function(data) {
			console.log("[ Remote -> Client ] " + commandParser.toString(new Buffer(data)));
			hexDump(data);
			client.write(data);
		});

		remote.on('close', function() {
			console.log("[*] Connection to remote lost!");
			console.log("[*] Disconnecting client...");
			client.destroy();
			process.exit(0);
		});

		client.on('data', function(data) {
			console.log("[ Client -> Remote ] " + commandParser.toString(new Buffer(data)));
			hexDump(data);
			remote.write(data);
		});

		client.on('close', function(data) {
			console.log("[*] Disconnected from " + client.remoteAddress + ":" + client.remotePort);
			remote.destroy();
			process.exit(0);
		});
	});
}).listen(CONSTS.FCP_PORT, CONSTS.LOCAL_IP );

console.log("[*] Server listening on " + CONSTS.LOCAL_IP + ":" + CONSTS.FCP_PORT);