const express = require('express')

const Router = express.Router()
const response = require('../../../network/response')
const controller = require('./index')


Router.get(('/'), (req,res)=>{
    controller.list()
    .then((item)=>{
        response.succes(req,res, item, 200)
    })
    .catch((error)=>{
        response.error(req,res,error,500)
    })


Router.get('/:id', (req,res)=>{
    controller.get(req.params.id)
    .then((user)=>{
        response.succes(req,res,user,200)
    })
    .catch((error)=>{
        response.succes(req,res,error,500)
    })
})
   
    
})


module.exports = Router