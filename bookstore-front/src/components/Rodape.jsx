import { Container, Row, Col } from "react-bootstrap";

function Rodape() {
  return (
    <footer className="rodape">
      <Container fluid>
        <Row>
          <Col>
            <span>
              {" "}
              © 2024 Todos os direitos reservados. Miriam Akiko, William Amós e
              Zirlane Santos{" "}
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Rodape;
