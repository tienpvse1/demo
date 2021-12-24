import { IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(2, 70)
  name: string;
  @Length(10, 100)
  password: string;
  @IsEmail()
  email: string;
}
