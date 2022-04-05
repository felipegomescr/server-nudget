import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import type { Document } from "mongoose";

export type ProductViewDocument = ProductView & Document;

@Schema({
	timestamps: true,
})
export class ProductView {
	@Prop()
	product: string;

	@Prop()
	session: string;
}

export const ProductViewSchema = SchemaFactory.createForClass(ProductView);
