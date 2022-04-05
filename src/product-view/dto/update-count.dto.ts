import { IsNotEmpty, IsUrl } from "class-validator";

export class UpdateCountDto {
	@IsNotEmpty()
	@IsUrl()
	readonly product: string;

	@IsNotEmpty()
	readonly session: string;
}
