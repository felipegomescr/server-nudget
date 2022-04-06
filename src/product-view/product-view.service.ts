import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import type { Model } from "mongoose";

import { ProductView } from "product-view/product-view.schema";
import type { CountDto } from "product-view/dto/count.dto";
import type { UpdateCountDto } from "product-view/dto/update-count.dto";
import type { ProductViewDocument } from "product-view/product-view.schema";

@Injectable()
export class ProductViewService {
	constructor(
		@InjectModel(ProductView.name)
		private readonly productViewModel: Model<ProductViewDocument>
	) {}

	async count(countDto: CountDto) {
		const $gte = new Date();

		$gte.setMinutes($gte.getMinutes() - 5);

		return this.productViewModel.count({
			productUrl: countDto.productUrl,
			sessionId: {
				$ne: countDto.sessionId,
			},
			createdAt: {
				$gte,
			},
		});
	}

	async updateCount(updateCountDto: UpdateCountDto) {
		return this.productViewModel.create(updateCountDto);
	}
}
