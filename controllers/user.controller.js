const jwt = require('jsonwebtoken');
const userModel = require('../models/users.model');
const validatorResult = require('express-validator').validationResult;

const JWT_SECRET = 'This is json web token by abdelrahman';
exports.postLoginUser = (req, res, next) => {
    if (!validatorResult(req).array().length > 0) {
        userModel.LoginUser(req.body.email, req.body.password).then((user) => {
            let token = jwt.sign({
                userID: user._id,
            }, JWT_SECRET, {
                expiresIn: '1h'
            });
            res.json({token, user: user});
        }).catch(err => {
            res.json({err});
        });
    }
    else {
        res.json({errs: validatorResult(req).array()});
    }
}

exports.postNewUser = (req, res, next) => {
    if (!validatorResult(req).array().length > 0) {
        userModel.addNewUser(req.body).then(() => {
            res.json({msg: "done"});
        }).catch(err => {
            res.json({err: err});
        });
    }
    else {
        res.json({errs: validatorResult(req).array()});
    }
}