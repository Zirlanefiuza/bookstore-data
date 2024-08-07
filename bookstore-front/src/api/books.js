import axios from "axios";

export async function getLivros() {
    const response = await axios.get("http://localhost:3001/livros");
    return response.data; 
}

export async function getLivro(id) {
    const response = await axios.get(`http://localhost:3001/livros/${id}`);
    return response.data; 
}

export async function addLivro(data) { 
    const response = await axios.post("http://localhost:3001/livros", data); 
    return response.data; 
}

export async function updateLivro(id, data) {
    const response = await axios.put(`http://localhost:3001/livros/${id}`, data); 
    return response.data; 
}

export async function deleteLivro(id) {
    const response = await axios.delete(`http://localhost:3001/livros/${id}`);
    return response.data; 
}
