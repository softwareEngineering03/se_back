const userDao = require('./userDao');
const withConnection = require('../../config/connection')

exports.userbyEmail= withConnection(async (connection, email)=>{

    const [userInfo] = await userDao.selectUserbyEmail(connection, email);
    return userInfo[0];
});

exports.adminbyEmail=withConnection(async (connection, email)=>{

    const [userInfo] = await userDao.selectAdminbyEmail(connection, email);
    return userInfo[0];
});

