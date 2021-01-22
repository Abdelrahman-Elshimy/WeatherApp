const weatherModel = require('./../models/city.model');

exports.checkCity = (req, res, next) =>{  
    weatherModel.addNewCity(req.body).then((city) => {
        res.json(city);
    }).catch((err) => {
        res.json(err);
    })
}

exports.addNewCity = (req, res, next) => {
    weatherModel.addNewCity(req.body).then(() => {
        res.send('done');
    }).catch(err => res.send(err));
}