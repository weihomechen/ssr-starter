'use strict';

module.exports = (app) => {
  const { router, controller } = app;

  router.get('/m', controller.api.get);
  router.post('/m', controller.api.post);

  app.get('home', '/', 'home.index');
  app.get('error', '/error', 'app.error');
};
