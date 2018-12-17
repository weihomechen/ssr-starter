const request = require('../common/js/request');

const isOnline = __ENV__ === 'prod';

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
        if (isOnline) {
          this.ctx.redirect('/error');
          return;
        }

        return { error };
      }
    }
  }

  return HomeService;
};
