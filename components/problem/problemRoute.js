module.exports = function(app){
    const problem = require('./problemController');

    //1. 회사별 문제 추천 - 기업만 고려
    app.get('/problem/company/:company', problem.problemsByCompany);

    // 2. 유형별 문제 추천 - 유형과 난이도 고려
    app.get('/problem/type/:type/:difficulty', problem.problemsByType);

};