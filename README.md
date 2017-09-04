# fcp-stuff
things about the FirstClass protocol

* [Constants](./constants.md)
* [Debug](./debug.md)
* [Encryption](./encryption.md)
* [Internal client structs](./internal_structs.md)
* [Logging in](./login.md)
* [Packet format](./packet.md)
* [Packet structs](./packet_structs.md)

## Info
The FirstClass protocol is how the FirstClass client communicates with the server. It can be used over several different transports, with TCP support being added [in 1994](https://tidbits.com/article/1893). This repository only talks about the TCP transport, though it seems like the packet format and other details are shared between then.

## Other attempts?
It seems like no one else has tried to do this and publicly document it. [This article from 1996](http://tidbits.com/article/919) mentions the program "BulkRate" (the download server is offline), which is supposed to allow "FirstClass users [to] retrieve mail and conference messages for reading offline". It also implies that SoftArc (the then-owners of FirstClass) was not involved in creating BulkRate.

There's also a [client for the Apple Newton MessagePad](http://tidbits.com/static/html/TidBITS-234.html#lnk4), but that "uses a Newton-compatible modem to connect to a FirstClass server using its command-line user interface (CLUI) feature", rather than the FirstClass protocol. The CLUI isn't really an option because (I think) it's licensed separately, it requires to be specifically enabled, and it's limited in that it can only do plain text (no fonts, images, or attachments).