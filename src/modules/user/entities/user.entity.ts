import { IsEmail, Length } from 'class-validator';
import { BaseEntity } from 'src/base/entity.base';
import { BeforeInsert, BeforeUpdate, Column, Entity, Index } from 'typeorm';
import { hashSync } from 'bcryptjs';
@Entity()
export class User extends BaseEntity {
  @Column()
  @Length(2, 70)
  name: string;
  @Column({ select: false })
  @Length(10, 100)
  password: string;
  @Index({ unique: true })
  @IsEmail()
  email: string;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    this.password = hashSync(this.password);
  }
}
