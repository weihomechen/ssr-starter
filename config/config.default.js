'use strict';

const path = require('path');
const { alinodeConfig } = require('./config.private');


module.exports = {
  keys: 'secret',
  router: {
    root: '/pages',
  },
  view: {
    defaultViewEngine: 'react',
    defaultExtension: '.jsx',
    root: path.join(__dirname, '../client/pages'),
  },
  webpack: {
    custom: {
      configPath: path.join(__dirname, './webpack.js'),
    },
  },
  cluster: {
    listen: {
      port: 7003,
    },
  },
  alinode: {
    ...alinodeConfig,
  },
  favicon: 'https://rulifun.oss-cn-hangzhou.aliyuncs.com/static/image/logo-s.png',
};
