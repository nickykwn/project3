const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { createUser } = require('../../models/users');
=======
const { createUser } = require('../../models/user');
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141

// handle all the routes

router.post('/', createUser, (req, res) => {
<<<<<<< HEAD
  console.log('user add route working');
  res.status(200).end();
});

module.exports = router;
=======
  res.status(200).end();
});

module.exports = router;
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
