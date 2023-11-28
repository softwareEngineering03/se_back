const problemDao = require('./problemDao');
const withConnection = require('../../config/connection')

exports.problemByCompany = withConnection(async (connection, company)=>{
    const [requestedProblems] = await problemDao.selectNoticeByNoticeID(connection, company);
    return requestedProblems;
});

exports.problemByType = withConnection(async (connection, typeAndDifficulty) => {
    const [requestedProblems] = await problemDao.selectProblemByType(connection, typeAndDifficulty);
    return requestedProblems;
});