const noticeProvider = require('./noticeProvider');
const noticeDao = require('./noticeDao');
const { response, errResponse } = require('../../config/response');
const resStatus = require('../../config/resStatus');
const withConnection = require('../../config/connection')

exports.posting = withConnection(async (connection, userEmail, title, contents) => {
    const userInfo = await userProvider.adminbyEmail(userEmail);
    if (userInfo.length < 1) return errResponse(resStatus.USER_USEREMAIL_NOT_EXIST);

    const newNoticeInfo = [title, contents]; //Title, Contents

    const newNoticeID = await noticeDao.insertNotice(connection, newNoticeInfo);

    return response(resStatus.NOTICE_POSTING_SUCCESS, { "noticeID": newNoticeID.toString() }); 
});

exports.editNotice = withConnection(async (connection, noticeId, title, contents) => {
    const selectedNotice = await noticeProvider.itembyNoticeId(noticeId);
    if (selectedNotice.length < 1) return errResponse(resStatus.NOTICE_NOT_EXIST);

    const editedNoticeInfo = [title, contents, 'U', noticeId]; //Title, Contents, Status, NoticeID

    const editedNoticeID = await noticeDao.updateNotice(connection, editedNoticeInfo);

    return response(resStatus.NOTICE_EDIT_SUCCESS, { "noticeID": editedNoticeID.toString() });
});

exports.deleteNotice = withConnection(async (connection, noticeId) => {

    const selectedNotice = await noticeProvider.itembyNoticeId(noticeId);
    if (selectedNotice.length < 1) return errResponse(resStatus.NOTICE_NOT_EXIST);

    const deletedNoticeID = await noticeDao.deleteNotice(connection, noticeId);

    return response(resStatus.NOTICE_DELETE_SUCCESS, { "noticeID": deletedNoticeID.toString() });

});