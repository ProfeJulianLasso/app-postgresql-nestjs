import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../entities/usuario.entity';
import { UsuarioRepository } from '../repositories/usuario.repository';
import { IUsuarioService } from './interface/usuario-service.interface';

@Injectable()
export class UsuarioService implements IUsuarioService<UsuarioEntity> {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}

  crearUsuario(entity: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usuarioRepository.create(entity);
  }

  actualizarUsuario(
    usuarioId: string,
    entity: UsuarioEntity,
  ): Promise<UsuarioEntity> {
    return this.usuarioRepository.update(usuarioId, entity);
  }

  borrarUsuario(usuarioId: string): Promise<boolean> {
    return this.usuarioRepository.delete(usuarioId);
  }

  buscarTodosLosUsuarios(): Promise<UsuarioEntity[]> {
    return this.usuarioRepository.findAll();
  }

  buscarUnUsuarioPorUsuarioId(usuarioId: string): Promise<UsuarioEntity> {
    return this.usuarioRepository.findOneByUsuarioId(usuarioId);
  }
}
