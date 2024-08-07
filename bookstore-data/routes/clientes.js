import { Cliente } from "../models/cliente.js"
import { Endereco } from "../models/endereco.js"; 
import { Router } from "express"; 

export const clientesRouter = Router();

// Listagem de todos os clientes
clientesRouter.get("/clientes", async (req, res) => {
    const listaClientes = await Cliente.findAll();
    res.send(listaClientes);
});

// Listagem de um cliente específico
clientesRouter.get("/clientes/:id", async (req, res) => { 
    const cliente = await Cliente.findOne({ 
        where: { id: req.params.id }, 
        include: [Endereco]
    }); 
    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({ message: "Cliente não encontrado!" });
    }
});

// Inserir um novo cliente
clientesRouter.post("/clientes", async (req, res) => {
    const { nome, cpf, email, telefone, dataNascimento, endereco } = req.body;
    try {
        await Cliente.create(
            {nome, cpf, email, telefone, dataNascimento},
            {include: [Endereco]},
        );
        res.json({ message: "Cliente criado com sucesso." });
    } catch(err) {
        res.status(500).json({ message: "Erro ao inserir o cliente."});
    }
});

// Atualizar o cliente
clientesRouter.put("/clientes/:id", async (req, res) => {
    const idCliente = req.params.id;
    const { nome, cpf, email, telefone, dataNascimento, endereco } = req.body;

    try {
        const cliente = await Cliente.findOne({ where: {id: idCliente }});
    
    if(cliente) {
        await Endereco.update(endereco, {where: {clienteId: idCliente}});
        await cliente.update({nome, cpf, email, telefone, dataNascimento},);
        res.json({ message: "Cliente atualizado com sucesso." });
    } else {
        res.status(404).json({ message: "O cliente não foi encontrado." });
    }
    } catch (err) {
        res.status(500).json({message: "Erro ao atualizar o cliente."});
    }
});

// Deletar um cliente
clientesRouter.delete("/clientes/:id", async (req, res) => {
    const idCliente = req.params.id;

    try {
        const cliente = await Cliente.findOne({ where: { id: idCliente } });

        if (cliente) {
            await cliente.destroy();
            res.json({ message: "Cliente removido com sucesso." });
            } else {
            res.status(404).json({ message: "Cliente não encontrado." });
            }
    } catch (err) {
        res.status(500).json({ message: "Erro ao excluir o cliente" });
    }
    });