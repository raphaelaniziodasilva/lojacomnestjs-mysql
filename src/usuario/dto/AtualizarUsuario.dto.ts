/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";
export class AtualizarUsuarioDTO {
    @IsNotEmpty({message: "O nome não pode ser vazio"})  
    @IsOptional() 
    nome: string;

    @IsEmail(undefined, {message: "O email informado é invalido"}) 
    @IsOptional()
    email: string;

    @IsOptional()
    senha: string;
}