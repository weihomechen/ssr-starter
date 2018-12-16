'use strict';

const path = require('path');
const fs = require('fs');
// const ip = require('ip');

// const host = ip.address();
const entry = {};
const clientPath = path.join(__dirname, '../client/pages');
const dirnames = fs.readdirSync(clientPath);

dirnames.forEach(dirname => {
  const pagePath = `${clientPath}/${dirname}/index.jsx`;

  entry[dirname] = [pagePath];
});

module.exports = (app, defaultConfig /* , dev */) => {

  return ({
    ...defaultConfig,
    entry,
    // devServer: {
    //   host,
    //   port: '3000',
    //   proxy: {
    //     '/m/': {
    //       target: `http://${host}:3000`,
    //     },
    //   },
    // },
    resolve: {
      extensions: ['.json', '.js', '.jsx'],
      alias: {
        client: path.join(__dirname, '../client'),
      },
    },
  });
};
