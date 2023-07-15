const express = require('express')
const router = express.Router()
const favoriteController = require('../controller/favoriteController')


//get all favorites
router.get('/', favoriteController.getAllFavorites)

//add favorite
router.post('/:id', favoriteController.addFavorite)

//delete favorite
router.delete('/:id', favoriteController.removeFavorite)

  
module.exports = router