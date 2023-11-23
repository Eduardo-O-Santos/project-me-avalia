import './App.css';
import { Navbar } from './components/Navbar';
import { movieData } from './services/fakeApi';

function Ratings() {
  return (
    <section className="box">
      <button className="btn-toggle">&ndash;</button>
      <div className="summary">
        <h2>Filmes assistidos</h2>
        <div>
          <p>🎬 0 filmes</p>
          <p>⌛ 0 min</p>
        </div>
      </div>
      <ul className="list">
        {movieData &&
          movieData.map((movie) => (
            <li key={movie.imdbID}>
              <img src={movie.Poster} alt={movieData.Title} />
              <h3>{movie.Title}</h3>
              <div>
                <p>
                  <span>⭐ {movie.imdbRating}</span>
                  <span>🌟 9</span>
                  <span>⌛{movie.Runtime}</span>
                </p>
                <button className="btn-delete">x</button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

function App() {
  return (
    <>
      <Navbar result={movieData.length} />
      <main className="main">
        <section className="box">
          <button className="btn-toggle">&ndash;</button>
          <ul className="list list-movies">
            {movieData &&
              movieData.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={movieData.Title} />
                  <h3>{movie.Title}</h3>
                  <p>📅 {movie.Year}</p>
                </li>
              ))}
          </ul>
        </section>
        <Ratings />
      </main>
    </>
  );
}

export { App };
