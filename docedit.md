# Docedit format
Seems to be made up of the plaintext and another binary blob describing the styles and the "runs" of text where the styles apply. These structs and things refer to the binary "docedit" blob.

A docedit blob always starts with a fixed header of 0x30 bytes. Immediately after this header comes a fixed number of font structs, for the number of fonts specified in the header. There's 6 bytes of some unknown weirdness followed by a fixed number of style structs, which is then immediately followed by a fixed number of run structs.

## Docedit structs
### Header
Always a fixed 0x30 bytes. This data is **big endian** over the wire, but FirstClass almost immediately converts it to little endian for internal use.

```
0x00: uint16_t - version
0x02: uint32_t - object count
0x06: uint32_t - font count
0x0A: uint32_t - revision count
0x0E: uint32_t - numspec count
0x12: uint32_t - run count
0x16: uint32_t - style count
0x1A: uint32_t - bin rec (?) count
0x1E: uint32_t - bin len (?)
0x22: uint32_t - text length
0x26: uint16_t - next object idx
0x28: uint32_t - source info (?)
0x2C: uint32_t - document properties
```

### Font
```
0x0: uint16_t - charset
0x2: uint16_t - direction
0x4: uint16_t - context sense (?)
0x6: uint32_t - name (except it actually seems to be a number that refers to a string later in the blob)
```

### Style
```
0x0: uint32_t - class ID, seems to always be 0x000000D0
0x4: uint32_t - attributes
0x8: uint32_t - name (seems to always be 0xFFFFFFFF?)
0xC: uint16_t - "xNumSpecIdx", the ID of the numspec for this style
0xE: uint16_t - "xRevIdx", the ID of the revision for this style
0x10: uint16_t - justification
0x12: uint16_t - "NumSpecIndex" (?)
0x14: uint16_t - "RevisionIndex" (?)
0x16: uint32_t - foreground color, 32-bit RGBA format
0x1A: uint32_t - background color, 32-bit RGBA format
0x1E: uint16_t - spacing
0x20: uint16_t - left indent
0x22: uint16_t - right indent
0x24: uint16_t - first indent (?)
0x26: uint32_t - tab list (?)
0x2A: see below
```

There are then two possibilities for the remaining 0x12 bytes, depending on what type of style it is (unclear how to determine what type of style is which...):

#### Base style
```
0x0: uint16_t: (font?) face
0x2: uint32_t: font index
0x6: uint16_t: size
0x8: uint16_t: rule height
0xA: uint16_t: rule width
0xC: uint16_t: alignment
0xE: uint16_t: space
0x10: uint16_t: visible
```

#### Table style
```
0x0: uint16_t: alignment
0x2: uint16_t: space
0x4: uint16_t: "VertAlign" (?)
0x6: uint16_t: cell spacing
0x8: uint16_t: frame border width
0xA: uint16_t: column border width
0xC: uint16_t: row border width
0xE: uint32_t: border color, presumably 32-bit RGBA
```

### Run
```
0x0: uint32_t: run length
0x4: uint32_t: style index
0x8: uint32_t: object index
```

### Sizing
* 0x30
* each object: 34 bytes
* each font: 10 bytes
* each revision: 16 bytes
* each numspec:


## Internal structs
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