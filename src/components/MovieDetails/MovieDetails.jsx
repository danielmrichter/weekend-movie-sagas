import { Dialog } from "primereact/dialog";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "primereact/image";
import { Box, Chip } from "@mui/material";

export default function MovieDetails() {
  const dispatch = useDispatch();
  const visible = useSelector((store) => store.modalVisible);
  const currentMovie = useSelector((store) => store.currentMovie);
  return (
    <Dialog
      visible={visible}
      style={{ width: "50vw", background: "white" }}
      onHide={() => dispatch({ type: "TOGGLE_VISIBILITY" })}
      closeOnEscape
      focusOnShow
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <h2>{currentMovie.movieTitle}</h2>
        <Box display='flex'
        justifyContent='space-evenly'
        columnGap={5}
        alignItems='center'>
          <Image src={currentMovie.poster} alt="poster"></Image>
          <Box display="flex" rowGap={2} flexDirection="column" alignItems="flex-end">
            {currentMovie.movieGenre.map((genre) => (
              <Chip label={genre}></Chip>
            ))}
          </Box>
        </Box>
        <p>{currentMovie.movieDescription}</p>
      </Box>
    </Dialog>
  );
}
