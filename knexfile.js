// Update with your config settings.

module.exports = {
  useNullAsDefault: true,
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations: {
      directory: "./data/migrations",
    },
  },

};
