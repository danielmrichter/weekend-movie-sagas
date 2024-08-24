const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// This get route will happen if there's no id provided,
//  and return the entire list of movies currently in the database:
router.get("/", (req, res) => {
  const query = `
    SELECT * FROM "movies"
      ORDER BY "title" ASC;
  `;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("ERROR: Get all movies", err);
      res.sendStatus(500);
    });
});

// This get will trigger if there's an id provided, to return just that movie's details:
router.get("/:id", (req, res) => {
  // console.log('GET/api/movies request to get: ', req.params.id)

  // This query will join in genres. Since it's a many to many
  // relationship, it'll pull them together.
  // For future data display purposes, it'll group it together so
  // that you're only getting one thing back. To do this,
  // it'll collapse the genres into one ARRAY.
  const query = `
  SELECT "movies".title AS "movieTitle", 
    "movies".poster, "movies".description AS "movieDescription",
    ARRAY_AGG("genres"."name") AS "movieGenre"
    FROM "movies"
	  JOIN "movies_genres" ON "movies".id = "movies_genres".movie_id
	  JOIN "genres" ON "movies_genres".genre_id = "genres".id
	  WHERE "movies".id = $1
	  GROUP BY "movieTitle", "movies".poster, "movieDescription";`;
  pool
    .query(query, [req.params.id])
    .then((result) => {
      // console.log(result.rows)
      // We just need one object, so just send that back instead
      // of as an array.
      res.send(result.rows[0]);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
    INSERT INTO "movies" 
      ("title", "poster", "description")
      VALUES
      ($1, $2, $3)
      RETURNING "id";
  `;
  const insertMovieValues = [
    req.body.title,
    req.body.poster,
    req.body.description,
  ];
  // FIRST QUERY MAKES MOVIE
  pool
    .query(insertMovieQuery, insertMovieValues)
    .then((result) => {
      // ID IS HERE!
      console.log("New Movie Id:", result.rows[0].id);
      const createdMovieId = result.rows[0].id;

      // Now handle the genre reference:
      const insertMovieGenreQuery = `
        INSERT INTO "movies_genres" 
          ("movie_id", "genre_id")
          VALUES
          ($1, $2);
      `;
      const insertMovieGenreValues = [createdMovieId, req.body.genre_id];
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool
        .query(insertMovieGenreQuery, insertMovieGenreValues)
        .then((result) => {
          //Now that both are done, send back success!
          res.sendStatus(201);
        })
        .catch((err) => {
          // catch for second query
          console.log(err);
          res.sendStatus(500);
        });
    })
    .catch((err) => {
      // 👈 Catch for first query
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
