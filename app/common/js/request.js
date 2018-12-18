const getValue = require('get-value');

// API地址可区分环境，一般来说同构渲染node作为中间服务器只有向API服务器请求数据
const apiMap = {
  local: 'http://127.0.0.1:7003/',
  dev: 'http://127.0.0.1:7003/',
  stable: 'http://127.0.0.1:7003/',
  prod: 'http://127.0.0.1:7003/',
};
const defaultOptions = {
  v: '1.0',
};

function request(app, api, params = {}) {
  const url = `${apiMap[__ENV__]}m/`;
  const {
    data,
  } = params;
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
}

module.exports = request;
