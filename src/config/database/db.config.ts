import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const dbConfig = () => ({
  database: {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    database: process.env.MYSQL_DATABASE || 'test',
    password: process.env.MYSQL_ROOT_PASSWORD || '123456',
    port: process.env.MYSQL_PORT || 3306,
  },
});

// MYSQL_ROOT_PASSWORD= "example"
// MYSQL_DATABASE= "query_object"
// MYSQL_HOST="localhost"

export const connectionConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get<string>('database.host'),
    port: config.get<number>('database.port'),
    username: 'root',
    password: config.get<string>('database.password'),
    database: config.get<string>('database.database'),
    entities: ['dist/module/**/entities/*.entity{.ts,.js}'],
    logger: 'advanced-console',
    synchronize: true,
    logging: 'all',
  }),
};
