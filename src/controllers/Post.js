const { Post } = require('../models');
const BaseControler = require('./BaseController');


class PostController extends BaseControler {
  constructor() {
    super(Post, '/posts');
  }


  routes() {
    const route = super.routes();

    return route;
  }
}

module.exports = PostController;
