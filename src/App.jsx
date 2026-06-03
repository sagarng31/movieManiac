import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
// import Popular from "./components/Pages/Popular";
// import Upcoming from "./components/Pages/Upcoming";
// import TopRated from "./components/Pages/TopRated";
import NotFound from "./components/Pages/NotFound";
import MovieList from "./components/MovieList/MovieList";
import Fire from "./assets/fire.png";
import Star from "./assets/glowing-star.png";
import Party from "./assets/partying-face.png";
import SingleMovie from "./components/Pages/SingleMovie";

function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <MovieList type="popular" title="Popular" emoji={Fire} />
      <MovieList type="top_rated" title="Top Rated" emoji={Star} />
      <MovieList type="upcoming" title="Upcoming" emoji={Party} /> */}
      <Routes>
        {/* <Route path="/" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<Upcoming />} /> */}
        <Route
          path="/"
          element={<MovieList type="popular" title="Popular" emoji={Fire} />}
        />
        <Route
          path="/top-rated"
          element={
            <MovieList type="top_rated" title="Top Rated" emoji={Star} />
          }
        />
        <Route
          path="/upcoming"
          element={<MovieList type="upcoming" title="Upcoming" emoji={Party} />}
        />
        <Route path="/movies/:movieId" element={<SingleMovie />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
