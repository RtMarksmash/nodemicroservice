const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');
const router = require('./network')


const app = express();



app.use(bodyParser.json());

//ROUTE

app.use('/', router)


app.listen(config.cacheService.port, () => {
    console.log(`the cache redis service is listening on ${config.cacheService.port} port`)
})