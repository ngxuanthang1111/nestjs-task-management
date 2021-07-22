import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
  logger.log(`Server started on http://localhost:${configService.get('PORT')}`);
}
bootstrap();
