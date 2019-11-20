module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('authors', 'email', { type: Sequelize.STRING }),

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('authors', 'email'),
};
