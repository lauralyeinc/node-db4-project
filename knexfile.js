// Update with your config settings.

module.exports = {
  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './data/recipebook.sqlite3'
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds"
    },
  },

};
