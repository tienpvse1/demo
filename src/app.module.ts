import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionConfig, dbConfig } from './config/database/db.config';
import { appConfig } from './config/env/app.env';
import { AuthorModule } from './module/author/author.module';
import { BookModule } from './module/book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, dbConfig],
    }),
    TypeOrmModule.forRootAsync(connectionConfig),
    AuthorModule,
    BookModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
