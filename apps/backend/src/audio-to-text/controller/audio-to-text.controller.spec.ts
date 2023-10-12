import { Test, TestingModule } from '@nestjs/testing';
import { AudioToTextController } from './audio-to-text.controller';
import { AudioToTextService } from '../service/audio-to-text.service';

describe('AppController', () => {
  let appController: AudioToTextController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AudioToTextController],
      providers: [AudioToTextService],
    }).compile();

    appController = app.get<AudioToTextController>(AudioToTextController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
