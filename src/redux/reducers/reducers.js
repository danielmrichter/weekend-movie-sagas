import { combineReducers } from "redux";

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
      case "SET_MOVIES":
        return action.payload;
      default:
        return state;
    }
  };
  
  // Used to store the movie genres
  const genres = (state = [], action) => {
    switch (action.type) {
      case "SET_GENRES":
        return action.payload;
      default:
        return state;
    }
  };
  
  // Used to store the movie for movie details
  const currentMovie = (state = {movieGenre: []}, action) => {
    switch (action.type) {
      case "SET_MOVIE_DETAILS":
        return action.payload;
      default:
        return state;
    }
  };
  // Used to control the MovieDetails modal
  const modalVisible = (state=false, action) => {
    switch (action.type) {
      case 'TOGGLE_VISIBILITY':
        return !state
      default:
        return state;
    }
  }

  const searchResults = (state=[], action) => {
    switch(action.type) {
        case 'SET_SEARCH_RESULTS':
            return action.payload
        default:
            return state
    }
  }

  export default combineReducers({
    movies,
    genres,
    currentMovie,
    modalVisible,
    searchResults
  })