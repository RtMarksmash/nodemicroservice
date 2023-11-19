const express = require('express')
const app = express()
const config = require('../config')
const post = require('./components/post/network')
const errors = require('../network/errors')

const bodyParser = require('body-parser')


app.use(bodyParser.json())

//routes
app.use('/api/post', post)
app.use(errors)


app.listen(config.post.port, () => {
    console.log('post service is listening on port', config.post.port)
})