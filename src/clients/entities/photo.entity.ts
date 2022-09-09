import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
@Schema()
export class Photo extends Document {
    @Prop()
    photo: Buffer;
    @Prop()
    name: String;
};

export const PhotoSchema = SchemaFactory.createForClass(Photo);