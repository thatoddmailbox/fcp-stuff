#define ENCRYPTION_MAGIC 0x57FD936B

// this has been made by staring at the x86 asm code in IDA and trying to reconstruct it in C
// it probably doesn't compile
// eh

int FCP2EncryptInPlace(void * data_ptr, int * data_len, uint32_t * input_seed)
{
	int var14 = (*data_len) + 3;

	uint32_t * end_ptr = data_ptr + (var14 & 0xFFFFFFFC);
	uint32_t seed = *input_seed;

	while (data_ptr < end_ptr) {
		uint32_t var28 = *seed;

		// swap_bytes is a function that swaps the given 8bit bytes in a 32bit number
		// it's not really valid C
		swap_bytes(&var28 + 0, &var28 + 3);
		swap_bytes(&var28 + 1, &var28 + 2);

		(*data_ptr) = (*data_ptr) ^ var28;
		data_ptr += 4;

		seed += (seed << 5);
		seed += ENCRYPTION_MAGIC;
	}

	(*input_seed) = seed;
	return seed;
}