'use strict';

const { Controller } = require('beidou-core');

class AppController extends Controller {
  async error() {
    const { ctx } = this;
    const pageName = 'error';

    await ctx.render(pageName, {
      pageName,
    });
  }
}

module.exports = AppController;
