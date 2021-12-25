import { BaseRepository } from 'src/base/base.repository';
import { EntityRepository } from 'typeorm';
import { Book } from './entities/book.entity';

@EntityRepository(Book)
export class BookRepository extends BaseRepository<Book> {}
