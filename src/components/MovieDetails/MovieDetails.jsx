import { Dialog } from "primereact/dialog";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "primereact/image";
export default function MovieDetails() {
  const dispatch = useDispatch();
  const visible = useSelector((store) => store.modalVisible);
  const currentMovie = useSelector((store) => store.currentMovie);
  return (
    <Dialog
      header={<h2>{currentMovie.movieTitle}</h2>}
      visible={visible}
      style={{ width: "50vw", background: "white" }}
      onHide={() => dispatch({ type: "TOGGLE_VISIBILITY" })}
      closeOnEscape
    >
      <Image src={currentMovie.poster} alt="poster"></Image>
      <div className="genre-list">
        {currentMovie.movieGenre.map((genre) => (
          <h4>{genre}&nbsp;</h4>
        ))}
      </div>
      <p>{currentMovie.movieDescription}</p>
    </Dialog>
  );
}
