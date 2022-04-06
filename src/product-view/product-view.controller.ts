import { Body, Controller, Get, Post, Query } from "@nestjs/common";

import { CountDto } from "product-view/dto/count.dto";
import { UpdateCountDto } from "product-view/dto/update-count.dto";
import { ProductViewService } from "product-view/product-view.service";

@Controller("product-view")
export class ProductViewController {
	constructor(private readonly productViewService: ProductViewService) {}

	@Get()
	async count(@Query() countDto: CountDto) {
		return this.productViewService.count(countDto);
	}

	@Post()
	async updateCount(@Body() updateCountDto: UpdateCountDto) {
		return this.productViewService.updateCount(updateCountDto);
	}
}
