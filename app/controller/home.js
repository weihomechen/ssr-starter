'use strict';

const { Controller } = require('beidou-core');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const pageName = 'home';
    const info = await ctx.service.home.getAppInfo();

    await ctx.render(pageName, {
      pageName,
      __ENV__,
      info,
    });
  }
}

module.exports = HomeController;
