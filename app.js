const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

// Routes of weather
const weatherRoutes = require('./routes/weather.routes');
// Routes of User
const userRoutes = require('./routes/user.routes');
// Routes of Favorite Cities
const favRoutes = require('./routes/userfavcities.routes');




// Add weather routes Middlware
app.use(weatherRoutes);
// Add User routes Middlware
app.use(userRoutes);
// Add Favorite Cities routes Middlware
app.use(favRoutes);


// listen to server
app.listen(3001, (req, res, next) => console.log('Server Listening to port 3000'));