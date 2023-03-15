/* eslint-disable prettier/prettier */
// aqui aonde vai ficar a entidade do usuario ou seja o model de usuariol

import { Exclude } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from "typeorm";

@Entity({name: 'usuario', schema: 'public'}) // usuario vai ser o nome da tabela
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsNotEmpty({message: 'nomeDeUsuario é obrigatório.'})
    @IsString({message: 'nomeDeUsuario precisa ser uma string.'})
    @Column({length: 255, nullable: false})
    nome: string;

    @IsEmail({}, {message: 'email precisa ser um endereço de email válido.'})
    @Column({unique: true, length: 255, nullable: false})
    email: string;  

    @Exclude({
        toPlainOnly: true
    
        // vá para o arquivo app.module.ts e dentro dos providers e utilize os interceptadores
    })
    @IsNotEmpty({message: 'senha é obrigatório.'})
    @Column({nullable: false})
    senha: string;

    @Column()
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @Column()
    @UpdateDateColumn({name: 'updates_at'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: string;

    // va para o arquivo app.module.ts em imports e importe UsuarioEntity na entities[]

    // crie o arquivo usuario.module.ts
}