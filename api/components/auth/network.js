const express = require('express')

const router = express.Router()
const response = require('../../../network/response')
const controller = require('./index')


//routes

router.post('/login', function(req, res, next) {
    controller.login(req.body.username, req.body.password)
        .then(token => {
            response.succes(req, res, token, 200);
        })
        .catch(next)


})


module.exports = router;