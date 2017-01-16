module.exports = {
	encrypt: function(data, seed) {
		var newData = data;
		var newSeed = seed;

		if ((data.length % 4) > 0) {
			// pad it so it's divisible by 4
			newData = new Buffer(data.length + 4 - (data.length % 4));
			newData.fill(0);
			data.copy(newData);
		}

		var currentBlock = 0;
		var blocksLeft = newData.length / 4;
		while (blocksLeft > 0) {
			var block = newData.readInt32BE(currentBlock * 4);
			var result = (block ^ newSeed) & 0xFFFFFFFF;
			newData.writeInt32BE(result, currentBlock * 4);
			newSeed = ((((newSeed << 5) & 0xFFFFFFFF) + newSeed & 0xFFFFFFFF) + 0x57FD936B) & 0xFFFFFFFF

			currentBlock++;
			blocksLeft--;
		}

		return {
			newData: newData,
			newSeed: newSeed >>> 0
		};
	}
};