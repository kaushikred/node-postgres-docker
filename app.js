const express = require('express');
const app = express();

const bodyParser = require('body-parser');


// Body Parser
app.use(bodyParser.urlencoded({
  extended: false
}));


app.get('/', (req, res) => {
  return res.send({
    name: 'kaushiksss'
  });
});

app.listen(3000, () => {
  console.log('My rest api is running on port 3000 in docker', 3000);
});