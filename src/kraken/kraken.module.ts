import { Module } from '@nestjs/common';
import { KrakenService } from './kraken.service';
import { KrakenController } from './kraken.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DynamicDataSchema,DynamicData} from './schemas/dynamic-data.schema';
import { JwtService } from '@nestjs/jwt';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: DynamicData.name, schema: DynamicDataSchema }]),
  ],
  controllers: [KrakenController],
  providers: [KrakenService, JwtService],
})
export class KrakenModule {}
