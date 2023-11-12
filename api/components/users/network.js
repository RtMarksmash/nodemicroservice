const express = require('express')
const secure = require('./secure')
const router = express.Router()
const response = require('../../../network/response')
const controller = require('./index')


//routes

router.get(('/'), list)
router.get(('/:id'), get)
router.post(('/'), upsert)
router.post('/follow/:id',secure('follow'),follow)
router.get('/:id/following',following)
router.put('/', secure('update'), upsert)


function list(req, res, next) {
    controller.list()
        .then((item) => {
            response.succes(req, res, item, 200)
        })
        .catch(next)


}


function get(req, res, next) {
    controller.get(req.params.id)
        .then((user) => {
            response.succes(req, res, user, 200)
        })
        .catch(next)
}

function upsert(req, res, next) {
    controller.upsert(req.body)
        .then((user) => {
            response.succes(req, res, user, 200)
        })
        .catch(next)



};


function follow(req,res,next){
    controller.follow(req.user.id,req.params.id)
        .then(data=>{
            response.succes(req,res,data,201)
        })
        .catch(next)
};


function following(req,res,next){
    controller.following(req.params.id)
        .then(data =>{
            response.succes(req,res,data,201);
        })
        .catch(next)
};




module.exports = router