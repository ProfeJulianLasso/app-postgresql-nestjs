import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { CasaDireccionEntity } from './casa-direccion.entity';
import { ContactoEntity } from './contacto.entity';
import { RoleEntity } from './rol.entity';

@Index('usuario_apellido_key', ['apellido'])
@Index('usuario_nombre_key', ['nombre'])
@Index('usuario_nombre_apellido_key', ['nombre', 'apellido'])
@Index('usuario_email_key', ['email'], { unique: true })
@Index('usuario_primary_key', ['usuarioId'], { unique: true })
@Entity('usuario', { schema: 'public' })
export class UsuarioEntity {
  @Column('uuid', {
    primary: true,
    name: 'usuario_id',
    default: () => 'uuid_generate_v4()',
  })
  usuarioId: string;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @Column('character varying', { name: 'apellido', length: 50, nullable: true })
  apellido: string;

  @Column('character varying', { name: 'email', length: 500, unique: true })
  email: string;

  @Column('character varying', { name: 'password', length: 128, select: false })
  password: string;

  @OneToMany(() => ContactoEntity, (contacto) => contacto.usuario, {
    cascade: ['insert'],
  })
  contactos: ContactoEntity[];

  @OneToOne(
    () => CasaDireccionEntity,
    (casaDireccion) => casaDireccion.usuario,
    {
      cascade: ['insert'],
    },
  )
  direccion: CasaDireccionEntity;

  @ManyToMany(() => RoleEntity, (rol) => rol.usuarios, { cascade: ['insert'] })
  @JoinTable()
  roles: RoleEntity[];
}
