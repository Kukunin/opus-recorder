INPUT_DIR=./src
OUTPUT_DIR=./dist
OUTPUT_DIR_UNMINIFIED=./dist-unminified

LIBOPUS_ENCODER_SRC=$(INPUT_DIR)/encoderWorker.js
LIBOPUS_DECODER_SRC=$(INPUT_DIR)/decoderWorker.js
LIBOPUS_ENCODER_MIN=$(OUTPUT_DIR)/encoderWorker.min.js
LIBOPUS_ENCODER=$(OUTPUT_DIR_UNMINIFIED)/encoderWorker.js
LIBOPUS_DECODER_MIN=$(OUTPUT_DIR)/decoderWorker.min.js
LIBOPUS_DECODER=$(OUTPUT_DIR_UNMINIFIED)/decoderWorker.js

RECORDER_MIN=$(OUTPUT_DIR)/recorder.min.js
RECORDER=$(OUTPUT_DIR_UNMINIFIED)/recorder.js
RECORDER_SRC=$(INPUT_DIR)/recorder.js

WAVE_WORKER_MIN=$(OUTPUT_DIR)/waveWorker.min.js
WAVE_WORKER=$(OUTPUT_DIR_UNMINIFIED)/waveWorker.js
WAVE_WORKER_SRC=$(INPUT_DIR)/waveWorker.js

FAST_SOUND_WASM=fast-sound.min.wasm
FAST_SOUND_ASMJS=fast-sound.min.asm.js
FAST_SOUND_WASM_UNMINIFIED=fast-sound.wasm
FAST_SOUND_WAST_UNMINIFIED=fast-sound.wast
FAST_SOUND_ASMJS_UNMINIFIED=fast-sound.asm.js

default: $(LIBOPUS_ENCODER) $(LIBOPUS_ENCODER_MIN) $(LIBOPUS_DECODER) $(LIBOPUS_DECODER_MIN) $(RECORDER) $(RECORDER_MIN) $(WAVE_WORKER) $(WAVE_WORKER_MIN) test

clean:
	rm -rf $(OUTPUT_DIR) $(OUTPUT_DIR_UNMINIFIED)
	mkdir $(OUTPUT_DIR)
	mkdir $(OUTPUT_DIR_UNMINIFIED)

test:
	# Tests need to run relative to `dist` folder for wasm file import
	cd $(OUTPUT_DIR); node --expose-wasm ../test.js

.PHONY: test

$(LIBOPUS_ENCODER): $(LIBOPUS_ENCODER_SRC) $(LIBOPUS_OBJ) $(LIBSPEEXDSP_OBJ) $(FAST_SOUND_WASM_UNMINIFIED) $(FAST_SOUND_ASMJS_UNMINIFIED) $(FAST_SOUND_WAST_UNMINIFIED)
	npm run webpack -- --config webpack.config.js -d --output-library EncoderWorker $(LIBOPUS_ENCODER_SRC) --resolve-alias fast-sound=fast-sound/unminified -o $@

$(LIBOPUS_ENCODER_MIN): $(LIBOPUS_ENCODER_SRC) $(LIBOPUS_OBJ) $(LIBSPEEXDSP_OBJ) $(FAST_SOUND_WASM) $(FAST_SOUND_ASMJS)
	npm run webpack -- --config webpack.config.js -p --output-library EncoderWorker $(LIBOPUS_ENCODER_SRC) -o $@

$(LIBOPUS_DECODER): $(LIBOPUS_DECODER_SRC) $(LIBOPUS_OBJ) $(LIBSPEEXDSP_OBJ) $(FAST_SOUND_WASM_UNMINIFIED) $(FAST_SOUND_ASMJS_UNMINIFIED) $(FAST_SOUND_WAST_UNMINIFIED)
	npm run webpack -- --config webpack.config.js -d --output-library DecoderWorker $(LIBOPUS_DECODER_SRC) --resolve-alias fast-sound=fast-sound/unminified -o $@

$(LIBOPUS_DECODER_MIN): $(LIBOPUS_DECODER_SRC) $(LIBOPUS_OBJ) $(LIBSPEEXDSP_OBJ) $(FAST_SOUND_WASM) $(FAST_SOUND_ASMJS)
	npm run webpack -- --config webpack.config.js -p --output-library DecoderWorker $(LIBOPUS_DECODER_SRC) -o $@

$(RECORDER): $(RECORDER_SRC)
	npm run webpack -- --config webpack.config.js -d --output-library Recorder $(RECORDER_SRC) -o $@

$(RECORDER_MIN): $(RECORDER_SRC)
	npm run webpack -- --config webpack.config.js -p --output-library Recorder $(RECORDER_SRC) -o $@

$(WAVE_WORKER): $(WAVE_WORKER_SRC)
	npm run webpack -- --config webpack.config.js -d --output-library WaveWorker $(WAVE_WORKER_SRC) -o $@

$(WAVE_WORKER_MIN): $(WAVE_WORKER_SRC)
	npm run webpack -- --config webpack.config.js -p --output-library WaveWorker $(WAVE_WORKER_SRC) -o $@

$(FAST_SOUND_WASM_UNMINIFIED) $(FAST_SOUND_ASMJS_UNMINIFIED) $(FAST_SOUND_WAST_UNMINIFIED):
	cp node_modules/fast-sound/unminified/$@ $(OUTPUT_DIR_UNMINIFIED)/$@

$(FAST_SOUND_WASM) $(FAST_SOUND_ASMJS):
	cp node_modules/fast-sound/dist/$@ $(OUTPUT_DIR)/$@
