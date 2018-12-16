'use strict';

const { Controller } = require('beidou-core');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    // const info = await ctx.service.home.getAppInfo();
    const pageName = 'home';

    await ctx.render(pageName, {
      pageName,
      __ENV__,
      // info,
    });
  }
}

module.exports = HomeController;
