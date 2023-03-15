/* eslint-disable prettier/prettier */
// o modulo e um centralizador de informações correlacionaveis e precisa ter o decorator @Module

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioController } from './usuario.controller';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioSerice } from './usuario.service';


@Module({
  imports: [
    // precisamos importar as entidades usar o Typeorm para fazer uso das tabelas do bd, crie arquivo usuario.service.ts e injete o repositiorio  
    TypeOrmModule.forFeature([UsuarioEntity])
  ],
  controllers: [UsuarioController],
  providers: [
    UsuarioSerice
  ]
})
export class UsuarioModule {}

// vá para o arquivo app.module.ts e atribua UsuarioModule em @Module dentro da chave imports