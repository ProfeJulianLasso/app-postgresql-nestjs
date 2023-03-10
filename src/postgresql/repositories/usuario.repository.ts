import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from '../entities/usuario.entity';
import { IBase } from './interfaces/base.interface';

export class UsuarioRepository implements IBase<UsuarioEntity> {
  constructor(
    @InjectRepository(UsuarioEntity)
    private usersRepository: Repository<UsuarioEntity>,
  ) {}

  async create(entity: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usersRepository.save(entity);
  }

  async update(id: string, entity: UsuarioEntity): Promise<UsuarioEntity> {
    const data = await this.usersRepository.findOneBy({ usuarioId: id });
    if (data) {
      const newEntity = {
        ...data,
        ...entity,
        usuarioId: id,
      };
      return this.usersRepository.save(newEntity);
    }
    throw new Error('usuarioId not found');
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.usersRepository.findOneBy({ usuarioId: id });
    if (data) {
      await this.usersRepository.remove(data);
      return true;
    }
    throw new Error('usuarioId not found');
  }

  async findAll(contacts?: boolean): Promise<UsuarioEntity[]> {
    const options = contacts ? { relations: ['contactos'] } : {};
    return this.usersRepository.find(options);
  }

  async findOneByUsuarioId(id: string): Promise<UsuarioEntity> {
    const data = await this.usersRepository.findOneBy({ usuarioId: id });
    if (data) return data;
    throw new Error('usuarioId not found');
  }
}
