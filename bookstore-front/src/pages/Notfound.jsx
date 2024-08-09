import { Button } from "react-bootstrap";
import logo from "../../public/book-icon.png";

function Notfound() {
  return (
    <main>
      <h1>
        Página não encontrada.
        <div>
          <Button variant="outline-dark" NavLink href="/">
            Volta para Inicio
          </Button>
        </div>
      </h1>
      <div className="imagem-notfound text-center">
        <img src={logo} alt="Imagem do livro" />
      </div>
    </main>
  );
}

export default Notfound;
