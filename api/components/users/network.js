const express = require('express')

const Router = express.Router()
const response = require('../../../network/response')


Router.get(('/'), (req,res)=>{
    response.succes(req,res,'todo normal', 200)
    
})


module.exports = Router