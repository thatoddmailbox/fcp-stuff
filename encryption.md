# Encryption
There is some form of encryption on the data of the packets. However, this does not affect the header of the packet, and the length of the data is the same. (a 20-byte data payload, when encrypted, is still 20 bytes)


It also might maybe be possible to wrap the messages with TLS somehow, but this does not seem to be used...


There seems to be multiple types of encryption available:
* CAST
* Splint
* Legacy
* None


The default seems to be Legacy, which is a fancy XOR with a seed value exchanged during the connection. The default seed value, used for encrypting the initial cConnReq messages, is `2171034441`. The seed is then changed after each message. You can see the actual algorithm implemented in `proxy/fcp.js`. You can also see pseudo-C code of the algorithm in `encrypt.c`, translated by hand from the x86 assembly of the FirstClass binary. (it probably doesn't compile, though)