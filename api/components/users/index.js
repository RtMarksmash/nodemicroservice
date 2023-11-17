//const store = require('../../../store/mysql');
const store = require('../../../store/remote_mysql');
const ctrl = require('../users/controller');



module.exports = ctrl(store);