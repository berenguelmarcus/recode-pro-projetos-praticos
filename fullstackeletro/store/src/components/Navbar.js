function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-info">
        <a className="navbar-brand" href="/">
          FullStackStore
        </a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Página Inicial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/loja">
                Loja
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contato">
                Contato
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/lojas-fisicas">
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
