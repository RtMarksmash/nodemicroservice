const express = require('express')
const app = express()
const config = require('../config')
const user = require('./components/users/network')
const auth = require('./components/auth/network')
const swaggerUI = require('swagger-ui-express')

const swaggerDoc = require('./swagger.json')
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use('/api/user', user)
app.use('/api/auth', auth)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))


app.listen(config.api.port, () => {
    console.log('listen port', config.api.port)
})