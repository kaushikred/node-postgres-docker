require('dotenv').config();
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

module.exports = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
