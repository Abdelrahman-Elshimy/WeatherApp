const favModel = require('../models/favoriteCities.model');

exports.getFavsOfUser = (req, res, next) => {
    favModel.getFavsOfUser(req.params.id).then((favs) => {
        res.json({favs});
    }).catch((err) => {
        res.json({err});
    })
}
exports.addFav = (req, res, next) => {
    favModel.addFavToUser(req.body).then(() => {
        res.json({msg:"done"});
    }).catch((err) => {
        res.json({err});
    })
}
exports.deleteFav = (req, res, next) => {
    favModel.deleteFavFromUser(req.body).then((fav) => {
        res.json({msg:"done", fav: fav});
    }).catch((err) => {
        res.json({err});
    })
}