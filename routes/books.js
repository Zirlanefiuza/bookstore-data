// import { Cliente } from "./models/cliente.js"
import { Books } from "./models/books.js"; 
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
    include: [Cliente]
  });

  if (books) {
    res.json(books);
  } else {
    res.status(404).json({ message: "Book não encrontado!" });
  }
});

// deletar um book específico
booksRouter.delete("/books/:id", async (req, res) => {
  const idBooks = req.params.id;
  try {
    const books = await Pet.findOne({ where: { id: idBooks } });
    if (books) {
      await books.destroy();
      res.json({ message: "Book removido com sucesso." });
    } else {
      res.status(404).json({ message: "Book não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro ocorreu ao excluir book." });
  }
});

//  Inserir um novo books ---- TEM QUE DESCOMENTAR PARA PODER USAR
// booksRouter.post("/books", async (req, res) =>{
//   const { nome, tipo, dataNasc, clienteId } = req.body;
//   try{
//     const books = await Books.findByPk(booksId);
//     if(books){
//       await 
//       books.create({nome, tipo, porte, dataNasc, clienteId});
//       res.json({message: "Book criando com sucesso."});
//     }else{
//       res
//         .status(404)
//         .json({message: "Falha ao inserir book. Cliente não encontrado."});
//     }
//   }catch(err){
//     res
//       .status(500)
//       .json({message: "Ocorreu um erro ao adicionar book."});
//   }
// });

// Atualizar um book --- TEM QUE DESCOMENTAR PARA PODER USAR
  
// booksRouter.put("/books/:id", async (req, res) =>{
//   const {nome, tipo, dataNasc } = req.body;

//   try{
//     const books = await books.findByPk(req.params.id);

//     if(books){
//       await books.update({nome, tipo, porte, dataNasc});
//       res.json({message: "Book atualizado com sucesso."});
//     }else{
//       res
//         .status(404)
//         .json({message: "Book não encontrado"});
//     }
//   }catch(err){
//     res
//       .status(500)
//       .json({message: "Um erro ocorreu ao atualizar book."});
//   }
// });