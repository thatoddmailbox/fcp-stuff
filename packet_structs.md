# Packet structs
[Packets](./packet.md) have a data field containing information about the request. The structure of the data depends on the command number, and some of these structures are documented here.

*Note:* Since some of the structures for packets are different depending on which direction they're sent in (client -> server or server -> client), commands originating from the client start with a c, such as `cLogin`, while commands coming from the server start with an s, such as `sObjData`. This is a convention that I made up--no FirstClass products use it, and it's probable that the c actually stand for "command".

All integers should be assumed to be big-endian.

## cConnReq and sConnReq
Used to negotiate details about the connection. Must be the first packet sent from the client, and is always encrypted with the initial seed as given on the [constants](./constants.md) page. (`2171034441`)

| field name   | field type | description |
| ------------ | ---------- | ----------- |
| Addr         | uint32     | default is 0, not sure what this does |
| Sock         | uint16     | default is 0, not sure what this does |
| SessionId    | uint16     | default is 0, not sure what this does |
| Options      | uint16     | default is coStandardEncryption, coNewHeader, and  coLoginOptions (see [constants](./constants.md)) |
| MaxPacketLen | uint16     | default is 1024 |
| WindowSize   | uint16     | default is 4, not sure what this does |
| Seed         | uint32     | should be randomly generated with a cryptographically secure RNG. If cConnReq, this seed will be used for all future packets sent from the client. If sConnReq, this seed will be used for all future packets sent from the server. |
| Laps         | uint16     | default is 0, not sure what this does |

## cLogin
Used as part of the login process. See [login](./login.md) for details.

| field name     | field type | description |
| -------------- | ---------- | ----------- |
| UserIDLength   | uint8      | length of following field (max of 15) |
| UserID         | [15]byte   | the user ID you're logging in as |
| PasswordLength | uint8      | length of following field (max of 12) |
| Password       | [12]byte   | do NOT put the user's password here, as it is not secure. see [login](./login.md) for details. |
| Unknown1       | uint8      | default is 13, not sure what this does |
| Version        | uint16     | must be 13 |
| GUI            | uint16     | default is 12000, not sure what this does |
| LogBits        | uint16     | default is 41984, not sure what this does |
| Charset        | uint16     | the character encoding to use for the connection (see [constants](./constants.md)). recommended to be UTF-8 (65001) |
| Method         | uint16     | default is 14, not sure what this does |