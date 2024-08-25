const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const axios = require("axios");

router.get("/", (req, res) => {
  // NOTE: There needs to be a valid TMDB api key in your environment.
  // dotEnv is added to the project, so simply create a .env file and supply
  // a TMDB_API_KEY, and get an api key from https://www.themoviedb.org/settings/api
  const apiKey = process.env.TMDB_API_KEY;
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${req.query.q}`
    )
    .then((TMDBRes) => {
      // console.log("Reponse from TMDB: ", TMDBRes);
      res.send(TMDBRes.data);
    })
    .catch((error) => {
      console.log("Error getting from TMDB: ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
