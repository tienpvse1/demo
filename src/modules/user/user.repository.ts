import { BaseRepository } from 'src/base/repository.base';
import { EntityRepository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {}
