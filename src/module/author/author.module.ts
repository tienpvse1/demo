import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorController } from './author.controller';
import { AuthorRepository } from './author.repository';
import { AuthorService } from './author.service';

@Module({
  controllers: [AuthorController],
  providers: [AuthorService],
  imports: [TypeOrmModule.forFeature([AuthorRepository])],
  exports: [AuthorService],
})
export class AuthorModule {}
('');
