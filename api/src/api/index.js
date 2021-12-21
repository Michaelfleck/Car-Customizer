const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = context => ({
  start: () => {
    const app = express();

    app.use(cors());

    app.get('/', (req, res) => res.status(200).send('hello world'));

    app.get('/hello-world', (req, res) => res.status(200).send('{"hello":"world"}'));

    return new Promise((resolve, reject) => {
      app.listen(3000, err => (err ? reject(err) : resolve()));
    });
  },
});
