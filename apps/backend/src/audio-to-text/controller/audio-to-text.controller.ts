import { Controller, Get } from '@nestjs/common';
import { WhisperService } from '../service/whisper.service';

@Controller('audio-to-text')
export class AudioToTextController {
  constructor(private readonly whisperService: WhisperService) {}

  @Get()
  getHello(): any {
    return this.whisperService.transcribeAudioToText({});
    /* 
    whisper test-data/test.m4a --model tiny --language English --task transcribe --output_dir output

    whisper test-data/test.m4a --model medium --language English  --task transcribe --output_dir output 
*/
  }
}

/* 
  https://nodejs.org/api/child_process.html#child_processexeccommand-options-callback
  https://nodejs.org/docs/latest-v20.x/api/fs.html


  https://github.com/openai/whisper
  https://docs.nestjs.com/techniques/streaming-files
  https://docs.docker.com/engine/reference/builder/
*/
