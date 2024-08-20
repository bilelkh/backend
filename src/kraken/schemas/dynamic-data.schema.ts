import { Schema, Prop, SchemaFactory, } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema({ strict: false }) // Allows for dynamic fields
export class DynamicData extends Document {}

export const DynamicDataSchema = SchemaFactory.createForClass(DynamicData);