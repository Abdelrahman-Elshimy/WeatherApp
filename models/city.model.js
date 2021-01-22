const mongoose = require('mongoose');
const OpenWeatherMapHelper = require("openweathermap-node");

// configure Open Weather Api
const helper = new OpenWeatherMapHelper(
    {
        APPID: 'f58ab6af58b2fa78824bb481cf027a39',
        units: "imperial"
    }
);



const DB_URL = 'mongodb://localhost:27017/weather';

const citySchema = mongoose.Schema({}, { strict: false });

const City = mongoose.model('cit', citySchema);


// Search For City in DB if exist return weather of it if not get weather from API and store data in  database
exports.addNewCity = (city) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            let name = city.name.charAt(0).toUpperCase() + city.name.substring(1).toLowerCase();
            console.log(name);
            return City.findOne({ name: name });
        }).then((getCity) => {
            if (getCity) {
                mongoose.disconnect();
                resolve(getCity);
            }
            else {
                helper.getCurrentWeatherByCityName(city.name, (err, currentWeather) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        let newCity = new City(currentWeather);
                        newCity.save().then(() => {
                            mongoose.disconnect();
                            resolve(currentWeather);
                        }).catch(err => {
                            mongoose.disconnect();
                            reject(err);
                        })

                    }
                });

            }
        }).catch(err => {
            mongoose.disconnect();
            reject(err);
        })

    });
}


// Get All Cities from DB
exports.getCities = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            City.find().then((cities) => {
                console.log(cities);
                mongoose.disconnect();
                resolve(cities);
            }).catch(err => {
                mongoose.disconnect();
                reject(err);
            })
        }).catch(err => {
            mongoose.disconnect();
            reject(err);
        })
    });
}



