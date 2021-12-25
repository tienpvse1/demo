import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/base/base.service';
import { AuthorService } from '../author/author.service';
import { BookRepository } from './book.repository';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './entities/book.entity';

@Injectable()
export class BookService extends CRUDService<Book, BookRepository> {
  constructor(
    @InjectRepository(BookRepository)
    repository: BookRepository,
    private authorService: AuthorService,
  ) {
    super(repository);
  }

  async addBook(authorId: string, book: CreateBookDto) {
    const author = await this.authorService.findById(authorId);
    book.authors = [];
    book.authors.push(author);
    return this.create(book);
  }
}
