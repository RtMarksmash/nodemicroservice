module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    jwt: {
        secret: process.env.JWT || 'not secret'

    },
    mysqul: {
        host: process.env.HOST || '',
        user: process.env.HOST_USER || '',
        password: process.env.HOST_PASS || '',
        database: process.env.HOST_DB || '',

    }

}