const express = require('express');
const { Author, Post, Comments } = require('./controllers');
const auth = require('./middlewares/auth');

const routes = express.Router();

// AUTHORS
routes.post('/authors/login', Author.login); // Login
routes.get('/authors', Author.index); // Mostra todos os Autores
routes.post('/authors', Author.store); // Cria um novo Autor
routes.put('/authors/:id_author', Author.update); // Atualiza um Autor
routes.delete('/authors/:id_author', Author.destroy); // Deleta um Autor

// POSTS
routes.get('/posts/recents', Post.showRecentsPosts);
routes.get('/posts', Post.index); // Mostra todos os Posts
routes.post('/posts', Post.store); // Cadastra um novo Post
routes.put('/posts/:id_post', Post.update); // atualiza um Post
routes.delete('/posts/:id_post', Post.destroy); // Deleta um Post

// COMMENTS
routes.get('/comments', Comments.index); // Mostra todos os Commentários
routes.post('/comments', Comments.store); // Cria um novo Comentário

// AUTHORS POSTS AND COMMENTS
routes.get('/posts/comments/:id_author', Post.showPostsComments);
module.exports = routes;
