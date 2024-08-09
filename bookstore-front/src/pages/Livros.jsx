import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteLivro, getLivros } from "../api/books";
import { Button, Card, Col, Row } from "react-bootstrap";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Livros() {
    const [books, setLivros] = useState(null);

    function carregarLivros() {
        getLivros().then((dados) => {
            setLivros(dados);
        });
    }

    function deletarLivro(id) {
        const deletar = confirm("Tem certeza que deseja excluir o livro?");
        if(deletar) {
            deleteLivro(id).then((resposta) => {
                toast.success(resposta.message);
                carregarLivros();
            });
        }
    }

    useEffect(() => {
        carregarLivros();
    }, []);

    return (
        <main className="mt-4 container">
            <h1>Livros</h1>
            <Button variant="warning" className="mt-2" as={Link} to="/livros/novo">
                Adicionar Livro
            </Button>
            <Row className="mt-5">
                {books ? (
                    books.map((book) => (
                        <Col key={book.id} md={4} className="mb-4">
                            <Card border="warning" bg='dark' style={{ width: '18rem' }}>
                                <Card.Body className="text-white">
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Subtitle className="mb-2">{book.author}</Card.Subtitle>
                                    <Card.Subtitle className="mt-2">{book.genre}</Card.Subtitle>
                                    <Card.Text className="mt-2 mb-0" >Ano de publicação: {book.publishYear}</Card.Text>
                                    <Card.Text className="mt-0 mb-0" >ISBN: {book.isbn}</Card.Text>
                                    <Card.Text className="mt-2">Cliente: {book.cliente.nome}</Card.Text>
                                    <Button variant="secondary" className="me-2" as={Link} to={`/livros/editar${book.id}`}>Editar</Button>
                                    <Button variant="danger" className="me-2" onClick={() => deletarLivro(book.id)}>Excluir</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : <Loader />}
            </Row>
        </main>
    );
}

export default Livros;