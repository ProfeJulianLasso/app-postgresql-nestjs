import { Column, Entity } from 'typeorm';

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
}
