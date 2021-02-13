function ContactForm() {
  return (
    <div className="container  pt-5 mt-5">
      <div className="container text-light">
        <h2>Formulário de Feedback</h2>
        <p>Sinta-se á vontade para deixar uma mensagem para nós!</p>
      </div>
      <div className="container text-light">
        <form>
          <label for="email">
            <strong>E-mail</strong>
          </label>
          <br />
          <input
            className="rounded p-3 border-0"
            type="email"
            id="email"
            name="email"
            placeholder="Digite o seu e-mail aqui"
          ></input>{" "}
          <br />
          <label for="message" className="mt-2">
            <strong>Qual mensagem gostaria de deixar para nós?</strong>
          </label>
          <br />
          <textarea
            placeholder="Deixe o seu feedback aqui!"
            className="rounded p-3 border-0"
          ></textarea>{" "}
          <br />
          <button class="btn btn-primary" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
