import { BaseRepository } from 'src/base/base.repository';
import { EntityRepository } from 'typeorm';
import { Author } from './entities/author.entity';

@EntityRepository(Author)
export class AuthorRepository extends BaseRepository<Author> {}
