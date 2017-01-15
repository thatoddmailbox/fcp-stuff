var net = require('net');
var CONSTS = require('./consts');
var commandParser = require('./commandParser');

net.createServer(function(client) {
	console.log("[*] Incoming connection from " + client.remoteAddress + ":" + client.remotePort);
	
	var remote = new net.Socket();
	remote.connect(CONSTS.FCP_PORT, CONSTS.REMOTE_IP, function() {
		console.log("[*] Connection established to " + CONSTS.REMOTE_IP + ":" + CONSTS.FCP_PORT);

		remote.on('data', function(data) {
			console.log("[ Remote -> Client ] " + commandParser.toString(new Buffer(data)));
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