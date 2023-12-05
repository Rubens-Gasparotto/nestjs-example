import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';

const routes: Routes = [
  { path: 'usuarios', module: UsuariosModule }
];

@Module({
  imports: [
    UsuariosModule,
    RouterModule.register(routes),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig]
    })
  ]
})
export class AppModule { }
