const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'moviesDB'
});

db.connect((err) => {
  if (err) {
    console.log('Could not connec to database');
  } else {
    console.log('Connected to mysql database');
  }
});

module.exports = db;