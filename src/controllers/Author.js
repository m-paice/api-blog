const { Author } = require('../models');
const BaseControler = require('./BaseController');


class AuthorController extends BaseControler {
  constructor() {
    super(Author, '/authors');
  }

  async login() {

  }

  routes() {
    const route = super.routes();

    route.post('/authors/login', this.login);

    return route;
  }
}

module.exports = AuthorController;
