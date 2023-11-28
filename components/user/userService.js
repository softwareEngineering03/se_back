const userProvider = require('./../user/userProvider');
const userDao = require('./../user/userDao');
const { response, errResponse } = require('../../config/response');
const resStatus = require('../../config/resStatus');
const encryptedPassword = require('../../helpers/encrypt');
const jwtLogin = require('./../../config/jwtLogin');
const withConnection = require('../../config/connection')

exports.login = async(email, password) =>{

    const userInfo = await userProvider.userbyEmail(email);
    if (userInfo.length < 1) return errResponse(resStatus.USER_USEREMAIL_NOT_EXIST);

    const userPassword = userInfo.Password;
    const userSalt = userInfo.Salt;

    const verify = await encryptedPassword.verifyPassword(password, userSalt, userPassword);

    if (!verify) return errResponse(resStatus.USER_PASSWORD_WRONG);

    const jwtResponse = await jwtLogin(userInfo);

    return response(resStatus.USER_LOGIN_SUCCESS, jwtResponse);
};


exports.signUp = withConnection(async (connection, email, password, name, authencity) => {
    const userInfo = await userProvider.userbyEmail(email);
    if (userInfo) return errResponse(resStatus.USER_REDUNDANT_EMAIL);

    const encryptedData = await encryptedPassword.createHashedPassword(password);
    const hashedPassword = encryptedData.hashedPassword;
    const salt = encryptedData.salt;

    const newUserInfo = [email, hashedPassword, salt, name, authencity];

    const newUser = await userDao.insertUser(connection, newUserInfo);

    return response(resStatus.USER_SIGNUP_SUCCESS, { "email": email, "authencity": authencity });
});