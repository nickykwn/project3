const db = require('./db.js');

function createUser(req, res, next) {
  db.none(`INSERT INTO users (username, password) VALUES ($1, $2)`, [req.body.username, req.body.password])
    .then(next())
    .catch((err) => {
      console.log(err);
      next(err);
    });
}

function findByUsername(username) {
<<<<<<< HEAD
  return db.one('SELECT * FROM users WHERE username = $1'. [username]);
=======
  return db.one('SELECT * FROM users WHERE username = $1', [username]);
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
}

module.exports = {
  createUser,
  findByUsername
<<<<<<< HEAD
};
=======
};
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
