const noticeDao = require('./noticeDao');
const withConnection = require('../../config/connection')

exports.itembyNoticeId = withConnection(async (connection, noticeId)=>{
    const [requestedNotice] = await noticeDao.selectNoticeByNoticeID(connection, noticeId);
    return requestedNotice;
});

exports.allNoticeList = withConnection(async (connection) => {
    const [noticeList] = await noticeDao.getNoticeList(connection);
    return noticeList;
});

exports.noticeDetail = withConnection(async (connection, noticeId) => {
    const [noticeDetail] = await noticeDao.getNoticeDetail(connection, noticeId);
    return noticeDetail[0];
});