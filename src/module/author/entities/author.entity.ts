import { Type } from 'class-transformer';
import { IsDate, Length } from 'class-validator';
import { BaseEntity } from 'src/base/base.entity';
import { Book } from 'src/module/book/entities/book.entity';
import { Column, Entity, ManyToMany } from 'typeorm';
@Entity()
export class Author extends BaseEntity {
  @Column()
  @Length(6, 50)
  name: string;

  @Column()
  @IsDate()
  @Type(() => Date)
  birth: Date;

  @ManyToMany(() => Book, (book) => book.authors)
  books: Book[];
}
