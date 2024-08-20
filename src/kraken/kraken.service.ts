import { Injectable } from '@nestjs/common';
import { InsertDataDto } from './dto/insert-data.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DynamicData } from './schemas/dynamic-data.schema';
import { Model } from 'mongoose';

@Injectable()
export class KrakenService {
  constructor(
    @InjectModel(DynamicData.name) private dynamicDataModel: Model<DynamicData>,
  ) { }
  create(insertDataDto: InsertDataDto) {
    return this.dynamicDataModel.insertMany(insertDataDto);
  }

}
