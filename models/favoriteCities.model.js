const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/weather';

const favSchema = mongoose.Schema({
    cityID: String,
    userID: String,
});

const Fav = mongoose.model('fav', favSchema);

exports.getFavsOfUser = (user_id) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            Fav.find({ userID: user_id }).then((favs) => {
                mongoose.disconnect();
                resolve(favs);
            }).catch(err => reject(err));
        }).catch(err => reject(err));
    })
}
exports.addFavToUser = (fav) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            Fav.findOne({ userID: fav.user_id, cityID: fav.city_id }).then((data) => {
                if (data) {
                    mongoose.disconnect();
                    resolve(data);
                }
                else {
                    let newFav = new Fav({ userID: fav.user_id, cityID: fav.city_id });
                    newFav.save().then(() => {
                        mongoose.disconnect();
                        resolve();
                    }).catch(err => reject(err));
                }
            })

        }).catch(err => reject(err));
    })
}

exports.deleteFavFromUser = (fav) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
            Fav.deleteOne({ userID: fav.user_id, cityID: fav.city_id }).then((fav) => {
                mongoose.disconnect();
                resolve(fav);
            }).catch((err) => {
                mongoose.disconnect();
                reject(err);
            });
        }).catch((err) => {
            mongoose.disconnect();
            reject(err);
        });
    });
}