import { IsNotEmpty, IsUrl } from "class-validator";

export class CountDto {
	@IsNotEmpty()
	readonly productId: string;

	@IsNotEmpty()
	@IsUrl()
	readonly storeUrl: string;
}
