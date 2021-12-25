import { IsDate, Length } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateAuthorDto {
  @Length(6, 50)
  name: string;

  @IsDate()
  @Type(() => Date)
  birth: Date;
}
