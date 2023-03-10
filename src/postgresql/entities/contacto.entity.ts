import { Column, Entity, ManyToOne } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity('contacto', { schema: 'public' })
export class ContactoEntity {
  @Column('uuid', {
    primary: true,
    name: 'contacto_id',
    default: () => 'uuid_generate_v4()',
  })
  contactoId: string;

  @Column('character varying', { name: 'nombre', length: 50 })
  nombre: string;

  @Column('character varying', { name: 'apellido', length: 50, nullable: true })
  apellido: string;

  @Column('character varying', { name: 'email', length: 500, unique: true })
  email: string;

  @Column('character varying', { name: 'telefono', length: 50, unique: true })
  telefono: string;

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.contactos, {
    cascade: ['insert'],
  })
  usuario: UsuarioEntity;
}
