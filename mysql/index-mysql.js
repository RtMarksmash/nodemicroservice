const express  = require('express');
const bodyParser = require('body-parser');
const config = require('../config');
const router = require('./network')


const app = express();



app.use(bodyParser.json());

//ROUTE

app.use('/', router)


app.listen(config.mysqlService.port, () =>{
    console.log(`the sql service is listening on ${config.mysqlService.port} port`)
})
 

