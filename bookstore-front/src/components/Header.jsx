// import NOME-DA-IMAGEM from "./../assets/CAMINHO DA IMAGEM.svg";
import { Link } from "react-router-dom";
import logo from "/book-icon.png";
import { Container, Nav, Navbar } from "react-bootstrap";


function Header() {
  return (
    <Navbar className="bg-dark">
      <Container>
        <Navbar.Brand href="/" className="text-light">
          <img
            alt="Logo Bookstore"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          BookStore
        </Navbar.Brand>
        <Nav className="gap-5">
          <Nav.Link className="text-light" href="/clientes">Clientes</Nav.Link>
          <Nav.Link className="text-light" href="/livros">Livros</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
