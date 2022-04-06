import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { LowStockModule } from "low-stock/low-stock.module";
import { ProductViewModule } from "product-view/product-view.module";

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
		LowStockModule,
		ProductViewModule,
	],
})
export class AppModule {}
