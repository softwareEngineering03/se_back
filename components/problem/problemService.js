const withConnection = require('../../config/connection');
const problemDao = require('./problemDao');
const { response, errResponse } = require('../../config/response');
const resStatus = require('../../config/resStatus');

/**
 * [POST] /test/problem/add
*/
exports.addProblem = withConnection(async (connection, req, res)=> {
    // try {
        const { ProblemID, ProblemTitle, ProblemLink, Type, Difficulty, Company } = req.body;
        const problemInfo = [ProblemID, ProblemTitle, ProblemLink, Type, Difficulty, Company];

        const insertedProblem = await problemDao.insertProblem(connection, problemInfo);

        return (res.send(response(resStatus.PROBLEM_ADD_SUCCESS)));
    // }

    // catch (e) {
    //     return (res.send(errResponse(resStatus.SERVER_ERROR)));
    // }
});