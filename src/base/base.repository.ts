import { BadRequestException, NotFoundException } from '@nestjs/common';
import {
  DeepPartial,
  EntityRepository,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { BaseEntity } from './base.entity';

@EntityRepository()
export class BaseRepository<
  Entity extends BaseEntity,
> extends Repository<Entity> {
  async createItem(item: DeepPartial<Entity>) {
    try {
      const newItem = this.create(item);
      const createdItem = await newItem.save();
      return createdItem;
    } catch (error) {
      throw new BadRequestException(`cannot create ${this.metadata.name}`);
    }
  }

  async findById(id: string) {
    const foundItem = await this.findOne(id);
    if (!foundItem)
      throw new NotFoundException(`${this.metadata.name} not found`);
    return foundItem;
  }

  async findOneItem(filter: FindOneOptions<Entity>) {
    const foundItem = await this.findOne(filter);
    if (!foundItem)
      throw new NotFoundException(`${this.metadata.name} not found`);
    return foundItem;
  }

  async findMany(filter: FindManyOptions<Entity>) {
    return this.find(filter);
  }

  async updateItem(
    entity: DeepPartial<Entity>,
    filter: FindConditions<Entity>,
  ) {
    try {
      const updateResult = await this.update(filter, entity);
      return updateResult;
    } catch (error) {
      throw new BadRequestException(`update ${this.metadata.name} failure`);
    }
  }

  async deleteItem(filter: FindConditions<Entity>) {
    try {
      const deleteResult = await this.softDelete(filter);
      return deleteResult;
    } catch (error) {
      throw new BadRequestException(`cannot delete ${this.metadata.name} item`);
    }
  }
}
