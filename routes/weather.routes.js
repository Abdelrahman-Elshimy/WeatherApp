const router = require('express').Router();
const bodyParser = require('body-parser');
const OpenWeatherMapHelper = require("openweathermap-node");
const weatherController = require('../controllers/weather.controller');


// configure Open Weather Api
const helper = new OpenWeatherMapHelper(
    {
        APPID: 'f58ab6af58b2fa78824bb481cf027a39',
        units: "imperial"
    }
);

// Search by city name
router.post('/',bodyParser.urlencoded({extended: true}), (req, res, next) => {
    helper.getCurrentWeatherByCityName(req.body.cityName, (err, currentWeather) => {
        if(err){
            res.json(err);
        }
        else{
            res.json(currentWeather);
        }
    });
});

router.post('/city', bodyParser.urlencoded({extended: true}), weatherController.checkCity);

router.get('/', weatherController.addNewCity);



module.exports = router;