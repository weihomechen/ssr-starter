
'use strict';

const { Controller } = require('beidou-core');
const fs = require('fs');
const path = require('path');

class ApiController extends Controller {
  async get() {
    const { ctx } = this;
    const { api } = ctx.query;
    const data = fs.readFileSync(path.resolve(__dirname, `../../../mock/${api}.json`));
    const res = data.toString();

    ctx.body = res;
  }

  async post() {
    const { ctx } = this;
    const { api } = ctx.query;
    const data = fs.readFileSync(path.resolve(__dirname, `../../../mock/${api}.json`));

    ctx.body = data.toString();
  }
}

module.exports = ApiController;
