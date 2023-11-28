exports.selectProblemsByCompany = async function (connection, company) {
    const selectProblemsByCompanyQuery = `
    SELECT ProblemID, ProblemTitle, ProblemLink
    FROM Problem
    WHERE Company = ?;
    `;

    const selectedProblems = await connection.query(selectProblemsByCompanyQuery, company);
    return selectedProblems;
}

exports.selectProblemByType = async function (connection, typeAndDifficulty) {
    const selectProblemByTypeQuery = `
    SELECT ProblemID, ProblemTitle, ProblemLink
    FROM Problem
    WHERE Type = ? AND Difficulty = ? ;
    `;

    const selectedProblems = await connection.query(selectProblemByTypeQuery, typeAndDifficulty);
    return selectedProblems;
}

exports.insertProblem = async function (connection, problemInfo) {
    const insertProblemQuery = `
    INSERT INTO Problem(ProblemID, ProblemTitle, ProblemLink, Type, Difficulty, Company)
    VALUES (?, ?, ?, ?, ?, ?);
    `;

    const insertProblemResult = await connection.query(insertProblemQuery, problemInfo);
    return insertProblemResult;
}