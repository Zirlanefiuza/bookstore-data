import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { getCliente, updateCliente } from "../api/clientes";

function EditarCliente() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const navigate = useNavigate();

    function atualizarCliente(data) {
        updateCliente(id, data).then((reposta) => {
            toast.success(resposta.message);
            navigate("/clientes");
        }).catch((err) => {
            toast.error(err.response.data.message);
        })
    }

    function carregarCliente() {
        getCliente(id).then((dados) => {
            reset(dados);
        }).catch((err) => {
            navigate("/clientes");
        });
    }

    useEffect(() => {
        carregarCliente();
    }, [])
        ;
    return (
        // Formulário Parte William
        <main className="mt-4 container">
            <h1>Editar cliente</h1>
            <hr />
            <form onSubmit={handleSubmit(atualizarCliente)}>
                    <Button className="mt-3" type="submit">Atualizar</Button>
            </form>
        </main>
    );
}

export default EditarCliente;