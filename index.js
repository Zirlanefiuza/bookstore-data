import { connection, authenticate } from "./config/database.js"; 
import { Cliente } from "./models/cliente.js"
import { Endereco } from "./models/endereco.js"; 
import { Books } from "./models/books.js"; 

authenticate(connection).then(() => {
    connection.sync({ force: true });
});