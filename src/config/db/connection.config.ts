import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConnection = (
  config: ConfigService,
): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> => {
  return {
    type: 'mysql',
    host: config.get<string>('database.host'),
    port: config.get<number>('database.port'),
    username: config.get<string>('database.username'),
    password: config.get<string>('database.password'),
    database: config.get<string>('database.name'),
    entities: ['dist/**/entities/*.entity{.ts,.js}'],
    logger: 'advanced-console',
    synchronize: true,
    logging: 'all',
  };
};
