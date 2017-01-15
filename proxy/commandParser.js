var commands = {
	4: "cLogin",
	5: "cLogout",
	7: "cObjOpen",
	8: "cObjData",
	9: "cObjUpdate",
	10: "cObjInsert",
	11: "cObjDelete",
	12: "cObjClose",
	13: "cObjCreate",
	15: "cObjMove",
	16: "cObjCopy",
	18: "cObjPrio",
	19: "cGetObjInfo",
	20: "cPutObjInfo",
	21: "cUpload",
	22: "cDownload",
	24: "cForward",
	25: "cReply",
	26: "cSend",
	27: "cAttach",
	28: "cDetach",
	29: "cSubscribe",
	30: "cNameValidate",
	33: "cChgPassword",
	34: "cSelect",
	38: "cWarnLogoff",
	39: "cBroadcast",
	48: "cSanity",
	51: "cConnReq",
	52: "cResume",
	54: "cNotify",
	55: "cOpenACL",
	57: "cOpenHistory",
	58: "cChat",
	59: "cWhoIsLoggedOn",
	60: "cObjOpenUnsolicited",
	62: "cObjOpenDup",
	63: "cObjOpenSpecial",
	66: "cObjRetrieval",
	68: "cObjOpenQuery"
};

var getCommandName = function(num) {
	var fromServer = false;
	var originalNum = num;
	if (num >= 128) {
		fromServer = true;
		num -= 128;
	}
	var name = commands[num];
	if (!name) {
		return "(unknown) (" + originalNum + ")";
	}
	if (fromServer) {
		name = "s" + name.substr(1);
	}
	return "" + name + " (" + originalNum + ")";
};

module.exports = {
	commands: commands,
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
			returnStr += "Cmd: " + getCommandName(commandNumber) + " ";
			returnStr += "CRC: " + crc + " ";
			returnStr += "Len: " + dataLen + " ";
		} catch (e) {
			returnStr = "*** MALFORMED ***";
		}

		return returnStr;
	}
};