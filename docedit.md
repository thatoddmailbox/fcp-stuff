# Docedit format
Seems to be made up of the plaintext and another binary blob describing the styles and the "runs" of text where the styles apply. These structs and things refer to the binary "docedit" blob.

A docedit blob always starts with a fixed header of 0x30 bytes.

## Docedit structs
### Header
Always a fixed 0x30 bytes. This data is **big endian** over the wire, but FirstClass almost immediately converts it to little endian for internal use.

```
0x00: uint16_t - ???
0x02: uint32_t - object count
0x06: uint32_t - font count
0x0A: uint32_t - rev (?) count
0x0E: uint32_t - section count
0x12: uint32_t - run count
0x16: uint32_t - style count
0x1A: uint32_t - rec (?) count
0x1E: uint32_t - ???
0x22: uint32_t - ???
0x26: uint16_t - ???
0x28: uint32_t - ???
0x2C: uint32_t - dp (?)
```

### Font
```
typedef struct {

} font_t;
```
### Style
```
typedef struct {
	uint8_t magic; // 0xd0
} style_t;
```

## Internal structs
### CDTFC
```
0x20: void * - logging function, set to a printf-type function to enable logging

0x150: docedit header (0x30) - a copy of the docedit header, in the local representation

0x162: uint32_t - something that, when 0xFFFFFFFF, indicates it's time to just give up parsing the document's header

0x194: SAHandle (uint32_t) - a handle to the docedit data
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