import { Box, Container, Grid } from "@mui/material";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Button } from "primereact/button";
import './SearchItem.css'

export default function SearchItem({ movie }) {
  const posterSource = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
  return (
    <Card className="card-sizing">
      <Box display="flex">
        <Image src={posterSource} alt={movie.title} />
        <Grid sx={{pl: 5}} container direction='column' justifyContent='center'>
          <h4>{movie.title}</h4>
          <p>{movie.overview}</p>
          <Button>Add To Favorites List</Button>
        </Grid>
      </Box>
    </Card>
  );
}
