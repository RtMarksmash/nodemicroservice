const express = require('express')
const response = require('../../../network/response')
const controller = require('./index')
const router = express.Router()


//routes

router.get('/', list)


//functions

function list(req, res, next) {
    controller.list()
        .then(data => {
            response.succes(req, res, data, 201)
        })
        .catch(next)
};



module.exports = router;