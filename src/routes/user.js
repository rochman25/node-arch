const apiResponse = require("../util/api-response");
const createError = require("http-errors");
const express = require("express");
const router = express.Router();
const db = require('../../models');

router.get('/', async function(req, res, next) {
    try {
        const data = await db.User.findAll();
        const response = apiResponse("list all users",200,"success",data);
        res.send(response);
    } catch (err) {
        next(createError(err.original.code, err.original.message));
    }
});

module.exports = router
