function Details() {
  return (
    <section className="box">
      <button className="btn-toggle">&ndash;</button>
      <div className="details">
        <header>
          <button className="btn-back">←</button>
          <img
            src="https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
            alt="Avatar"
          />
          <div className="details-overview">
            <h2>Avatar</h2>
            <p>18 Dec 2009 • 162 min</p>
            <p>Action, Adventure, Fantasy</p>
            <p>⭐ 7.9 IMDB Rating</p>
          </div>
        </header>

        <section>
          <div className="rating">
            <p>⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐</p>
            <button className="btn-add">+ Adicionar à lista</button>
          </div>
          <i>
            A paraplegic Marine dispatched to the moon Pandora on a unique
            mission becomes torn between following his orders and protecting the
            world he feels is his home.
          </i>
          <p>Elenco: Sam Worthington, Zoe Saldana, Sigourney Weaver</p>
          <p>Direção: James Cameron</p>
        </section>
      </div>
    </section>
  );
}

export { Details }
