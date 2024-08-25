import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import SearchItem from "./SearchItem.jsx/SearchItem";

export default function Search() {
  const [searchInput, setSearchInput] = useState();
  const searchResults = useSelector((store) => store.searchResults);
  const dispatch = useDispatch();
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_MOVIES", payload: searchInput });
  };
  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <h2>Enter a name of a Movie</h2>
        <label htmlFor="search">Name of Movie </label>
        <InputText
          id="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <Button label="Submit" icon="pi pi-search" />
      </form>
      <h2>Results</h2>
      <Grid container columnGap={4} rowGap={2} direction="row">
        {searchResults.map((movie) => (
          <SearchItem key={movie.id} movie={movie} />
        ))}
      </Grid>
    </>
  );
}
