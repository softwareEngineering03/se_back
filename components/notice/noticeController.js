const { response, errResponse } = require('./../../config/response');
const validator = require('../../helpers/validator');
const resStatus = require("../../config/resStatus");
const noticeService = require("./noticeService");
const noticeProvider = require('./noticeProvider')

/**
 * [POST] /notice/posting
 */
exports.posting = async function (req, res) {
    try {
        const { email, title, contents } = req.body;
        const invalidation = await validator.newPost(email, title, contents);

        if (invalidation) return(res.send(errResponse(invalidation)));

        const noticePosting = await noticeService.posting(title, contents);

        return(res.send(noticePosting));
    }

    catch (e) {
        return(res.send(errResponse(resStatus.SERVER_ERROR)));
    }
}

/**
 * [PUT] /notice/edit/:noticeid
*/
exports.editNotice = async function (req, res) {
    try {

        const noticeId = req.params.noticeid;
        const invalidation = await validator.oneParams(noticeId);

        if (invalidation) return(res.send(response(invalidation)));

        const {title, contents } = req.body;

        const editNoticeResult = await noticeService.editNotice(noticeId, title, contents);

        return(res.send(editNoticeResult));
    }

    catch (e) {
        return(res.send(errResponse(resStatus.SERVER_ERROR)));
    }
}

/**
 *  [PUT] /notice/delete/:noticeid
 */
exports.deleteNotice = async function (req, res) {
    try {

        const noticeId = req.params.noticeid;
        const invalidation = await validator.oneParams(noticeId);

        if (invalidation) return(res.send(response(invalidation)));

        const deleteNoticeResult = await noticeService.deleteNotice(noticeId);

        return(res.send(deleteNoticeResult));
    }

    catch (e) {
        return(res.send(errResponse(resStatus.SERVER_ERROR)));
    }

}

/**
 * [GET] /notice/list
*/
exports.noticeList = async function (req, res) {
    try {
        const noticeListResult = await noticeProvider.allNoticeList();

        return(res.send(response(resStatus.NOTICE_LIST_SUCCESS, noticeListResult)));
    }

    catch (e) {
        return(res.send(errResponse(resStatus.SERVER_ERROR)));
    }
}

/**
 *  [GET] /notice/detail/:noticeid
 */
exports.noticeDetail = async function (req, res) {
    try {

        const noticeId = req.params.noticeid;
        const invalidation = await validator.oneParams(noticeId);

        if (invalidation) return(res.send(response(invalidation)));

        const noticeDetail = await noticeProvider.noticeDetail(noticeId);

        return(res.send(response(resStatus.NOTICE_DETAIL_SUCCESS, noticeDetail)));

    }
    catch (e) {
        return(res.send(errResponse(resStatus.SERVER_ERROR)));
    }
}