function Navbar({ result }) {
  return (
    <header className="nav-bar">
      <img className="logo" src="logo-me-avalia.png" alt="Logo me avalia" />
      <search>
        <form className="form-search">
          <input
            className="search"
            type="search"
            name="search"
            placeholder="Buscar filmes..."
          />
          <button className="btn-search">Buscar</button>
        </form>
      </search>
      <h3 className="num-results">{result} Resultados</h3>
    </header>
  );
}

export { Navbar };
