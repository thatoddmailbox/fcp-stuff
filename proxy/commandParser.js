module.exports = {
	toString: function(buf) {
		var returnStr = "";

		try {
			var linkID = buf.readUInt16BE(0);
			var sequenceNumber = buf.readUInt8(2);
			var commandNumber = buf.readUInt8(3);
			var crc = buf.readUInt16BE(4);
			var dataLen = buf.readUInt16BE(6);

			returnStr += "LinkID: " + linkID + " ";
			returnStr += "Seq#: " + sequenceNumber + " ";
			returnStr += "Cmd#: " + commandNumber + " ";
			returnStr += "CRC: " + crc + " ";
			returnStr += "Len: " + dataLen + " ";
		} catch (e) {
			returnStr = "*** MALFORMED ***";
		}

		return returnStr;
	}
};