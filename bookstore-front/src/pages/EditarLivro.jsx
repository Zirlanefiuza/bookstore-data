import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { getLivro, updateLivro } from "../api/books"; 

function EditarLivro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams(); 
  function atualizarLivro(data) {
    updateLivro(id, data)
      .then((resposta) => {
        toast.success(resposta.message);
        navigate("/livros");
      })
      .catch((err) => {
        console.error("Erro ao atualizar livro:", err);
        toast.error(err.response.data.message);
      });
  }

  function carregarLivro() {
    getLivro(id)
      .then((dados) => {
        reset(dados); 
      })
      .catch((err) => {
        console.error("Erro ao carregar Livro:", err);
        toast.error("Erro ao carregar os dados do livro.");
        navigate("/livros");
      });
  }

  useEffect(() => {
    carregarLivro(); 
  }, []); 

  return (
    <main className="mt-4 container">
      <h1>Editar Livro</h1>
      <hr />
      <form onSubmit={handleSubmit(atualizarLivro)}>
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
            <small className="text-danger">
              O ano de publicação é inválido!
            </small>
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
        <Button className="mt-3" type="submit">
          Atualizar
        </Button>
      </form>
    </main>
  );
}

export default EditarLivro;
