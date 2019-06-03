'use strict';

const Service = require('egg').Service;

class BlogService extends Service {
  async list(params) {
    return await this.ctx.model.Blog.findAll({ attributes: { exclude: [ 'content' ] }, ...params });
  }

  async find(id) {
    return await this.ctx.model.Blog.findByPk(id);
  }

  async create(params) {
    return await this.ctx.model.Blog.create(params);
  }

  async update(id, params) {
    const data = await this.ctx.model.Blog.findByPk(id);
    if (!data) return null;
    return await data.update(params);
  }

  async delete(id) {
    const data = await this.ctx.model.Blog.findByPk(id);
    return await data.destroy();
  }
}

module.exports = BlogService;
