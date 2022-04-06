import { IsNotEmpty, IsUrl } from "class-validator";

export class CountDto {
	@IsNotEmpty()
	@IsUrl()
	readonly productUrl: string;

	@IsNotEmpty()
	readonly sessionId: string;
}
