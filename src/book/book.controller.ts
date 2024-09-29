import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { BookDto } from './dto/book.dto';

@ApiTags('books')
@ApiBearerAuth()
@Controller('books')
export class BookController {
	constructor(private readonly bookService: BookService) {}

	@Get()
	getAllBooks(): Promise<BookDto[]> {
		return this.bookService.getAllBooks();
	}

	@Get(':id')
	getBookById(@Param('id') id: string): Promise<BookDto> {
		return this.bookService.getBookById(id);
	}

	@Post()
	createBook(@Body() book: BookDto): Promise<BookDto> {
		return this.bookService.createBook(book);
	}

	@Put(':id')
	updateBook(@Param('id') id: string, @Body() book: BookDto): Promise<BookDto> {
		return this.bookService.updateBook(id, book);
	}

	@Delete(':id')
	deleteBook(@Param('id') id: string): Promise<void> {
		return this.bookService.deleteBook(id);
	}
}
