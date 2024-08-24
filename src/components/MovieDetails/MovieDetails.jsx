import axios from "axios";
import { useEffect, useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export default function MovieDetails() {
  const { movieId } = useParams();
  const [currentMovie, setCurrentMovie] = useState({ movieGenre: [] });
  const history = useHistory();
  useEffect(() => {
    getMovie();
    console.log(currentMovie);
  }, []);
  const getMovie = () => {
    axios
      .get(`/api/movies/${movieId}`)
      .then((res) => {
        setCurrentMovie(res.data[0]);
      })
      .catch((err) => console.log("Error getting movies: ", err));
  };
  return (
    <div data-testid="movieDetails">
      <button data-testid="toList" onClick={() => history.push("/")}>
        Back To Movie List
      </button>
      <h2>{currentMovie.movieTitle}</h2>
      <img src={currentMovie.poster} />
      <h4>{currentMovie.movieGenre.join(" ")}</h4>
      <p>{currentMovie.movieDescription}</p>
    </div>
  );
}
