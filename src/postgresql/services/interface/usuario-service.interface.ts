export interface IUsuarioService<Entity> {
  crearUsuario(entity: Entity): Promise<Entity>;
  actualizarUsuario(usuarioId: string, entity: Entity): Promise<Entity>;
  borrarUsuario(usuarioId: string): Promise<boolean>;
  buscarTodosLosUsuarios(): Promise<Entity[]>;
  buscarUnUsuarioPorUsuarioId(usuarioId: string): Promise<Entity>;
}
