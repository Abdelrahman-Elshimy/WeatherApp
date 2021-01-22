const express = require('express');

const app = express();

// Routes of weather
const weatherRoutes = require('./routes/weather.routes');
// Routes of User
const userRoutes = require('./routes/user.routes');

// Add weather routes Middlware
app.use(weatherRoutes);
// Add User routes Middlware
app.use(userRoutes);


// listen to server
app.listen(3001, (req, res, next) => console.log('Server Listening to port 3000'));