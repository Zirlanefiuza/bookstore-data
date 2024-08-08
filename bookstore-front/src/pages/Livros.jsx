import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLivros } from "../api/books";
import { Button, Card } from "react-bootstrap";
import Loader from "../components/Loader";


function Livros() {
    const [books, setLivros] = useState(null);

    function carregarLivros() {
        getLivros().then((dados) => {
            setLivros(dados);
        });
    }

    useEffect(() => {
        carregarLivros();
    }, []);

    return (
        <main className="mt-4 container">
            <h1>Livros</h1>
            <Button className="mt-2" as={Link} to="/livros/novo">
                Adicionar Livro
            </Button>
            {books ? (
                <Card className="mt-5" style={{ width: '18rem' }}>
                    {books.map((book) => {
                        return (
                            <Card.Body key={book.id}>
                                <Card.Title>{book.nome}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Autor</Card.Subtitle>
                                <Card.Text>{book.isbn}</Card.Text>
                                <Card.Text>{book.publishYear}</Card.Text>
                                <Card.Text>{book.genre}</Card.Text>
                                <Card.Text>{book.cliente.nome}</Card.Text>
                            </Card.Body>
                        )
                    })}
                </Card>
            ) : <Loader />}
        </main>
    );
}

export default Livros;