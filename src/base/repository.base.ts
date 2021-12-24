import { BadRequestException, NotFoundException } from '@nestjs/common';
import {
  DeepPartial,
  EntityRepository,
  FindConditions,
  FindManyOptions,
  FindOneOptions,
  Repository,
} from 'typeorm';

@EntityRepository()
export class BaseRepository<Entity> extends Repository<Entity> {
  async createItem(item: DeepPartial<Entity>) {
    try {
      const createResult = await this.save(item);
      return createResult;
    } catch (error) {
      throw new BadRequestException('unable to create');
    }
  }

  async findById(id: string) {
    try {
      const foundItem = this.findOne({ where: { id } });
      if (!foundItem) throw new Error();
      return foundItem;
    } catch (error) {
      throw new NotFoundException(
        `${this.metadata.name} with id ${id} not found`,
      );
    }
  }
  async findOneItem(filter: FindOneOptions<Entity>) {
    try {
      const foundItem = await this.findOne(filter);
      if (!foundItem) throw new Error();
      return foundItem;
    } catch (error) {
      throw new NotFoundException(`${this.metadata.name}  not found`);
    }
  }

  async findManyItem(filter: FindManyOptions<Entity>) {
    try {
      const items = await this.find(filter);
      return items;
    } catch (error) {
      throw new BadRequestException('visit typeorm to see query object');
    }
  }

  async deleteItem(filter: FindConditions<Entity>) {
    try {
      const deleteResult = await this.softDelete(filter);
      return deleteResult;
    } catch (error) {
      throw new BadRequestException('delete failure');
    }
  }

  async updateItem(
    entity: DeepPartial<Entity>,
    filter: FindConditions<Entity>,
  ) {
    try {
      const updateResult = await this.update(filter, entity);
      return updateResult;
    } catch (error) {
      throw new BadRequestException('update failure');
    }
  }
}
