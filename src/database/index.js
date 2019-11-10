const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const { Author } = require('../models');

const connection = new Sequelize(dbConfig);

[Author].forEach((model) => model.init(connection));

[Author].forEach((model) => model.associate(connection.models));

module.exports = connection;
