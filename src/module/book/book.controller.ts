import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@Controller('book')
@ApiTags('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post(':authorId')
  addBook(@Body() book: CreateBookDto, @Param('authorId') authorId: string) {
    return this.bookService.addBook(authorId, book);
  }
  /**
   * get book using query object
   */
  @Get('one')
  @ApiBody({ type: Object })
  getAuthor(@Body() filter: FindOneOptions<Book>) {
    return this.bookService.findOne(filter);
  }

  @Get('many')
  getAuthors(@Body() filter: FindManyOptions<Book>) {
    return this.bookService.findMany(filter);
  }
}
