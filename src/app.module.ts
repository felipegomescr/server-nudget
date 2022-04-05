import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { ProductViewModule } from "product-view/product-view.module";

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
		ProductViewModule,
	],
})
export class AppModule {}
