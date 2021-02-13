// Style

import css from "../styles/app.css";

function Main() {
  return (
    <main role="main" className="container mt-5 p-4 text-center text-light">
      <h1>Bem-vindo(a) à FullStackStore</h1>
      <p className="lead">
        Aqui você encontra às melhores marcas de surf do mundo!
      </p>
      <iframe
        width="800"
        height="600"
        src="https://www.youtube.com/embed/o0OMdThcWIU"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        Fique à vontade para navegar por nossa{" "}
        <a href="http://localhost:3000/loja">Loja Virtual</a>
      </p>
    </main>
  );
}

export default Main;
