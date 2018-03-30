# Docedit format
Seems to be made up of the plaintext and another binary blob describing the styles and the "runs" of text where the styles apply.

## Structs
### Style
```
typedef struct {
	uint8_t magic; // 0xd0
} style_t;
```