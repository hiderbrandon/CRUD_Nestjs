import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Photo extends Document {
    @Prop({ type: String })
    photo: string;
    @Prop({ type: String })
    name: string;
    @Prop({ required: true, type: Number })
    idNumber: number;
    @Prop({ required: true, type: String })
    idType: "cc" | "ce" | "ti";
};

export const PhotoSchema = SchemaFactory.createForClass(Photo);