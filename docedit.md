# Docedit format
Seems to be made up of the plaintext and another binary blob describing the styles and the "runs" of text where the styles apply. These structs and things refer to the binary "docedit" blob.

A docedit blob always starts with a fixed header of 0x30 bytes. Immediately after this header comes a fixed number of font structs, for the number of fonts specified in the header. Then come the numspec structs, style structs, and run structs, in that order. After that comes the binary record section, which contains multiple binary records. These records assign names to fonts , set document properties, and do other, unclear things. The size of the binrec section is supposed to be given in the header in field 0x1E, as binrec entries are variable size. However, this size seems to be inaccurate?

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
0x1A: uint32_t - bin rec count
0x1E: uint32_t - binary data len
0x22: uint32_t - text length
0x26: uint16_t - next object idx
0x28: uint32_t - source info (?)
0x2C: uint32_t - document properties
```

### Object
```
0x00: uint32_t - class ID
0x04: uint16_t - data type
0x06: uint32_t - obj data
0x0A: uint32_t - comment
0x0E: uint32_t - height
0x12: uint32_t - width
0x16: uint32_t - attachment index
0x1A: uint32_t - attachment name
0x1E: uint32_t - crc
```

### Font
```
0x0: uint16_t - charset
0x2: uint16_t - direction
0x4: uint16_t - context sense (?)
0x6: uint32_t - name (refers to the binrec index of the name)
```

### Revision
```
0x00: uint32_t - timestamp
0x04: uint32_t - author
0x08: uint32_t - URL
0x0C: uint32_t - comment
```

### Numspec
```
0x0: uint32_t: index
0x4: uint16_t: spare (?)
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

### Binary data
This section is a chunk of data equal to the "binary data len" (field 0x1E) of the header. It's composed of a certain number of "binrecs" (BINary RECords), the number of which can be found in the header (field 0x1A). Each binrec has a `uint32_t` size, and is then followed by than many bytes of binary data. The data by itself doesn't mean anything; however, fields of other things will refer to binrecs. For example, the "name" field of a font is actually an index, indicating which binrec contains the name of the font. Binrecs can also point to other binrecs. For example, a link object will have the "data" field of the object struct pointing to a binrec that's actually a struct describing the link, and that struct will point to other binrecs for things like the link URL and name.

### Overlay
After the binary data comes the overlay information. It's a similar format to the main document.
#### Header
```
0x0: uint32_t: style count
0x4: uint32_t: object count
```

#### Overlay object
This struct is the same as a regular object struct, but is prefixed by an index, of type `uint32_t`.

#### Overlay style
This struct is the same as a regular style struct, but is prefixed by an index, of type `uint32_t`.

### Sizing
_you should probably ignore this section_
* header: 48 bytes
* each object: 34 bytes
* each font: 10 bytes
* each revision: 16 bytes
* each numspec: 6 bytes
* each style: 60 bytes
* each run: 12 bytes
* add binlen (from header)
* add text length (from header, but seems to always be zero?)
if you've got here and there are more than 8 bytes, there's an overlay header
* overlay header: 2 bytes
* overlay objects: ???
* overlay styles: ???
* each binrec: ??? bytes