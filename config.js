module.exports = {
    remoteDB: process.env.REMOTE_DB || false,
    api: {
        port: process.env.API_PORT || 3000
    },
    jwt: {
        secret: process.env.JWT || 'not secret'
    },
    post: {
        port: process.env.POST_PORT || 3002,

    },
    mysql: {
        host: process.env.HOST || 'sql10.freemysqlhosting.net',
        user: process.env.HOST_USER || 'sql10662457',
        password: process.env.HOST_PASS || 'qfFCYgsyfl',
        database: process.env.HOST_DB || 'sql10662457',

    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,

    },
    cacheService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,

    }

}