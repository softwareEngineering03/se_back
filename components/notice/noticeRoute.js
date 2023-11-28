module.exports = function(app){
    const notice = require('./noticeController');

    //1. 공지사항 등록
    app.post('/notice/posting', notice.posting);

    // 2. 공지사항 수정
    app.put('/notice/edit/:noticeid', notice.editNotice);

    // 3. 공지사항 삭제
    app.put('notice/delete/:noticeid', notice.deleteNotice);

    // 4. 공지사항 목록
    app.get('/notice/list', notice.noticeList);

    // 5. 공지사항 세부사항
    app.put('/notice/detail/:noticeid', notice.noticeDetail);

};