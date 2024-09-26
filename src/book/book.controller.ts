import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Book, BookService } from './book.service';

@Controller('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    getAllBooks(): Promise<Book[]> {
        return this.bookService.getAllBooks();
    }

    @Get(':id')
    getBookById(@Param('id') id: string): Promise<Book> {
        return this.bookService.getBookById(id);
    }

    @Post()
    createBook(@Body() book: Book): Promise<Book> {
        return this.bookService.createBook(book);
    }

    @Put(':id')
    updateBook(@Param('id') id: string, @Body() book: Book): Promise<Book> {
        return this.bookService.updateBook(id, book);
    }

    @Delete(':id')
    deleteBook(@Param('id') id: string): Promise<void> {
        return this.bookService.deleteBook(id);
    }

}
