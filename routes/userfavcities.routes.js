const router = require('express').Router();
const favController = require('../controllers/fav.controller');
const bodyParser = require('body-parser');


router.get('/favorite/:id', favController.getFavsOfUser);
router.post('/favorite',bodyParser.urlencoded({extended: true}), favController.addFav);
router.post('/deleteFavorite',bodyParser.urlencoded({extended: true}), favController.deleteFav);

module.exports = router;