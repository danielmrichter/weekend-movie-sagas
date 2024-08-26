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
  "TMDB_Id" INT NOT NULL UNIQUE
);

-- JUNCTION TABLE
-- Movies can have multiple genres and each genre can be applied to multiple movies
-- This is many-to-many!
CREATE TABLE "movies_genres" (
  "id" SERIAL PRIMARY KEY,
  "movie_id" INT REFERENCES "movies" NOT NULL,
  "genre_id" INT REFERENCES "genres"("TMDB_Id") NOT NULL
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
    (37,'Western');


INSERT INTO "movies"
("title", "poster", "description", "TMDB_Id")
VALUES
('Moulin Rouge!',	'https://image.tmdb.org/t/p/w185/2kjM5CUZRIU5yOANUowrbJcRL9L.jpg',	'A celebration of love and creative inspiration takes place in the infamous, gaudy and glamorous Parisian nightclub, at the cusp of the 20th century. A young poet, who is plunged into the heady world of Moulin Rouge, begins a passionate affair with the club''s most notorious and beautiful star.',	824),
('Jumanji',	'https://image.tmdb.org/t/p/w185/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg','When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan - an adult who''s been trapped inside the game for 26 years - into their living room. Alan''s only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.',	8844),
('Everything Everywhere All at Once',	'https://image.tmdb.org/t/p/w185/rKvCys0fMIIi1X9rmJBxTPLAtoU.jpg',	'An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what''s important to her by connecting with the lives she could have led in other universes.',	545611),
('Columbus',	'https://image.tmdb.org/t/p/w185/3ZE5Wl3CdfUH4BkWRmyMKPHkWHx.jpg',	'When a renowned architecture scholar falls suddenly ill during a speaking tour, his son Jin finds himself stranded in Columbus, Indiana - a small Midwestern city celebrated for its many significant modernist buildings. Jin strikes up a friendship with Casey, a young architecture enthusiast who works at the local library.',	414453);

INSERT INTO "movies_genres"
("movie_id", "genre_id")
VALUES
(1,18),
(1,10749),
(1,10402),
(2,12),
(2,14),
(2,10751),
(3,28),
(3,	12),
(3,	878),
(4,	18);