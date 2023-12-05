import { Inject, Injectable } from '@nestjs/common';
import { Constants } from 'src/constants';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @Inject(Constants.USUARIO_REPO)
    private usuarioRepository: Repository<Usuario>,
  ) { }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuarioRepository.create(createUsuarioDto);
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneOrFail(id);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<UpdateResult> {
    return this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.usuarioRepository.delete(id);
  }
}
