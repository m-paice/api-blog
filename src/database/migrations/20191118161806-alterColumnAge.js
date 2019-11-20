

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('authors', 'age');
    return queryInterface.addColumn('authors', 'age', { type: Sequelize.DATE });
  },

  down: (queryInterface, Sequelize) => queryInterface.addColumn('authors', 'age', { type: Sequelize.INTEGER }),
};
