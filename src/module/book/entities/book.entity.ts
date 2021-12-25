import { IsNumber, Length } from 'class-validator';
import { BaseEntity } from 'src/base/base.entity';
import { Author } from 'src/module/author/entities/author.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Book extends BaseEntity {
  @Column()
  @Length(10, 50)
  title: string;
  @Column()
  @IsNumber()
  price: string;

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable({
    joinColumn: { name: 'author_id' },
    inverseJoinColumn: { name: 'book_id' },
    name: 'book_author',
  })
  authors: Author[];
}
