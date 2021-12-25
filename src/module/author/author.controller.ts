import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { FindManyOptions, FindOneOptions } from 'typeorm';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './entities/author.entity';

@Controller('author')
@ApiTags('author')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  create(@Body() author: CreateAuthorDto) {
    return this.authorService.create(author);
  }

  @Get('id')
  getAuthorById(@Param('id') id: string) {
    return this.authorService.findById(id);
  }

  /**
   * get author using query object
   */
  @Get('one')
  @ApiBody({ type: Object })
  getAuthor(@Body() filter: FindOneOptions<Author>) {
    return this.authorService.findOne(filter);
  }

  @Get('many')
  getAuthors(@Body() filter: FindManyOptions<Author>) {
    return this.authorService.findMany(filter);
  }
}
