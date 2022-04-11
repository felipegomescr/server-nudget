import { Schema, SchemaFactory } from "@nestjs/mongoose";
import type { Document } from "mongoose";

export type SubscriptionDocument = Subscription & Document;

@Schema({
	timestamps: true,
})
export class Subscription {}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
