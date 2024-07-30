import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";
// import { Endereco } from "./endereco.js";
// import { Books } from "./books.js";

export const Cliente = connection.define("cliente", {
    nome: {
        type: DataTypes.STRING(130),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(11), // string por conta do zero a esquerda
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    telefone: {
        type: DataTypes.STRING, // string por conta do +codPaís e (DDD)
        allowNull: false,
        unique: true
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});


// Linhas abaixo comentadas porque ainda não foram criados os códigos do arquivo book.js

// Relacionamento 1:1 (Cliente-Endereco)
// Cliente.hasOne(Endereco);
// Endereco.belongTo(Cliente); //foreign key

// // Relacionamento 1:1 (Cliente-Books)
// Cliente.hasOne(Books);
// Books.belongsTo(Cliente);