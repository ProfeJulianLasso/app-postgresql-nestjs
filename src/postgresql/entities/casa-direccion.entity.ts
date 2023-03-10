import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';

@Entity('casa_direccion', { schema: 'public' })
export class CasaDireccionEntity {
  @Column('uuid', {
    primary: true,
    name: 'casa_direccion_id',
    default: () => 'uuid_generate_v4()',
  })
  casaDireccionId: string;

  @Column('character varying', { name: 'direccion', length: 500 })
  casa: string;

  @OneToOne(() => UsuarioEntity, (usuario) => usuario.direccion)
  @JoinColumn()
  usuario: UsuarioEntity;
}
