import {
  DeepPartial,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
} from 'typeorm';
import { BaseEntity } from './entity.base';
import { BaseRepository } from './repository.base';

export class CRUDService<
  Entity extends BaseEntity,
  Repository extends BaseRepository<Entity>,
> {
  protected repository: Repository;
  constructor(repository: Repository) {
    this.repository = repository;
  }

  create(item: DeepPartial<Entity>) {
    return this.repository.createItem(item);
  }

  findById(id: string) {
    return this.repository.findById(id);
  }

  findOne(filter: FindOneOptions<Entity>) {
    return this.repository.findOneItem(filter);
  }

  findMany(filter: FindManyOptions<Entity>) {
    return this.repository.findManyItem(filter);
  }

  softDelete(condition: FindConditions<Entity>) {
    return this.repository.deleteItem(condition);
  }

  updateItem(condition: FindConditions<Entity>, entity: DeepPartial<Entity>) {
    return this.repository.updateItem(entity, condition);
  }
}
