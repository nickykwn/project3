const images             = require('express').Router();
const { saveFavorites, getFavorites }  = require('../models/images');


images.get('/:username', getFavorites, (req, res) => {
  res.json(res.images || []);
})

images.post('/', saveFavorites, (req, res) => {
  res.json({ message: 'successfully saved image' });
})



module.exports = images;
