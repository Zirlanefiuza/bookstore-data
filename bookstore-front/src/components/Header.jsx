import logo from "/book-icon.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css';


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
        <Nav className="gap-3">
          <Nav.Link className="nav-home" variant="outline-light" href="/">
            <span class="material-symbols-outlined">home</span>
          </Nav.Link>
          <Nav.Link className="nav-home text-light" href="/clientes">Clientes</Nav.Link>
          <Nav.Link className="nav-home text-light" href="/livros">Livros</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
