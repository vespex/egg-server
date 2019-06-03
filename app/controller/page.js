'use strict';

const Controller = require('egg').Controller;

class PageController extends Controller {
  async index() {
    await this.ctx.render('index.html');
  }
  async demo() {
    await this.ctx.render('demo.html');
  }
  async snap() {
    await this.ctx.render('snap.html');
  }
  async aviator() {
    await this.ctx.render('aviator.html');
  }
  async rabbit() {
    await this.ctx.render('rabbit.html');
  }
  async menu() {
    await this.ctx.render('menu.html');
  }
  async css() {
    await this.ctx.render('css.html');
  }
}

module.exports = PageController;
