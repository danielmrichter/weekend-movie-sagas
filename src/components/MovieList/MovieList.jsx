import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieItem from "./MovieItem/MovieItem";
import MovieDetails from "../MovieDetails/MovieDetails";

function MovieList() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => {
          return <MovieItem key={movie.id} movie={movie} />;
        })}
      </section>
      <MovieDetails visible={visible} closeFn={() => setVisible(false)} />
    </main>
  );
}

export default MovieList;
