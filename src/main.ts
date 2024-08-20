import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('process.env.JWT_SECRET,', process.env.JWT_SECRET)
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  })
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
