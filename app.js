const express = require('express');

const app = express();

// Routes of weather
const weatherRoutes = require('./routes/weather.routes');

// Add weather routes Middlware
app.use(weatherRoutes);


// listen to server
app.listen(3001, (req, res, next) => console.log('Server Listening to port 3000'));