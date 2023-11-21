//const store = require('../../../store/mysql');
const config = require('../../../config');


let store;
if(config.remoteDB === true){
    store = require('../../../store/remote_mysql');
}else{
    store = require('../../../store/mysql');
}

const ctrl = require('../users/controller');


module.exports = ctrl(store);