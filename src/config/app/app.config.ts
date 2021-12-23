import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { initializeSwagger } from '../doc/swagger.doc';

export const configApp = async (app: INestApplication) => {
  const config = app.get(ConfigService);
  app.setGlobalPrefix(config.get<string>('app.prefix'));
  // initializing swagger API document
  initializeSwagger(app);
  await app.listen(config.get<string>('app.port'));
};
