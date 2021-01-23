const router = require('express').Router();
const favController = require('../controllers/fav.controller');
const weatherController = require('../controllers/weather.controller');

const bodyParser = require('body-parser');


router.get('/favorite', favController.getFavsOfUser);
router.get('/cityFav', weatherController.getCity);
router.post('/favorite',bodyParser.json(), favController.addFav);
router.post('/deleteFavorite',bodyParser.json(), favController.deleteFav);

module.exports = router;