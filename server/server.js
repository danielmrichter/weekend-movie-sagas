const express = require("express");
const app = express();
const movieRouter = require("./routes/movie.router.js");
const searchRouter = require("./routes/search.router.js");
const genreRouter = require("./routes/genres.router.js");
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("build"));
require("dotenv").config();

/** ---------- ROUTES ---------- **/
app.use("/api/movies", movieRouter);
app.use("/api/search", searchRouter);
app.use("/api/genres", genreRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
