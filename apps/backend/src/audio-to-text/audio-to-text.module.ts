import { Module } from '@nestjs/common';
import { AudioToTextController } from './controller/audio-to-text.controller';
import { WhisperService } from './service/whisper.service';

@Module({
  imports: [],
  controllers: [AudioToTextController],
  providers: [WhisperService],
})
export class AudioToTextModule {}
