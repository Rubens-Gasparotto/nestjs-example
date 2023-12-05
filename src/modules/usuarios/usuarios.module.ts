import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from 'src/database.module';
import { usuariosProviders } from 'src/providers/usuarios.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [
    UsuariosService,
    ...usuariosProviders
  ]
})
export class UsuariosModule { }
