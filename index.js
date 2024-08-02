import { connection, authenticate } from "./config/database.js"; 
import express from "express";
import { clientesRouter } from "./routes/clientes.js";
import { booksRouter } from "./routes/books.js";

authenticate(connection).then(() => {
    connection.sync({ });
});

const app = express();
app.use(express.json());

app.use(clientesRouter);
app.use(booksRouter);

// Rodar a aplicação
app.listen(3001, () => {
    console.log("Servidor rodando em http://localhost:3001/"); 
});