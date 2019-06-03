'use strict';
const crypto = require('crypto');
const uuidv4 = require('uuid/v4');

module.exports = {
  formatRes({ body = {}, code = 0 }) {
    const message = {
      0: 'success',
      400: 'failed',
      401: 'no login',
      404: 'no found',
    };
    const res = { data: body, message: message[code] || '', code };
    return res;
  },
  md5(str) {
    const hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex');
  },
  uuid() {
    return uuidv4();
  },
};
