import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from '../author/author.module';
import { BookController } from './book.controller';
import { BookRepository } from './book.repository';
import { BookService } from './book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [TypeOrmModule.forFeature([BookRepository]), AuthorModule],
})
export class BookModule {}
