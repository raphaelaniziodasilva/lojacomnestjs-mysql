/* eslint-disable prettier/prettier */
// aqui vai ser o nosso repositorio aonde vai ter metodos para manipular a tabela usuario do banco de dados
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AtualizarUsuarioDTO } from "./dto/AtualizarUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";

@Injectable()
export class UsuarioSerice {
    // vamos criar um atributo de classe aonde vai receber a injeção do repository e ele vai nos disponibilizar metodos para manipular o banco de dados
    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ) {}

    async salvar(usuario: UsuarioEntity){
        return this.usuarioRepository.save(usuario)
    }

    async findAll() {
        return this.usuarioRepository.find()
    }

    async findOne(id: string) {
        return this.usuarioRepository.findOne({where: {id}})
    }

    async update(id: string, updateCliente: AtualizarUsuarioDTO) {
        return this.usuarioRepository.update(id, updateCliente)
    }

    async remove(id: string) {
        return this.usuarioRepository.delete(id)
    }


  
    

}