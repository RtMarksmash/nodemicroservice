const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;


function sign(data) {
    return jwt.sign(data, secret);
};

function verify(token) {

    return jwt.verify(token, secret);

};


const check = {
    own: function(req, owner) {
        const decode = decodeHeader(req);
        console.log(decode);
        
        if(decode.id !== owner){
            throw new Error('you cannot do this');
        }
    },
}

function getToken(auth) {
    if (!auth) {
        throw new Error('there is not token');
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('invalid format')
    }

    let token = auth.replace('Bearer ', '');

    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decode = verify(token);

    req.user = decode

    return decode

}



module.exports = {
    sign,
    check
} 
 


