import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import type { Model } from "mongoose";

import { Subscription } from "subscription/subscription.schema";
import type { SubscriptionDocument } from "subscription/subscription.schema";

@Injectable()
export class SubscriptionService {
	constructor(
		@InjectModel(Subscription.name)
		private readonly subscriptionModel: Model<SubscriptionDocument>
	) {}

	async count() {
		return this.subscriptionModel.count({});
	}

	async updateCount() {
		return this.subscriptionModel.create();
	}
}
