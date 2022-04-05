import { IsNotEmpty, IsUrl } from "class-validator";

export class CountDto {
	@IsNotEmpty()
	@IsUrl()
	readonly product: string;

	@IsNotEmpty()
	readonly session: string;
}
