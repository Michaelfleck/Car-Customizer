const mysql = require('mysql2');

module.exports = context => ({
  start: () => mysql.createConnection(context.config.database),
});
