import { IsEmpty, IsNumber, Length } from 'class-validator';
import { Author } from 'src/module/author/entities/author.entity';

export class CreateBookDto {
  @Length(10, 50)
  title: string;
  @IsNumber()
  price: string;

  @IsEmpty()
  authors?: Author[];
}
