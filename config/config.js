const { DB_SETTINGS } = require('../environment');

module.exports = {
  development: {
    username: DB_SETTINGS.user,
    password: DB_SETTINGS.password,
    database: DB_SETTINGS.database,
    host: DB_SETTINGS.host,
    dialect: 'postgres'
  },
  test: {
    username: DB_SETTINGS.user,
    password: DB_SETTINGS.password,
    database: DB_SETTINGS.database,
    host: DB_SETTINGS.host,
    dialect: 'postgres'
  },
  production: {
    username: DB_SETTINGS.user,
    password: DB_SETTINGS.password,
    database: DB_SETTINGS.database,
    host: DB_SETTINGS.host,
    dialect: 'postgres'
  }
};
