import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import {
	ProductView,
	ProductViewSchema,
} from "product-view/schemas/product-view.schema";
import { ProductViewController } from "product-view/product-view.controller";
import { ProductViewService } from "product-view/product-view.service";

@Module({
	controllers: [ProductViewController],
	imports: [
		MongooseModule.forFeature([
			{
				name: ProductView.name,
				schema: ProductViewSchema,
			},
		]),
	],
	providers: [ProductViewService],
})
export class ProductViewModule {}
