const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'sql10.freemysqlhosting.net',
  user: 'sql10342005',
  password: '7gp7PIA5U9',
  database: 'sql10342005',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

module.exports = mysqlConnection;
