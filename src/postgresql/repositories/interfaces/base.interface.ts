export interface IBase<Entity> {
  create(entity: Entity): Promise<Entity>;
  update(id: string, entity: Entity): Promise<Entity>;
  delete(id: string): Promise<boolean>;
  findAll(): Promise<Entity[]>;
  findOneByUsuarioId(id: string): Promise<Entity>;
}
