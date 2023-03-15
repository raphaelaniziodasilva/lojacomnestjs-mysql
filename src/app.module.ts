import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario/usuario.entity';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  // precisamos fazer a conexão com o banco de dados Mysql do desktop, precisamos que o app.module se conecte com o bd
  imports: [
    // importando o bd e fazendo a conexão, precisamos de outro modulo porque não e o nest que vai se conectar diretamente com o bd, o nest vai se conectar com o TypeOrm que vai se conectar com o bd
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: 'Vaizards1$',
      database: 'lojacomnestjsMYSQL',
      entities: [UsuarioEntity],
      synchronize: true, // so vai servir para uso desenvolvimento e não pode ser utilizado em uso de produção

      dropSchema: true, // resolve o erro QueryFailedError: Table 'usuario' already exists do banco de dados

      // agora vá criar as entidades da aplicação
    }),
    UsuarioModule,
  ],
  controllers: [],
  providers: [
    {
      // utilizando os interceptadores
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
