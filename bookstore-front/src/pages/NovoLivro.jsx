import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getClientes } from "../api/clientes";
import { useEffect, useState } from "react";
import { addLivro } from "../api/books";
import toast from "react-hot-toast";

function NovoLivro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [clientes, setClientes] = useState([]);

  function salvarLivro(data) {
    addLivro(data)
      .then((resposta) => {
        toast.success(resposta.message);
        navigate("/livros");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ocorreu um erro ao adicionar o livro.");
      });
  }

  function carregarClientes() {
    getClientes().then((dados) => {
      setClientes(dados);
    });
  }

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Novo Livro</h1>
      <hr />
      <form onSubmit={handleSubmit(salvarLivro)}>
        <div className="mt-3">
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            className="form-control mt-2"
            {...register("title", { required: true, maxLength: 200 })}
          />
          {errors.title && (
            <small className="text-danger">O título é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="author">Autor</label>
          <input
            type="text"
            id="author"
            className="form-control mt-2"
            {...register("author", { required: true, maxLength: 200 })}
          />
          {errors.author && (
            <small className="text-danger">O autor é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="isbn">ISBN</label>
          <input
            type="text"
            id="isbn"
            className="form-control mt-2"
            {...register("isbn", { required: true, maxLength: 13 })}
          />
          {errors.isbn && (
            <small className="text-danger">O ISBN é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="publishYear">Ano de Publicação</label>
          <input
            type="number"
            id="publishYear"
            className="form-control mt-2"
            {...register("publishYear", { required: true })}
          />
          {errors.publishYear && (
            <small className="text-danger">O ano de publicação é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="genre">Gênero</label>
          <input
            type="text"
            id="genre"
            className="form-control mt-2"
            {...register("genre", { required: true, maxLength: 50 })}
          />
          {errors.genre && (
            <small className="text-danger">O gênero é inválido!</small>
          )}
        </div>
        <div className="mt-3">
          <label htmlFor="clienteId">Cliente</label>
          <select
            className="form-select"
            {...register("clienteId", { required: true, valueAsNumber: true })}
          >
            <option value="">Selecione um cliente</option>
            {clientes.map((cliente) => (
              <option key={cliente.id} value={cliente.id}>
                {cliente.nome} - {cliente.email}
              </option>
            ))}
          </select>
          {errors.clienteId && (
            <small className="text-danger">Selecione um cliente</small>
          )}
        </div>
        <Button className="mt-3" type="submit">
          Cadastrar
        </Button>
      </form>
    </main>
  );
}

export default NovoLivro;
