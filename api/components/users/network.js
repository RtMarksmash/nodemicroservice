const express = require('express')

const router = express.Router()
const response = require('../../../network/response')
const controller = require('./index')


//routes

router.get(('/'), list)
router.get(('/:id'), get)
router.post(('/'), upsert)
router.put(('/'), upsert)


function list(req, res) {
    controller.list()
        .then((item) => {
            response.succes(req, res, item, 200)
        })
        .catch((error) => {
            response.error(req, res, error, 500)
        })
}


function get(req, res) {
    controller.get(req.params.id)
        .then((user) => {
            response.succes(req, res, user, 200)
        })
        .catch((error) => {
            response.succes(req, res, error, 500)
        })
}

function upsert(req, res) {
    controller.upsert(req.body)
        .then((user) => {
            response.succes(req, res, user, 200)
        })
        .catch((err) => {
            response.error(req, res, err, 500)
            console.log(err)
        })
}





module.exports = router