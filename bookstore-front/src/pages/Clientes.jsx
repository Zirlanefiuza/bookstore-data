import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteCliente, getClientes } from "../api/clientes";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Clientes() {
  const [clientes, setClientes] = useState(null);

  function carregarClientes() {
    getClientes().then((dados) => {
      setClientes(dados);
    });
  }

  function deletarCliente(id) {
    const deletar = confirm(" Tem certeza que deseja excluir?");
    if (deletar) {
      deleteCliente(id).then((resposta) => {
        toast.success(resposta.message);
        carregarClientes();
      });
    }
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Clientes</h1>
      <Button variant="warning" className="mt-2"  as={Link} to="/clientes/novo">
        Adicionar Cliente
      </Button>
      <br />
      {clientes ? (
        <Table bordered hover className="mt-5" variant="dark">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CPF</th>
              <th>Telefone</th>
              <th>Data de Nascimento</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => {
              return (
                <tr key={cliente.id}>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.cpf}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.dataNascimento ? new Date(cliente.dataNascimento +"T00:00:00").toLocaleDateString() : "-"} </td>
                  <td>
                    <Button
                      variant="danger"
                      className="me-2"
                      size="sm"
                      onClick={() => deletarCliente(cliente.id)}
                    >
                      Excluir
                    </Button>
                    <Button
                      variant="secondary"
                      className="me-2"
                      size="sm"
                      as={Link}
                      to={`/clientes/editar/${cliente.id}`}
                    >
                      Editar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Clientes;
