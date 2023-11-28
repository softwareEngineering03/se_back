const userService = require("./userService");
const { response, errResponse } = require('./../../config/response');
const resStatus = require("../../config/resStatus");
const validator = require('../../helpers/validator');

/**
 * [POST] /user/login
 */
exports.login = async function (req, res) {
    try {
        const { email, password } = req.body;

        const invalidation = await validator.login(email, password);

        if (invalidation) return res.send(errResponse(invalidation));

        const loginResponse = await userService.login(email, password);

        return res.send(loginResponse);

    }
    catch (e) {
        console.log(e)
        res.send(errResponse(resStatus.SERVER_ERROR));
    }
}

/**
 * [POST] /user/signup
*/
exports.signup = async function (req, res) {
    try {
        const { email, password, name, authencity } = req.body;
        const invalidation = await validator.signUp(email, password, name, authencity);

        if (invalidation) return res.send(errResponse(invalidation));

        const signUpResponse = await userService.signUp(email, password, name, authencity);

        return res.send(signUpResponse);

    }
    catch (e) {
        console.log(e);
        res.send(errResponse(resStatus.SERVER_ERROR));
    }
}