const apiResponse = require("../util/api-response");
const createError = require("http-errors");
const express = require("express");
const router = express.Router();
const userService = require('../app/user/UserService');

router.get('/', async function(req, res, next) {
    try {
        const request = {
            limit : req.query.limit !== undefined ? parseInt(req.query.limit) : 10,
            offset : req.query.offset !== undefined ? parseInt(req.query.offset) : 0,
            keyword : req.query.keyword !== undefined ? req.query.keyword : "",
        }
        const service = new userService();
        const data = await service.getAllUser(request);
        const response = apiResponse("list all users",200,"success",data);
        res.send(response);
    } catch (err) {
        next(createError(err.name, err.message));
    }
});

module.exports = router
