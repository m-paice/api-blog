const { Router } = require('express');

class BaseController {
  constructor(model, path) {
    this.model = model;
    this.path = path;
  }

  async index(req, res) {
    const response = await this.model.findAll();

    return res.json(response);
  }

  async store(req, res) {
    const response = await this.model.create(req.body);

    return res.json(response);
  }

  routes() {
    const route = Router();

    route.get(this.path, this.index.bind(this));
    route.post(this.path, this.store.bind(this));

    return route;
  }
}

module.exports = BaseController;
