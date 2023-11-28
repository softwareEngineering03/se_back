const resStatus = require('../config/resStatus')

const validator = {

  login: async (email, password) => {
    if (!email) return resStatus.USER_EMAIL_EMPTY

    if (!password) return resStatus.USER_PASSWORD_EMPTY

    return false; //validation 통과
  },

  signUp: async (email, password, name, authencity) => {
    const invalidation = await validator.login(email, password);
    if (invalidation) return invalidation

    if (!name) return resStatus.USER_NAME_EMPTY
    if (!authencity) return resStatus.USER_AUTHENCITY_WRONG
    if (authencity.length >= 2) return resStatus.USER_AUTHENCITY_WRONG

    return false;
  },

  newNotice: async (email, title, contents) => {
    if (!title || !contents)
      return resStatus.NOTICE_POSINTG_SHORTAGE;

    if (!email) return resStatus.USER_EMAIL_EMPTY

    return false;
  },

  oneQuery: async (aQuery) => {
    if (!aQuery)
      return resStatus.QUERY_ONE_EMPTY;

    return false;
  },

  twoQueries: async (firstaQuery, SecaQuery) => {
    if (!firstaQuery || !SecaQuery)
      return resStatus.QUERY_TWO_EMPTY;

    return false;
  }
}

module.exports = validator;