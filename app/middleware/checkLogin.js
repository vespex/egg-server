'use strict';
module.exports = () => {
  return async function checkLogin(ctx, next) {
    if (!ctx.session.user_id) {
      ctx.status = 200;
      ctx.code = 401;
      return;
    }
    await next();
  };
};
