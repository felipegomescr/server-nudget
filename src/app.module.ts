import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";

import { SubscriptionModule } from "subscription/subscription.module";

@Module({
	imports: [
		ConfigModule.forRoot(),
		MongooseModule.forRoot(process.env.MONGO_CONNECTION_URL),
		SubscriptionModule,
	],
})
export class AppModule {}
