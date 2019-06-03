'use strict';
module.exports = () => {
  return async function resFormat(ctx, next) {
    await next();
    if (ctx.status >= 200 && ctx.status < 300 || ctx.code) {
      ctx.body = ctx.helper.formatRes(ctx);
    }
  };
};
