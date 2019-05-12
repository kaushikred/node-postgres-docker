const express = require('express');
const app = express();
const sequelize = require('./config/database');
var Sequelize = require('sequelize');

// const pg = require('pg');
const bodyParser = require('body-parser');
const cron = require('node-cron');
// const dotenv = require('dotenv');

// dotenv.config()
//TEST DB
sequelize
  .sync({
    logging: console.log,
    force: true
  })
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// cron.schedule("0-59/10 * * * * *", async () => {
//   const userList = await getExpiredUsers()
//   console.log(userList[0])
// });

const User = sequelize.define('User', {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  name: Sequelize.STRING,
  bio: Sequelize.TEXT
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

const getExpiredUsers = () => {
  return sequelize.query(
    "SELECT * FROM users WHERE wallet_expiry_at < '2019-5-9'"
  );
};

app.get('/', (req, res) => res.send({ name: 'kaushiks' }));

app.listen(3000, () => {
  console.log('My rest api is running on port 3000 in docker', 3000);
});
