import { Constants } from 'src/constants';
import { Usuario } from 'src/modules/usuarios/entities/usuario.entity';
import { Connection } from 'typeorm';

export const usuariosProviders = [
  {
    provide: Constants.USUARIO_REPO,
    useFactory: (connection: Connection) => connection.getRepository(Usuario),
    inject: [Constants.DB_REPO],
  },
];