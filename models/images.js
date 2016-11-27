const db = require('../db/db');

<<<<<<< HEAD
// function showAllFavorites(req, res, next) {
//   db.any(`SELECT * FROM images
//     WHERE userus= XXXXXX;`)
//   .then((images) => {
//     res.images = images;
//     next();
//   })
// }

function saveFavorites(req, res, next) {
  console.log('oy oy oy', req.body.username);
  db.none(`INSERT INTO savedSearch (roverUrl, bingUrl, visionText, username) VALUES ($1, $2, $3, $4);`, [req.body.url, req.body.url2, req.body.text, req.body.username])
  .then(next())
  .catch(err => next(err));
}

// function deleteFavorite(req, res, next) {
//   db.none(`DELETE FROM images WHERE id = $1`, [req.params.id])
//   .then(next())
//   .catch(err => next(err));
// }

module.exports = { saveFavorites };
// showAllFavorites,

// deleteFavorite
=======
function getFavorites(req, res, next) {
 db.any(`SELECT * FROM savedSearch;`)
 .then((images) => {
   res.images = images;
   next();
 })
 .catch(error => next(error));
}

function saveFavorites(req, res, next) {
 db.none(`INSERT INTO savedSearch (roverUrl, bingUrl, visionText, username) VALUES ($1, $2, $3, $4);`, [req.body.url, req.body.url2, req.body.text, req.body.username])
 .then(next())
 .catch(err => next(err));
}

// function deleteFavorite(req, res, next) {
//  db.none(`DELETE FROM images WHERE id = $1`, [req.params.id])
//  .then(next())
//  .catch(err => mext(err));
// }


module.exports = { 
  getFavorites,
  saveFavorites 
};
 // showAllFavorites,
 
 // deleteFavorite



>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
