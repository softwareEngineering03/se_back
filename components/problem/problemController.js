const { response, errResponse } = require('../../config/response');
const validator = require('../../helpers/validator');
const resStatus = require("../../config/resStatus");
const problemProvider = require('./problemProvider')

/**
 * [GET] /problem/company/:company
 */
exports.problemsByCompany = async function (req, res) {
    try {
        const company = req.params.company;

        const requestedProblems = await problemProvider.problemByCompany(company);

        return(res.send(response(resStatus.PROBLEM_BY_COMPANY_SUCCESS, requestedProblems)));
    }

    catch (e) {
        return(res.send(errResponse(resStatus.SERVER_ERROR)));
    }
}

/**
 * [GET] /problem/type/:type/:difficulty
*/
exports.problemsByType = async function (req, res) {
    try {

        const problemType = req.params.type;
        const difficulty = req.params.difficulty;

        const typeAndDifficulty = [problemType, difficulty];

        const requestedProblems = await problemProvider.problemByType(typeAndDifficulty);

        return(res.send(response(resStatus.PROBLEM_BY_TYPE_SUCCESS, requestedProblems)));
    }

    catch (e) {
        return(res.send(errResponse(resStatus.SERVER_ERROR)));
    }
}