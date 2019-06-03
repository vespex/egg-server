'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {
  async index() {
    const ctx = this.ctx;
    const { offset = 0, limit = 20 } = ctx.request.query;
    const result = await ctx.service.blog.list({ offset, limit });
    ctx.body = result;
  }
  async show() {
    const ctx = this.ctx;
    const result = await ctx.service.blog.find(ctx.params.id);
    if (!result) {
      ctx.code = 404;
      return;
    }
    ctx.body = result;
  }
  async create() {
    const ctx = this.ctx;
    const { title, description, poster, content, author, type } = ctx.request.body;
    const result = await ctx.service.blog.create({ title, description, poster, content, author, type, created_at: Date.now(), updated_at: Date.now() });
    if (!result) {
      ctx.code = 404;
      return;
    }
    ctx.body = 'success';
  }
  async update() {
    const ctx = this.ctx;
    const { title, description, poster, content, author, type } = ctx.request.body;
    const result = await ctx.service.blog.update(ctx.params.id, { title, description, poster, content, author, type, updated_at: Date.now() });
    if (!result) {
      ctx.code = 404;
      return;
    }
    ctx.body = result;
  }
  async destroy() {
    const ctx = this.ctx;
    const result = await ctx.service.blog.find(ctx.params.id);
    if (!result) {
      ctx.code = 404;
      return;
    }
    await result.destroy();
  }
}

module.exports = BlogController;
