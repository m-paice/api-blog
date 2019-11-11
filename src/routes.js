const { Author, Post } = require('./controllers');

module.exports = [
  new Author().routes(),
  new Post().routes(),
];
