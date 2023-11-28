const noticeProvider = require('./noticeProvider');
const userProvider = require('../user/userProvider');
const noticeDao = require('./noticeDao');
const { response, errResponse } = require('../../config/response');
const resStatus = require('../../config/resStatus');
const withConnection = require('../../config/connection')

exports.posting = withConnection(async (connection, userEmail, title, contents) => {
    const userInfo = await userProvider.adminbyEmail(userEmail);
    if (!userInfo) return errResponse(resStatus.USER_ADMINEMAIL_NOT_EXIST);

    const newNoticeInfo = [title, contents]; //Title, Contents

    const newNoticeHeader = await noticeDao.insertNotice(connection, newNoticeInfo);

    return response(resStatus.NOTICE_POSTING_SUCCESS, { "noticeID": newNoticeHeader.insertId }); 
});

exports.editNotice = withConnection(async (connection, userEmail, noticeId, title, contents) => {
    const userInfo = await userProvider.adminbyEmail(userEmail);
    if (!userInfo) return errResponse(resStatus.USER_ADMINEMAIL_NOT_EXIST);

    const selectedNotice = await noticeProvider.itembyNoticeId(noticeId);
    if (selectedNotice.length < 1) return errResponse(resStatus.NOTICE_NOT_EXIST);

    const editedNoticeInfo = [title, contents, 'U', noticeId]; //Title, Contents, Status, NoticeID

    const editedNoticeID = await noticeDao.updateNotice(connection, editedNoticeInfo);

    return response(resStatus.NOTICE_EDIT_SUCCESS, { "noticeID": noticeId });
});

exports.deleteNotice = withConnection(async (connection, userEmail, noticeId) => {
    const userInfo = await userProvider.adminbyEmail(userEmail);
    if (!userInfo) return errResponse(resStatus.USER_ADMINEMAIL_NOT_EXIST);

    const selectedNotice = await noticeProvider.itembyNoticeId(noticeId);
    if (selectedNotice.length < 1) return errResponse(resStatus.NOTICE_NOT_EXIST);

    const deletedNoticeID = await noticeDao.deleteNotice(connection, noticeId);

    return response(resStatus.NOTICE_DELETE_SUCCESS, { "noticeID": noticeId });

});