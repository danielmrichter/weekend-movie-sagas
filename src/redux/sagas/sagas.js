import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// Create the rootSaga generator function
export default function* rootSaga() {
  yield takeLatest("FETCH_MOVIES", fetchAllMovies);
  yield takeLatest("GET_MOVIE_DETAILS", getMovieDetails);
  yield takeLatest("SEARCH_MOVIES", searchMovies);
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
    });
    yield put({ type: "TOGGLE_VISIBILITY" });
  } catch (error) {
    console.log("Error getting movie details: ", error);
  }
}

function* searchMovies(action) {
  try {
    const searchResponse = yield axios({
      method: "GET",
      url: "/api/search",
      params: {
        q: action.payload,
      },
    });
    yield console.log("response from searcH: ", searchResponse);
    yield put({ type: "SET_SEARCH_RESULTS", payload: searchResponse.data.results });
  } catch (error) {
    console.log("Error searching movies: ", error);
  }
}
