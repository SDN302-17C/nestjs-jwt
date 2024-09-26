import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
	controllers: [BookController],
	providers: [
		BookService,
		{
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
	],
})
export class BookModule {}
