import { Button } from 'react-bootstrap';
import logo from "../../public/book-icon.png";

function Notfound(){
    return(
        <main>
            <h1>Página não encontrada. 404.</h1>
            <div className="imagem-notfound text-center">
                <img src={logo} alt="Imagem do livro"/>
            </div>
            <div className="text-center">
            <Button  variant="secondary" NavLink href="/">
                Volta para Inicio
            </Button> 
            </div>
        </main>
    );
}

export default Notfound;