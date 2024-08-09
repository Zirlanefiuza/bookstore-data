import backgroundImage from "/books-bg.jpg";
import './Home.css';

function Home() {
  return (
    <main className="home-main">
      <div
        style={{
          backgroundImage: `linear-gradient(0deg, #121212, transparent), url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100%", 
          marginBottom: "20px",
        }}
      />
      <div className="text-center pt-5">
        <h1>Bookstore</h1>
        <h4 className="p-5">Explore nossa Bookstore, onde você pode gerenciar clientes, seus endereços e os livros que eles compraram. Uma aplicação intuitiva que facilita o acompanhamento das preferências literárias de cada cliente, oferecendo uma experiência personalizada.</h4>
        <p className="p-5">O objetivo desta aplicação é fornecer uma interface eficiente e amigável para gerenciar os clientes de uma livraria, incluindo seus dados de contato e endereços, assim como o catálogo de livros comprados por cada um. Isso permite um controle organizado e detalhado das transações, ajudando a livraria a oferecer um serviço personalizado e a compreender melhor as preferências de seus clientes.</p>
      </div>
    </main>
  );
}

export default Home;
