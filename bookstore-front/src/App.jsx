import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import NovoCliente from "./pages/NovoCliente";
import EditarCliente from "./pages/EditarCliente";
import Livros from "./pages/Livros";
import NovoLivro from "./pages/NovoLivro";
import EditarLivro from "./pages/EditarLivro";
import Notfound from "./pages/Notfound";
import Footer from "./components/Rodape";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/novo" element={<NovoCliente />} />
          <Route path="/clientes/editar/:id" element={<EditarCliente />} />
          <Route path="/livros" element={<Livros />} />
          <Route path="/livros/novo" element={<NovoLivro />} />
          <Route path="/livros/editar/:id" element={<EditarLivro />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
