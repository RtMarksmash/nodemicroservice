const request = require('request');
const err = require('../utils/error');

function createRemoteDb(host, port) {
    const URL = 'https//:' + host + ':' + port;

    function list(table) {
        return request('GET', table);
    };

    function req(method, table, data) {
        let url = URL + '/' + data;
        body = '';

        return new Promise((resolve, reject) => {
            request({
                method,
                headers: {
                    'content-type': 'application/json'
                },
                url,
                body
            }), (err, req, body) => {
                if (err) {
                    console.error('data based conection failed', err);
                    return reject(err.message);
                }

                const resp = JSON.parse(body);
                return resolve(resp.body)

            }
        })

        return {
            list
        }
    }
}


module.exports = createRemoteDb;