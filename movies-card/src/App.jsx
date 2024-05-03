import "./App.css";
import { MovieCard } from "./components/MovieCard.jsx";
import { movies } from "./constants/movieData.js";
function App() {
  return (
    <div className="">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie.name}
          genre={movie.genre}
          image={movie.image}
          duration={movie.duration}
          year={movie.year}
          director={movie.director}
          description={movie.description}
        />
      ))}
    </div>
  );
}

export default App;
