const ctrl = require('../users/controller');
const store = require('../../../store/mysql');


module.exports = ctrl(store);