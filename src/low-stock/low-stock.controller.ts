import { Controller, Get, Query } from "@nestjs/common";

import { CountDto } from "low-stock/dto/count.dto";
import { LowStockService } from "low-stock/low-stock.service";

@Controller("low-stock")
export class LowStockController {
	constructor(private readonly lowStockService: LowStockService) {}

	@Get()
	async count(@Query() countDto: CountDto) {
		return this.lowStockService.count(countDto);
	}
}
