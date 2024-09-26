import { Injectable } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class Book {
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

@Injectable()
export class BookService {
	private books = [
		{
			id: 'book0001',
			title: 'To Kill a Mockingbird',
			description:
				'A novel set in the Depression-era South, focusing on issues of race and injustice as seen through the eyes of a young girl named Scout Finch.',
			author: 'Harper Lee',
			publishedYear: 1960,
		},
		{
			id: 'book0002',
			title: '1984',
			description:
				'A dystopian novel that explores the dangers of totalitarianism, surveillance, and censorship, set in a society ruled by the Party and its leader, Big Brother.',
			author: 'George Orwell',
			publishedYear: 1949,
		},
		{
			id: 'book0003',
			title: 'Pride and Prejudice',
			description:
				'A classic romantic novel that follows Elizabeth Bennet as she navigates issues of manners, upbringing, morality, and marriage in the society of early 19th-century England.',
			author: 'Jane Austen',
			publishedYear: 1813,
		},
	];

	async getAllBooks(): Promise<Book[]> {
		return this.books;
	}

	async getBookById(id: string): Promise<Book> {
		return this.books.find((book) => book.id === id);
	}

	async createBook(book: Book): Promise<Book> {
		this.books.push(book);

		return book;
	}

	async updateBook(id: string, book: Book): Promise<Book> {
		const index = this.books.findIndex((book) => book.id === id);
		this.books[index] = { ...this.books[index], ...book };
		return book;
	}

	async deleteBook(id: string): Promise<void> {
		this.books = this.books.filter((book) => book.id !== id);
	}
}
