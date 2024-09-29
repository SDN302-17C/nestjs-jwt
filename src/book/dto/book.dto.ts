import { ApiProperty } from '@nestjs/swagger';

export class BookDto {
	id: string;

	@ApiProperty()
	title: string;

	@ApiProperty()
	description: string;

	@ApiProperty()
	author: string;

	@ApiProperty()
	publishedYear: number;
}
