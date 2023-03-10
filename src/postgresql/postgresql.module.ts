import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { UsuarioEntity } from './entities/usuario.entity';
import { UsuarioRepository } from './repositories/usuario.repository';
import { UsuarioService } from './services/usuario.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([UsuarioEntity]),
  ],
  controllers: [],
  providers: [TypeOrmPostgresConfigService, UsuarioRepository, UsuarioService],
  exports: [UsuarioRepository, UsuarioService],
})
export class PostgreSQLModule {}
