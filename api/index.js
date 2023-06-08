const express = require('express')

const app = express()

const config = require('../config')

const user = require('./components/users/network')

app.use('/api/user', user)

app.listen(config.api.port , () =>{
    console.log('listen port' , config.api.port)
})