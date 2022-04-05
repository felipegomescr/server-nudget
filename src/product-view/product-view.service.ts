import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import type { Model } from "mongoose";

import { CountDto } from "product-view/dto/count.dto";
import { UpdateCountDto } from "product-view/dto/update-count.dto";
import { ProductView } from "product-view/schemas/product-view.schema";
import type { ProductViewDocument } from "product-view/schemas/product-view.schema";

@Injectable()
export class ProductViewService {
	constructor(
		@InjectModel(ProductView.name)
		private readonly productViewModel: Model<ProductViewDocument>
	) {}

	async count(countDto: CountDto): Promise<number> {
		const $gte = new Date();

		$gte.setMinutes($gte.getMinutes() - 5);

		return this.productViewModel.count({
			product: countDto.product,
			session: {
				$ne: countDto.session,
			},
			createdAt: {
				$gte,
			},
		});
	}

	async updateCount(updateCountDto: UpdateCountDto): Promise<ProductView> {
		return this.productViewModel.create(updateCountDto);
	}
}
