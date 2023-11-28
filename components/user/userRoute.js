module.exports = function(app){
    const user = require('./userController');

    // 1. 로그인
    app.post('/user/login', user.login)

    // 2. 회원가입
    app.post('/user/signup', user.signup)
};