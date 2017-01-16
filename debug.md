# Debug console
FirstClass has a super-secret debug console hidden inside of it. It seems like you should be able to access it from some sort of key combo on startup or something similar (have to look closer at the code), but right now, the easiest way to access it is to patch the client binary and change the check for the console from a `jnz` to a `jz`. 


**note that this only applies to the Mac version 12.122 it will probably not work on another version**


**also this breaks using keyboard shortcuts and the arrow keys so do it on a copy of the application**


To do this, use a hex editor to find the sequence `0F 85 35 00 00 00 66 8B` and replace it with `0F 84 35 00 00 00 66 8B` (the `85` becomes `84`). Then, run the binary of the application (not the application, but the binary inside of the .app. You want to see the console output), log in, and in the view where you see the icons (like your mailbox and trash and etc), press the `?`, and you will see this menu:


    p - Packet Debug
    d - dump the packets currently in the buffer
    l - open console, not useful if you can see this, but for next time
    a - lookup an address to get the symbol closest to it
    t - do a not very useful traceback
    s - Toggle Steve's super mode
    b - Toggle save message bodies and docedit to download


The most useful option is `p`, which opens a packet debugging window that shows you what packets are sent and received for different actions.