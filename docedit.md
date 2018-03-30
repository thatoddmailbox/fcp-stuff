# Docedit format
Seems to be made up of the plaintext and another binary blob describing the styles and the "runs" of text where the styles apply. These structs and things refer to the binary "docedit" blob.

A docedit blob always starts with a fixed header of 0x30 bytes. FirstClass takes this header and converts it to this weird "local" header format.

To go from the docedit version to the internal local thing, swap the following (zero-indexed) bytes:
* 0 and 1
* 2 and 5
* 3 and 4
* 6 and 9
* 7 and 8
* 10 and 13
* 11 and 12
* 14 and 17
* 15 and 16
* 18 and 21
* 19 and 20
* 22 and 25
* 23 and 24
* 26 and 29
* 27 and 28
* 30 and 33
* 31 and 32
* 34 and 37
* 35 and 36
* 38 and 39
* 40 and 43
* 41 and 42
* 44 and 47
* 45 and 46

Basically it just swaps big -> small endian but I was too dumb to realise it at the time

## Docedit structs
### Header
Always a fixed 0x30 bytes. This data concerns the internal FirstClass local header representation, see above.

```
0x02: uint32_t - object count
0x06: uint32_t - font count
0x0A: uint32_t - rev (?) count
0x0E: uint32_t - section count
0x12: uint32_t - run count
0x16: uint32_t - style count
0x1A: uint32_t - rec (?) count

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