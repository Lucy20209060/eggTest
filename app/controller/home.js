'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = [
      '<a download href="/download">download</a>',
      '<br>',
      '<a download href="/download-image">download image</a>',
    ].join('');
  }

  async downloadImage() {
    console.log(11111)
    const url = 'http://cdn2.ettoday.net/images/1200/1200526.jpg';
    const res = await this.ctx.curl(url, {
      streaming: true,
    });

    this.ctx.type = 'jpg';
    this.ctx.body = res.res;
  }
}

module.exports = HomeController;
