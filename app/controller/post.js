'use strict';

const Controller = require('egg').Controller;

class PostController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = { result: 'test' };
  }
}

module.exports = PostController;
