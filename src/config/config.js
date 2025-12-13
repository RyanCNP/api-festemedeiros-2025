require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: 'DB_URL',
    dialect: 'postgres',
    logging: true,
  },

  test: {
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: false,
  },

  production: {
    use_env_variable: 'DB_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  },
};