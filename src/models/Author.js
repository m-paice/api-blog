const { Model, DataTypes } = require('sequelize');

class Author extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTEGER,

      },
      {
        sequelize,
      },
    );
  }

  static associate(models) {
    // this.hasMany(models.Post, { foreignKey: 'author_id', as: 'posts' });
    // this.hasMany(models.Comments, { foreignKey: 'author_id', as: 'comments' });
  }
}
module.exports = Author;
