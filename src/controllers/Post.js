/* eslint-disable camelcase */
const { Post, Author, Comments } = require('../models');

module.exports = {
  /**
   * Nome do métodos
   * @param {Object} req
   * @param {Object} res
   */
  async index(req, res) {
    try {
      const posts = await Post.findAll({ include: 'author' });
      return res.status(200).json({
        data: posts,
        request: {
          type: 'GET',
          url: 'http://localhost:3001',
        },
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        request: {
          type: 'GET',
          url: 'http://localhost:3001',
        },
      });
    }
  },
  /**
   * Listar um post
   * @param {Object} req
   * @param {Object} res
   */
  async show(req, res) {
    const { post_id } = req.params;

    try {
      const response = await Post.findByPk(post_id, { include: ['author'] });

      if (!response) {
        return res.status(500).json({
          data: `Não foi possível encontrar o post do ID: ${post_id}`,
        });
      }

      return res.json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        data: `Não foi possível listar o post do ID: ${post_id}`,
        message: error,
      });
    }
  },
  // TODO: falta o comentario da funcao
  async showPostsComments(req, res) {
    const id = req.params.id_author;

    try {
      const isAuthor = await Author.findByPk(id);
      if (!isAuthor) {
        return res.status(500).json({
          data: 'author not found',
          request: {
            type: 'GET',
            url: 'http://localhost:5959/posts/comments',
          },
        });
      }
      const data = await Post.findOne({
        include: [
          'author',
          {
            model: Author,
            as: 'author',
          },
          { where: { id } },
        ],
      });
      return res.status(200).json({
        data,
        request: {
          type: 'GET',
          url: 'http://localhost:5959/posts/comments',
        },
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        request: {
          error: error.message,
          type: 'GET',
          url: 'http://localhost:5959/posts/comments',
        },
      });
    }
  },
  // TODO: falta o comentario da funcao
  async showRecentsPosts(req, res) {
    const response = await Post.findAll({
      limit: 2,
      order: [['createdAt', 'DESC']],
      include: 'author',
    });
    console.log(`este é a resposta  ${response}`);
    return res.json({
      data: response,
    });
  },
  /**
   * Nome do métodos
   * @param {Object} req
   * @param {Object} res
   */
  async store(req, res) {
    // const author_id = req.user;
    const { author_id, title, body } = req.body;
    try {
      const isAuthor = await Author.findByPk(author_id); // verificar se existe autor
      if (!isAuthor) {
        return res.status(500).json({ error: 'Author not found!' });
      }

      const post = await Post.create({
        author_id,
        title,
        body,
      });
      return res.status(200).json({
        data: post,
        request: {
          type: 'POST',
          url: 'http://localhost:3001',
        },
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        request: {
          type: 'POST/:id',
          url: 'http://localhost:3001',
        },
      });
    }
  },
  /**
   * Nome do métodos
   * @param {Object} req
   * @param {Object} res
   */
  async update(req, res) {
    const { id_post } = req.params;
    try {
      const post = Post.update({ ...req.body }, { where: { id: id_post } });
      return res.status(200).json({
        data: post,
        request: {
          type: 'PUT',
          url: 'http://localhost:3001',
        },
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        request: {
          type: 'PUT',
          url: 'http://localhost:3001',
        },
      });
    }
  },
  /**
   * Nome do métodos
   * @param {Object} req
   * @param {Object} res
   */
  async destroy(req, res) {
    const { id_post } = req.params;
    try {
      const isPost = await Post.findByPk(id_post); // verificar se existe post

      if (!isPost) {
        return res.status(404).json({
          error: 'Post not found!',
          request: {
            type: 'DELETE/:id',
            url: 'http://localhost:3001/:id',
          },
        });
      }
      await Post.destroy({ where: { id: id_post } });

      return res.status(200).json({
        data: 'Post deleted!',
        request: {
          type: 'DELETE/:id',
          url: 'http://localhost:3001/:id',
        },
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        request: {
          type: 'DELETE/:id',
          url: 'http://localhost:3001/:id',
        },
      });
    }
  },
};
