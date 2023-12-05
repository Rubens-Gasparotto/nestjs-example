import { ConfigService } from '@nestjs/config';
import { Constants } from 'src/constants';
import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: Constants.DB_REPO,
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => await createConnection({
      type: configService.get('database.type'),
      host: configService.get('database.host'),
      port: configService.get('database.port'),
      username: configService.get('database.username'),
      password: configService.get('database.password'),
      database: configService.get('database.database'),
      synchronize: !(configService.get('app.production')),
      entities: ['src/modules/**/entities/*.entity.{ts,js}'],
    }),
  },
];