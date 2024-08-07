import { Cliente } from "../models/cliente.js"
import { Books } from "../models/books.js"; 
import { Router } from "express"; 

export const booksRouter = Router();

// Listagem de todos os books
booksRouter.get("/books", async (req, res) => {
    const listabooks = await Books.findAll();
    res.send(listabooks);
  });


// Listar um books específico
booksRouter.get("/books/:id", async (req, res) => {
  const books = await Books.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["createdAt", "updatedAt"] }, 
    include: [{ model: Cliente, attributes: ["id", ["nome", "nomeCliente"]] }]
  });

  if (books) {
    res.json(books);
  } else {
    res.status(404).json({ message: "Livro não encrontado!" });
  }
});

// deletar um book específico
booksRouter.delete("/books/:id", async (req, res) => {
  const idBooks = req.params.id;
  try {
    const books = await Books.findOne({ where: { id: idBooks } });
    if (books) {
      await books.destroy();
      res.json({ message: "Livro removido com sucesso." });
    } else {
      res.status(404).json({ message: "Livro não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro ocorreu ao excluir livro." });
  }
});


booksRouter.post("/books", async (req, res) =>{
  const { title, author, isbn, publishYear, genre, clienteId } = req.body;
  try{
    const cliente = await Cliente.findByPk(clienteId);
    if(cliente){
      await 
      Books.create({ title, author, isbn, publishYear, genre, clienteId });
      res.json({message: "Livro criado com sucesso."});
    }else{
      res
        .status(404)
        .json({message: "Falha ao inserir livro. Cliente não encontrado."});
    }
  }catch(err){
    res
      .status(500)
      .json({message: "Ocorreu um erro ao adicionar livro."});
  }
});

booksRouter.put("/books/:id", async (req, res) =>{
  const { title, author, isbn, publishYear, genre } = req.body;

  try{
    const books = await Books.findByPk(req.params.id);

    if(books){
      await books.update({ title, author, isbn, publishYear, genre });
      res.json({message: "Livro atualizado com sucesso."});
    }else{
      res
        .status(404)
        .json({message: "Livro não encontrado"});
    }
  }catch(err){
    res
      .status(500)
      .json({message: "Um erro ocorreu ao atualizar livro."});
  }
});