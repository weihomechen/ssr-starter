const axios = require('axios');
const Qs = require('qs');
const getValue = require('get-value');

// API地址可区分环境
const apiMap = {
  local: 'http://127.0.0.1:7003/',
  dev: 'http://127.0.0.1:7003/',
  stable: 'http://127.0.0.1:7003/',
  prod: 'http://127.0.0.1:7003/',
};
const defaultOptions = {
  v: '1.0',
};

function request(api, params = {}, options = {}) {
  const url = `${apiMap[__ENV__]}m/`;
  const {
    app,
    data,
  } = params;
  const { method = 'get' } = options;
  const ts = new Date().getTime();

  const successCallback = (resp) => {
    const success = getValue(resp, 'data.result.success');
    if (success) {
      return getValue(resp, 'data.result.data');
    }

    const msg = getValue(resp, 'data.result.msg') || `${api}请求错误`;
    const code = getValue(resp, 'data.result.code') || 'Unknow Error';
    const errorObj = {
      error: true,
      msg,
      code,
    };

    return Promise.reject(errorObj);
  };

  if (app) {
    return app.curl(url, {
      data: {
        ...defaultOptions,
        data: JSON.stringify(data),
        api,
        ts,
      },
    }).then(({ res }) => {
      res.data = JSON.parse(res.data.toString());
      return successCallback(res);
    });
  } else {
    return axios({
      url,
      params: {
        ...defaultOptions,
        api,
        data: method.toLowerCase() === 'get' ? data : null,
        ts,
      },
      withCredentials: true,
      data: Qs.stringify({ data: JSON.stringify(data) }), // 这里是为了给post，put，patch请求方式使用的，get不会用到这里，
      ...options,
    }).then((resp) => {
      successCallback(resp);
    }).catch((e) => {
      const errorObj = {
        error: true,
        msg: e.message || e.msg || `${api}请求错误`,
        code: e.code || 'Unknow Error',
      };

      return Promise.reject(errorObj);
    });
  }
}

module.exports = request;
