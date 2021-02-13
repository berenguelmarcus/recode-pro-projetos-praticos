function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
        <a className="navbar-brand" href="http://localhost:3000/">
          FullStackStore
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/">
                Página Inicial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/loja">
                Loja
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/contato">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="http://localhost:3000/lojas-fisicas"
              >
                Lojas Físicas
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
