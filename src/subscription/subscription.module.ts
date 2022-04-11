import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { SubscriptionController } from "subscription/subscription.controller";
import {
	Subscription,
	SubscriptionSchema,
} from "subscription/subscription.schema";
import { SubscriptionService } from "subscription/subscription.service";

@Module({
	controllers: [SubscriptionController],
	imports: [
		MongooseModule.forFeature([
			{
				name: Subscription.name,
				schema: SubscriptionSchema,
			},
		]),
	],
	providers: [SubscriptionService],
})
export class SubscriptionModule {}
