import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User {
    @Prop({ required: true })
    googleId: string;

    @Prop()
    name: string;

    @Prop()
    email: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);