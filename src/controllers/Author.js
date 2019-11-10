const { Author } = require('../models');
const BaseController = require('./BaseController');

class AuthorController extends BaseController {
  constructor() {
    super(Author, '/authors');
  }

  routes() {
    const route = super.routes();

    return route;
  }
}

module.exports = AuthorController;
