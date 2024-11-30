import { getAllMovies } from "../data//movies";
import MovieCard from "./MovieCard";
const MovieList = () => {
  const movies = getAllMovies();
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
      {movies?.map((t) => (
        <MovieCard movie={t} key={t.id} />
      ))}
    </div>
  );
};

export default MovieList;
