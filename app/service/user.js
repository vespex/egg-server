'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  async find(uid) {
    return await this.ctx.model.Blog.findOne({ where: { uid } });
  }

  async create(params) {
    return await this.ctx.model.Blog.create(params);
  }

  async update(uid, params) {
    const data = await this.ctx.model.Blog.findOne({ where: { uid } });
    if (!data) return null;
    return await data.update(params);
  }

  // async delete(uid) {
  //   const data = await this.ctx.model.Blog.findOne({ where: { uid } });
  //   return await data.destroy();
  // }
}

module.exports = BlogService;
