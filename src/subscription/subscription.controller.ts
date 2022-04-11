import { Controller, Get, Post } from "@nestjs/common";

import { SubscriptionService } from "subscription/subscription.service";

@Controller("subscription")
export class SubscriptionController {
	constructor(private readonly subscriptionService: SubscriptionService) {}

	@Get()
	async count() {
		return this.subscriptionService.count();
	}

	@Post()
	async updateCount() {
		return this.subscriptionService.updateCount();
	}
}
