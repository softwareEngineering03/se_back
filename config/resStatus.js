module.exports = {

    // Common
    TOKEN_VERIFICATION_FAILURE : { "result": false, "code": 1000, "message":"JWT 토큰 검증 실패" },
    QUERY_ONE_EMPTY: { "isSuccess": false, "code": 1001, "message": "필요한 매개변수가 존재하지 않습니다." },
    QUERY_TWO_EMPTY: { "isSuccess": false, "code": 1002, "message": "필요한 두 매개변수 중 최소 하나가 존재하지 않습니다." },

    // User
    USER_EMAIL_EMPTY : { "result": false, "code": 2001, "message":"이메일을 입력해주세요" },
    USER_EMAIL_ERROR_TYPE : { "result": false, "code": 2002, "message":"이메일을 형식을 정확하게 입력해주세요." },
    USER_PASSWORD_EMPTY : { "result": false, "code": 2003, "message": "비밀번호를 입력 해주세요." },
    USER_NAME_EMPTY : { "result": false, "code": 2004, "message":"회원가입을 위해 이름이 필요합니다." },
    USER_AUTHENCITY_WRONG : {"result": false, "code": 2005, "message":"사용자의 권한이 적합하지 않습니다." },
    USER_USEREMAIL_NOT_EXIST : { "result": false, "code": 2006, "message": "해당 이메일을 가진 회원이 존재하지 않습니다." },
    USER_ADMINEMAIL_NOT_EXIST : { "result": false, "code": 2007, "message": "해당 이메일을 가진 관리자가 존재하지 않습니다." },
    USER_REDUNDANT_EMAIL : { "result": false, "code": 2008, "message":"이미 가입된 이메일입니다." },
    USER_EMAIL_WRONG : { "result": false, "code": 2009, "message": "아이디가 잘못 되었습니다." },
    USER_PASSWORD_WRONG : { "result": false, "code": 2010, "message": "비밀번호가 잘못 되었습니다." },
    USER_LOGIN_SUCCESS : { "result": true, "code": 3001, "message": "로그인을 완료하였습니다." },
    USER_SIGNUP_SUCCESS : { "result": true, "code": 3002, "message": "회원가입을 완료하였습니다." },

    // Notice
    NOTICE_POSTING_SUCCESS : { "result": true, "code": 4000, "message":"공지사항을 등록하였습니다." },
    NOTICE_EDIT_SUCCESS : { "result": true, "code": 4001, "message":"공지사항을 수정하였습니다." },
    NOTICE_DELETE_SUCCESS : { "result": true, "code": 4002, "message":"공지사항 삭제하였습니다." },
    NOTICE_POSINTG_SHORTAGE : { "result": false, "code": 4003, "message":"공지사항 등록하는 데 필요한 정보가 부족합니다." },
    NOTICE_NOT_EXIST : { "result": false, "code": 4004, "message":"요청하신 공지사항을 찾지 못하였습니다." },
    NOTICE_LIST_SUCCESS : { "result": false, "code": 4005, "message":"공지사항 목록을 불러왔습니다." },
    NOTICE_DETAIL_SUCCESS : { "result": false, "code": 4006, "message":"공지사항 세부사항을 불러왔습니다." },

    // Problem
    PROBLEM_BY_COMPANY_SUCCESS : { "result": true, "code": 5000, "message":"요청하신 기업 별 추천 문제를 불러왔어요." },
    PROBLEM_BY_TYPE_SUCCESS : { "result": true, "code": 5001, "message":"요청하신 알고리즘 유형의 문제를 불러왔어요." },
    PROBLEM_ADD_SUCCESS : { "result": true, "code": 5002, "message":"문제 등록을 완료했습니다." },

    //Connection, Transaction 등의 서버 오류
    DB_ERROR : { "result": false, "code": 4000, "message": "데이터 베이스 에러"},
    SERVER_ERROR : { "result": false, "code": 4001, "message": "서버 에러"},
}