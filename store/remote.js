const fetch = require('node-fetch-commonjs');

function createRemoteDB(host, port) {
    const URL = `http://${host}:${port}`;
    console.log(URL)

    async function list(table) {
        const response = await fetch(`${URL}/${table}`);
        const data = await response.json();
        return data;
    }

    return {
        list,
    }
}

module.exports = createRemoteDB;