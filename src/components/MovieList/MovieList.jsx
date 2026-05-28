import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import FilterGroup from "./FilterGroup";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=6c58b241ce3200bb8569c54fe2d69cac",
    );
    const data = await response.json();
    setMovies(data.results);
    setFilteredMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  // console.log(movies);

  const handleFilter = (rate) => {
    if (rate === minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilteredMovies(filtered);
    }
  };
  console.log(filteredMovies);

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} className="navbar_emoji" />
        </h2>
        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRateClick={handleFilter}
            ratingRange={[8, 7, 6]}
          />
          <select name="" id="" className="movie_sorting">
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
