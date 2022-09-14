const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/helloworld', (req, res) => {
  res.send('Hello World!')
});

app.post('/user', (req, res) => {
    res.send({
        message: 'CREATE NEW USER: POST /user',
        body: req.body
    });
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://localhost:${port}`)
});