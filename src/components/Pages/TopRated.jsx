import MovieList from "../MovieList/MovieList";
import Star from "../../assets/glowing-star.png";

const TopRated = () => {
  return <MovieList type="top_rated" title="Top Rated" emoji={Star} />;
};

export default TopRated;
