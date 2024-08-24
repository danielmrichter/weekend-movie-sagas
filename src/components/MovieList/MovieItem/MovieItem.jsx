import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function MovieItem({ movie }) {
    const history = useHistory()
    const handleClick = () => {
        history.push(`/details/${movie.id}`)
    }
  return (
    <div data-testid="movieItem" key={movie.id}>
      <h3>{movie.title}</h3>
      <img data-testid="toDetails" onClick={handleClick} src={movie.poster} alt={movie.title} />
    </div>
  );
}
