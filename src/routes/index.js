const express = require('express')
const createError = require('http-errors')
const router = express.Router();
const apiResponse = require('../util/api-response');
const userRouter = require('./user');

router.get('/', function(req, res, next) {
    try {
        const response = apiResponse("greeting from express world",200,"success",null);
        res.send(response);
    } catch (err) {
        next(createError(err.code, err.message));
    }
});

router.use('/users',userRouter);

module.exports = router;
