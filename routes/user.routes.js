const router = require('express').Router();
const userController = require('../controllers/user.controller');
const check = require('express-validator').check;
const bodyParser = require('body-parser');


router.post('/register',
    bodyParser.urlencoded({ extended: false }),
    check('name').notEmpty().withMessage('name field is required!'),
    check('email').notEmpty().withMessage('Email field is required!').isEmail().withMessage('Email not valid!'),
    check('password').notEmpty().withMessage('Password field is required').isLength({ min: 6, max: 12 }).withMessage('Password Length from 6 to 12!'),
    userController.postNewUser);

router.post('/login',
    bodyParser.urlencoded({ extended: false }),
    check('email').notEmpty().withMessage('Email field is required!').isEmail().withMessage('Email not valid!'),
    check('password').notEmpty().withMessage('Password field is required').isLength({ min: 6, max: 12 }).withMessage('Password Length from 6 to 12!'),
    userController.postLoginUser);

module.exports = router;