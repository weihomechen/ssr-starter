const { message } = require('antd');

const isArray = Array.isArray || (xs => Object.prototype.toString.call(xs) === '[object Array]');
const measureCache = {};

const getQuery = function getQuery(key) {
  if (!window) {
    return '';
  }

  const { location } = window;
  const query = {};

  location.search.slice(1).split('&').forEach(item => {
    const queryPair = item.split('=');
    query[queryPair[0]] = queryPair[1];
  });

  const rst = query[key];

  return rst ? decodeURIComponent(query[key]) : '';
};

const getCookie = name => {
  let arr;
  const reg = RegExp(`(^| )${name}=([^;]+)(;|$)`);

  if (arr === document.cookie.match(reg)) {
    return decodeURIComponent(arr[2]);
  }

  return null;
};

const delCookie = name => {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null) {
    document.cookie = `${name}='';expires=${exp.toGMTString()}`;
  }
};

const isLocalEnv = () => __ENV__ === 'local';
const isOnlineEnv = () => __ENV__ === 'prod';

const errorHandler = function errorHandler(e, duration = 1.5, onClose = () => { }) {
  if (!isLocalEnv()) {
    if (e.errorCode === 'user_need_login' || e.errorMsg === '登录失效，请重新登录') {
      const { location } = window;

      delCookie('mat');

      location.pathname !== '/login' && (location.href = '/login');
      return;
    }
  }

  message.error(e.errorMsg || e.message || e.msg, duration, onClose);
};

const measureImages = (v) => {
  const imgs = isArray(v) ? v : [v];
  const measure = img => new Promise((resolve, reject) => {
    if (measureCache[img]) {
      resolve(measureCache[img]);
    } else {
      const image = new Image();
      image.onload = () => {
        const rst = {
          w: image.width,
          h: image.height,
        };
        measureCache[img] = rst;
        resolve(rst);
      };
      image.onerror = () => {
        reject({
          errorMsg: `${img} load error`,
        });
      };
      image.src = img;
    }
  });
  return Promise.all(imgs.map(img => measure(img)));
};

const getApiDomain = (env = __ENV__) => ({
  local: 'http://127.0.0.1:7002/',
  dev: 'http://127.0.0.1:7002/',
  stable: 'http://127.0.0.1:7002/',
  prod: 'http://127.0.0.1:7002/',
})[env];

module.exports = {
  getQuery,
  errorHandler,
  getApiDomain,
  isOnlineEnv,
  isLocalEnv,
  measureImages,
};
