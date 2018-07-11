# Internal client structs

## FCP

## tPacketHdr
(this is how it's represented in the fcc memory, _not_ over the wire!)


| description | byte count |
| ----------- | ---------- |
| ??? | 2 bytes |
| command number | 1 byte |
| ??? | 3 bytes |
| message length | 1 byte |

## Docedit

### CDocTranslator
```
0x20: void * - logging function, set to a printf-type function to enable logging
```

### CDTFC
```
0x0: CDocTranslator - base class

0x150: docedit header (0x30) - a copy of the docedit header, in the local representation

0x162: uint32_t - something that, when 0xFFFFFFFF, indicates it's time to just give up parsing the document's header

0x194: SAHandle (uint32_t) - a handle to the docedit data

0x1A0: uint64_t - something

0x1B0: tCDTStyle - next fc style
	0x1B0: uint64_t - something
	0x1B8: uint16_t - something

0x1C8: uint16_t - next style (unclear what the difference between a style and fc style is)
```

## CSimpleHTMLDocTranslator
```
0x0: CDocTranslator - base class

0x580: char * - HTML output
```

### tCDTStyle
```
0x0: uint64_t - start char (?)
0x8: uint8_t - font
0x9: buffer?
0xA: uint16_t - face
0xC: uint8_t - size
0xD: uint8_t - red
0xE: uint8_t - green
0xF: uint8_t - blue
```

### CDocEditBody
```
0x1B8: CPropTable<CFontDef> - list of fonts


0x15D0: uint32_t - font count
```

### CFontDef
```
0x20: uint16_t - font charset

0x24: uint32_t - font "direction"
0x28: uint8_t - font "context sense"

0x2A: uint16_t - font "index"

0x30: char * - name of font
```

## Other random notes
An `SAHandle` seems to be the FirstClass way of storing a blob of data behind a mutex, but it's still unclear...