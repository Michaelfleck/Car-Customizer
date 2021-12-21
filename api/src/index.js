const api = require('./api');
const config = require('config');
const db = require('./db');

const models = {};

const context = {
  config,
  models,
};

Promise.all([api(context).start(), db(context).start()])
  .then(([app]) => {
    console.log('project started');
  })
  .catch(err => {
    console.error(err);
  });
