# Packet

| description | byte count |
| ----------- | ---------- |
| "link session ID" | 2 bytes |
| sequence # | 1 byte |
| command # | 1 byte |
| CRC | 2 byte |
| data length | 2 byte |
| data | see above |

## Info
* The link session ID starts out as 0xEAEA (60138), but then changes to something else that I don't understand yet.
* The sequence number starts at 0, and seems to be repeated by the server when it responds to the client's message.
* The command number corresponds to an entry in the command types table in [this file](./constants.md). If a message comes from the server, the first bit of the command number field is set, otherwise it is cleared. This means that the largest possible command number is 128.
* The CRC is still mysterious I'm not yet sure how that works don't ask.