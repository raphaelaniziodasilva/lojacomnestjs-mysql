/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioSerice } from "./usuario.service";

@Controller('/usuarios')
export class UsuarioController {

    constructor(private usuarioService: UsuarioSerice) {}

    @Get()
    async listarUsuarios() {
        const usuariosSalvos = await this.usuarioService.findAll();
        return usuariosSalvos;
    }

    @Get('/:id')
    public buscaPorId(@Param('id') id: string) {
        const usuarioEncontrado = this.usuarioService.findOne(id)
        return usuarioEncontrado
    }

    @Post()
    async criarUsuario(@Body() dadosDoUsuario: UsuarioEntity) {
        const usuarioCriado = this.usuarioService.salvar(dadosDoUsuario);
        return usuarioCriado;
    }

    @Put('/:id')
    async atualizarUsuarios(@Param('id') id: string, @Body() novosDados) {
        const usuarioAtualizado = await this.usuarioService.update(id, novosDados)
        return {
            usuarioAtualizado,
            message: "usuário atualizado com sucesso",
        }
    }

    @Delete('/:id')
    async removeUsuario(@Param('id') id: string) {
        const usuarioRemovido = await this.usuarioService.remove(id);
        return {
            usuario:usuarioRemovido,
            message: "usuário removido com sucesso"
        } // resposta em Json
    }



}