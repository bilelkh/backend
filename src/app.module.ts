import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { KrakenModule } from './kraken/kraken.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env${process.env.NODE_ENV || ''}`,
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
    }), AuthModule, KrakenModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
