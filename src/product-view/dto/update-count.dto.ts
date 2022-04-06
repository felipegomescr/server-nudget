import { IsNotEmpty, IsUrl } from "class-validator";

export class UpdateCountDto {
	@IsNotEmpty()
	@IsUrl()
	readonly productUrl: string;

	@IsNotEmpty()
	readonly sessionId: string;
}
