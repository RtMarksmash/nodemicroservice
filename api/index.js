const express = require('express')
const app = express()
const config = require('../config')
const user = require('./components/users/network')
const swaggerUI = require('swagger-ui-express')

const swaggerDoc = require('./swagger.json')

app.use('/api/user', user)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
app.use(express.json())

app.listen(config.api.port, () => {
    console.log('listen port', config.api.port)
})