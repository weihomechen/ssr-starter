const request = require('../common/js/request');

module.exports = (app) => {
  class HomeService extends app.Service {
    /**
     * @description
     * @param {Object} param
     * @return {Object}
     */
    async getAppInfo(param) {
      try {
        const resp = await request('app.info', param);
        return resp;
      } catch (error) {
        this.ctx.logger.error(error);
        this.ctx.redirect('/error');
      }
    }
  }

  return HomeService;
};
