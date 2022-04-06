import axios from "axios";
import { Injectable } from "@nestjs/common";

import type { CountDto } from "low-stock/dto/count.dto";

@Injectable()
export class LowStockService {
	async count(countDto: CountDto) {
		const access_token =
			"APP_ID-3129-4a5a7d62caf4f8554128e3ab4a088003a7101b25c72a1b6ecfbe8c79226b5ec4";

		const { data } = await axios.get(`${countDto.storeUrl}/web_api/products`, {
			params: {
				id: countDto.productId,
				access_token,
				attrs: "Product.minimum_stock_alert,Product.stock",
			},
		});

		const minimum_stock_alert = +data.Products[0].Product.minimum_stock_alert;
		const stock = +data.Products[0].Product.stock;

		return {
			minimumStockAlert: minimum_stock_alert || 20,
			stock,
		};
	}
}
