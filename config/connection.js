const { pool } = require('./database');
const resStatus = require('./resStatus');
const { response, errResponse } = require('./response');

const withConnection = (handler) => async (...args) => {
    const connection = await pool.getConnection(async (conn) => conn);
    try {
        return await handler(connection, ...args)
    } catch (err) {
        console.log(err);
        throw errResponse(resStatus.DB_ERROR);
    } finally {
        connection.release();
    }
}

module.exports = withConnection;