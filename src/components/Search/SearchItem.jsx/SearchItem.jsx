import { Box, Grid } from "@mui/material";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import './SearchItem.css'
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function SearchItem({ movie }) {
  const posterSource = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
  const dispatch = useDispatch()
  const handleClick = (e) => {
    e.preventDefault()
    axios.post('/api/movies', {
      title: movie.title,
      description: movie.overview,
      poster: posterSource,
      genres: movie.genre_ids,
      TMDB_Id: movie.id
    }).then(res => {
      useHistory().push('/list')
    })
  }
  return (
    <Card className="card-sizing">
      <Box display="flex">
        <Image src={posterSource} alt={movie.title} />
        <Grid sx={{pl: 5}} container direction='column' justifyContent='center'>
          <h4>{movie.title}</h4>
          <p>{movie.overview}</p>
          <Button onClick={handleClick}>Add To Favorites List</Button>
        </Grid>
      </Box>
    </Card>
  );
}
