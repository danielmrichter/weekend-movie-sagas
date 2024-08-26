-- NOTE: ONLY USE THIS DATABASE IF YOU ARE NOT IN THE "base" BRANCH
-- IT'S A REVAMPED DATA STRUCTURE TO ACCOMODATE SOME INFO WITH THE TMDB API

-- CREATE DATABASE "saga_movies_weekend"

CREATE TABLE "movies" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(120) NOT NULL,
  "poster"  VARCHAR(120) NOT NULL,
  "description" TEXT NOT NULL,
  "TMDB_Id" INT NOT NULL
);

CREATE TABLE "genres" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(80) NOT NULL,
  "TMDB_Id" INT NOT NULL
);

-- JUNCTION TABLE
-- Movies can have multiple genres and each genre can be applied to multiple movies
-- This is many-to-many!
CREATE TABLE "movies_genres" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" INT REFERENCES "movies"."id" NOT NULL,
  "genre_id" INT REFERENCES "genres"."TMDB_Id" NOT NULL
);

--------[ DATA! ]---------


INSERT INTO "genres"
    ("TMDB_Id", "name")
    VALUES
    (28, 'Action'),
    (12, 'Adventure'),
    (16, 'Animation'),
    (35, 'Comedy'),
    (80, 'Crime'),
    (99, 'Documentary'),
    (18, 'Drama'),
    (10751, 'Family'),
    (14, 'Fantasy'),
    (36, 'History'),
    (27, 'Horror'),
    (10402, 'Music'),
    (9648, 'Mystery'),
    (10749, 'Romance'),
    (878, 'Science Fiction'),
    (10770, 'TV Movie'),
    (53, 'Thriller'),
    (10752, 'War'),
    (37,'Western')
        