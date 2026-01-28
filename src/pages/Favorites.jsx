import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../assets/components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites-container">
      <h2>Your Favorites</h2>


      {favorites.length > 0 ? (
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>No Favorite Movies</h2>
          <p>Add movies to your favorites!!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;

