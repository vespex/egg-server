'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const resFormat = app.middleware.resFormat();
  Object.keys(controller.page).forEach(page => router.get('/' + (page === 'index' ? '' : page), controller.page[page]));
  Object.keys(controller.get).forEach(api => router.get('/api/' + api, controller.get[api]));
  Object.keys(controller.post).forEach(api => router.post('/api/' + api, controller.post[api]));
  router.resources('blog', '/api/blog', resFormat, controller.blog);
};
