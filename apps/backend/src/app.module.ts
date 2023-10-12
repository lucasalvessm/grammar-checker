import { Module } from '@nestjs/common';
import { AudioToTextModule } from './audio-to-text/audio-to-text.module';

@Module({
  imports: [AudioToTextModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
