import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeLatest("FETCH_MOVIES", fetchAllMovies);
  yield takeLatest("GET_MOVIE_DETAILS", getMovieDetails);
}

function* fetchAllMovies() {
  try {
    // Get the movies:
    const moviesResponse = yield axios.get("/api/movies");
    // Set the value of the movies reducer:
    yield put({
      type: "SET_MOVIES",
      payload: moviesResponse.data,
    });
  } catch (error) {
    console.log("fetchAllMovies error:", error);
  }
}
function* getMovieDetails(action) {
  try {
    const movieDetailsResponse = yield axios.get(
      `/api/movies/${action.payload}`
    );
    yield put({
      type: "SET_MOVIE_DETAILS",
      payload: movieDetailsResponse.data,
    })
    yield put({type: 'TOGGLE_VISIBILITY'});
  } catch (error) {
    console.log("Error getting movie details: ", error);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

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

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    movies,
    genres,
    currentMovie,
    modalVisible
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

export default storeInstance;
