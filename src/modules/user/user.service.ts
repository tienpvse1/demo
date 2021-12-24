import { Injectable } from '@nestjs/common';
import { CRUDService } from 'src/base/service.base';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService extends CRUDService<User, UserRepository> {
  constructor(repository: UserRepository) {
    super(repository);
  }
}
