import { Body, Controller, Get, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsuarioEntity } from './postgresql/entities/usuario.entity';
import { UsuarioService } from './postgresql/services/usuario.service';

@Controller('usuario')
export class AppController {
  constructor(
    private readonly configService: ConfigService,
    private readonly usuarioService: UsuarioService,
  ) {}

  @Get('obtener-todos')
  getAllUsurios(): Promise<UsuarioEntity[]> {
    return this.usuarioService.buscarTodosLosUsuarios();
  }

  @Post()
  createUsuario(@Body() usuario: UsuarioEntity): Promise<UsuarioEntity> {
    return this.usuarioService.crearUsuario(usuario);
  }
}
