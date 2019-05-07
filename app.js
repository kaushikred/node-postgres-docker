const express = require('express');
const app = express();
const sequelize = require('./config/database')
// const pg = require('pg');
const bodyParser = require('body-parser');

//TEST DB
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));


// pg.connect('postgres://postgres:password@db:5432/practicedocker');

const PORT = 3000;

app.get('/', (req,res) => res.send({name : 'kaushik'}))

app.listen(PORT, () => {
    console.log('My rest api is running on port 3000 in docker')
})