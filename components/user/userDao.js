exports.selectUserbyEmail = async function (connection, email) {

    const selectUserbyEmailQuery = `
    SELECT *
    FROM User
    WHERE Email = ?;
    `;
    const userInfo = await connection.query(selectUserbyEmailQuery, email);

    return userInfo;
}

exports.selectAdminbyEmail(email) = async function (connection, email) {

    const selectAdminbyEmailQuery = `
    SELECT *
    FROM User
    WHERE Email = ? ADN Authencity = 'M';
    `;
    const adminInfo = await connection.query(selectAdminbyEmailQuery, email);

    return adminInfo;
}

exports.insertUser = async function (connection, newUserInfo) {
    const insertUserQuery = `
    INSERT INTO User(Email, Password, Salt, Name, Autencity)
    VALUES (?, ?, ?, ?, ?);
    `;
    const insertUserResult = await connection.query(insertUserQuery, newUserInfo);

    return insertUserResult;
}
