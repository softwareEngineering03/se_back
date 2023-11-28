exports.insertNotice = async function (connection, newNoticeInfo) {

    const insertNoticeQuery = `
    INSERT INTO Notice(Title, Contents)
    VALUES (?, ?);
    `; //newNoticeInfo [Title, Contents]

    const insertNoticeResult = await connection.query(insertNoticeQuery, newNoticeInfo);
    return insertNoticeResult[0];
}

exports.selectNoticeByNoticeID = async function (connection, noticeID) {
    const selectNoticeByNoticeIDQuery = `
    SELECT *
    FROM Notice
    WHERE NoticeID = ?;
    `;

    const selectedNotice = await connection.query(selectNoticeByNoticeIDQuery, noticeID);
    return selectedNotice;
}


exports.updateNotice = async function(connection, updateNoticeInfo) {
    //updateNoticeInfo = [title, contents, status, noticeID]
    const updateNoticeQuery = `
    UPDATE Notice
    SET Title = ?, Contents = ?, Status = ?
    WHERE NoticeID = ?;
    `;

    const updateNoticeResult = await connection.query(updateNoticeQuery, updateNoticeInfo);
    return updateNoticeResult;
}

 exports.deleteNotice = async function (connection, noticeID){
    const deleteNoticeQuery = `
    DELETE 
    FROM Notice 
    WHERE NoticeID = ?;
    `;
    const deleteNoticeResult = await connection.query(deleteNoticeQuery, noticeID);
    return deleteNoticeResult;
 }

exports.getNoticeList = async function (connection) {
    const getNoticeListQuery = `
    SELECT Title, Date, Status
    FROM Notice;
    `;

    const noticeList = await connection.query(getNoticeListQuery);
    return noticeList;
}

exports.getNoticeDetail = async function (connection, noticeID) {
    const getNoticeDetailQuery = `
    SELECT *
    FROM Notice
    WHERE NoticeID = ?;
    `;

    const noticeDetail = await connection.query(getNoticeDetailQuery, noticeID);
    return noticeDetail;
}
