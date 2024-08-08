import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addCliente } from "../api/clientes";
import toast from "react-hot-toast";

function NovoCliente() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function salvarCliente(data) {
    addCliente(data).then((resposta) =>{
      toast.success(resposta.message);
      navigate("/clientes");
    }).catch((err) => {
      toast.error(err.response.data.message);
    })
  }

  return (
    <main className="mt-4 container">
      <h1>Novo cliente</h1>
      <br />
      <form onSubmit={handleSubmit(salvarCliente)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            {...register("nome", { required: true, maxLength: 200 })}
          />
          {errors.nome && (
            <small className="text-danger">O nome é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: true, maxLength: 200 })}
          />
          {errors.email && (
            <small className="text-danger">O email é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="cpf"
            id="cpf"
            className="form-control"
            {...register("cpf", { required: true, maxLength: 200 })}
          />
          {errors.email && (
            <small className="text-danger">O cpf é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            className="form-control"
            {...register("telefone", { required: true, maxLength: 200 })}
          />
          {errors.telefone && (
            <small className="text-danger">O telefone é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            type="text"
            id="dataNascimento"
            className="form-control"
            {...register("dataNascimento", { required: true, maxLength: 200 })}
          />
          {errors.endereco?.cidade && (
            <small className="text-danger">A Data de Nascimento é inválida!</small>
          )}
        </div>
        <Button variant="dark" className="mt-3" type="submit">
          Cadastrar
        </Button>
      </form>
    </main>
  );
}

export default NovoCliente;