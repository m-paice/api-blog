module.exports = {
  dialect: process.env.DB_DIALECT || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'docker',
  password: process.env.DB_PASSWORD || 'docker',
  database: process.env.DB_DATABASE || 'sqlnode',
  define: {
    timestamp: true, // para created_at e updated_at
    underscored: true,
  },
};
