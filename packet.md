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
* To calculate the CRC:
    * Compute the encrypted packet with the CRC field set the 0. (checksumming should be the last step before actually sending the packet to the server, so every other field and the data should be set properly)
    * Pad the packet with zeros until its length is a multiple of 4 bytes, and then divide the packet into blocks of 4 bytes.
    * Read each block as an unsigned, big-endian, 32-bit integer, and add them together.
    * Once you have done that, calculate `uint16((checksum >> 16) + checksum)`. This then replaces the CRC field in the encrypted packet. (however, the CRC is NOT encrypted!)