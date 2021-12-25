import {
  DeepPartial,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import { BaseRepository } from './base.repository';

export class CRUDService<
  Entity extends BaseEntity,
  Repository extends BaseRepository<Entity>,
> {
  protected repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  async create(item: DeepPartial<Entity>) {
    console.log(item);
    return this.repository.createItem(item);
  }

  async findById(id: string) {
    return this.repository.findById(id);
  }

  async findMany(filter: FindManyOptions<Entity>) {
    return this.repository.findMany(filter);
  }

  async findOne(filter: FindOneOptions<Entity>) {
    return this.repository.findOneItem(filter);
  }

  async update(filter: FindConditions<Entity>, entity: DeepPartial<Entity>) {
    return this.repository.updateItem(entity, filter);
  }

  async delete(filter: FindConditions<Entity>) {
    return this.repository.deleteItem(filter);
  }
}
