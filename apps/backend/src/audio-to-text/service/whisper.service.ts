import { Injectable } from '@nestjs/common';
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

@Injectable()
export class WhisperService {
  transcribeAudioToText(audio: any): any {
    console.log('audio', audio);

    try {
      execSync(
        'whisper apps/backend/test-data/test.m4a --model tiny --language English --task transcribe --output_dir output'
      );
    } catch (error) {
      console.error(`error: ${error}`);
    }

    const data = readFileSync('output/test.json', 'utf8');

    return data;
  }
}
