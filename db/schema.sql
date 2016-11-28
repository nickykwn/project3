BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS savedSearch;

CREATE TABLE users (
  user_id SERIAL,
  username VARCHAR NOT NULL PRIMARY KEY UNIQUE,
  password VARCHAR NOT NULL,
  created_at TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE savedSearch (
  search_id SERIAL PRIMARY KEY,
<<<<<<< HEAD
<<<<<<< HEAD
  roverUrl TEXT,
=======
  roverUrl TEXT, 
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
=======
  roverUrl TEXT,
>>>>>>> 20ffc765159c57ad97cd78476dba5af5ed6d414a
  bingUrl TEXT,
  visionText TEXT,
  username VARCHAR REFERENCES users(username)
);

COMMIT;







