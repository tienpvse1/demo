import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CRUDService } from 'src/base/base.service';
import { AuthorRepository } from './author.repository';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorService extends CRUDService<Author, AuthorRepository> {
  constructor(
    @InjectRepository(AuthorRepository) repository: AuthorRepository,
  ) {
    super(repository);
  }
}
