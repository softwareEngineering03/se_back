const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/secret');

async function jwtLogin(user) {
    const secretKey = jwtConfig.secretKey;
    const options = jwtConfig.options;

    const payload = {
        name: user.Name,
        email: user.Email,
        authencity: user.Authencity
    };
    return ({
        accesstoken: jwt.sign(payload, secretKey, options),
        name: user.Name,
        email: user.Email,
        authencity: user.Authencity,
        status: true,
    })
}

module.exports = jwtLogin;