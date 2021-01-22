const mongoose = require('mongoose');

const favSchema = mongoose.Schema({
    cityID: String,
    userID: String,
});

const Fav = mongoose.model('fav', favSchema);