module.exports = {
    api: {
        port: process.env.API_PORT || 3000
    },
    jwt: {
        secret: process.env.JWT || 'not secret'

    },
    mysql: {
        host: process.env.HOST || 'sql10.freemysqlhosting.net',
        user: process.env.HOST_USER || 'sql10660337',
        password: process.env.HOST_PASS || 'eySSGmHMcV',
        database: process.env.HOST_DB || 'sql10660337',

    }

}