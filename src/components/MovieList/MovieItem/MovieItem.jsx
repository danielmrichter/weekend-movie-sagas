import { useDispatch } from "react-redux";
import { Card } from 'primereact/card';
import { Image } from "primereact/image";

export default function MovieItem({ movie }) {
  const dispatch = useDispatch();
  const handleClick = () =>
    dispatch({ type: "GET_MOVIE_DETAILS", payload: movie.id });
  return (
    <Card title={movie.title} pt={{'data-testid':"movieItem"}} key={movie.id} >
      <Image
        data-testid="toDetails"
        onClick={handleClick}
        src={movie.poster}
        alt={movie.title}
      />
    </Card>
  );
}
