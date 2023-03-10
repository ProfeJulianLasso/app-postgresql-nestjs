import { Column, Entity, ManyToMany } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity('rol', { schema: 'public' })
export class RoleEntity {
  @Column('uuid', {
    primary: true,
    name: 'rol_id',
    default: () => 'uuid_generate_v4()',
  })
  rolId: string;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @ManyToMany(() => UsuarioEntity, (usuario) => usuario.roles)
  usuarios: UsuarioEntity[];
}
