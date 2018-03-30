# fcp-stuff
things about the FirstClass protocol

* [Constants](./constants.md)
* [Debug](./debug.md)
* [Docedit format](./docedit.md)
* [Encryption](./encryption.md)
* [Internal client structs](./internal_structs.md)
* [Logging in](./login.md)
* [Packet format](./packet.md)
* [Packet structs](./packet_structs.md)

## Info
The FirstClass protocol is how the FirstClass client communicates with the server. It can be used over several different transports, with TCP support being added [in 1994](https://tidbits.com/article/1893). This repository only talks about the TCP transport, though it seems like the packet format and other details are shared between then.

## Other attempts?
It seems like no one else has tried to do this and publicly document it. [This article from 1996](http://tidbits.com/article/919) mentions the program "BulkRate", which is supposed to allow "FirstClass users [to] retrieve mail and conference messages for reading offline". It also implies that SoftArc (the then-owners of FirstClass) was not involved in creating BulkRate. However, it accesses the FirstClass server with the commandline UI (CLUI), which isn't an option now because (I think) it's licensed separately, it requires being specifically enabled, and it's limited in that it can only do plain text (no fonts, images, or attachments). There's also a [client for the Apple Newton MessagePad](http://tidbits.com/static/html/TidBITS-234.html#lnk4) that also uses the CLUI.