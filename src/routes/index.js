const express = require('express')
const createError = require('http-errors')
const router = express.Router();

router.get('/', function(req, res, next) {
    try {
        res.send({
            status: "success"
        });

    } catch (err) {
        next(createError(err.code, err.message));
    }
});

module.exports = router;
