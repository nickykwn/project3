const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('../../lib/passportStrategy');

// initialize passport
<<<<<<< HEAD
router.user(passport.initialize());

// handle all the routes
router.post('/', passport.authenticate('local', { session: false }), (req, res) => {
  sone.log('user login router working');
=======
router.use(passport.initialize());

// handle all the routes
router.post('/', passport.authenticate('local', { session: false }), (req, res) => {
  console.log('user login route working');
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
  const token = jwt.sign(req.user, process.env.JWT_SECRET, {
    expiresIn: 86400 // expires in 24 hours
  });
  res.json({ token });
});

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 30c4a1a5650f0deb5a449aeaf52088ac3048d141
