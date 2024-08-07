// import NOME-DA-IMAGEM from "./../assets/CAMINHO DA IMAGEM.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header w-100 px-3 py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          {/* <img src={COLOCAR A IMAGEM DE LOGO AQUI} alt="Livraria Online" /> */} 
        </Link>
        <div className="d-flex gap-5">
          <Link to="/clientes">Clientes</Link>
          <Link to="/livros">Livros</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
