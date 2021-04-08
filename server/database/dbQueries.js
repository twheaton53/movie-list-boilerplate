const mysql = require('mysql');
const db = require('./dbConnect.js');

module.exports = {

  get: (req, res) => {
    console.log('in get')
    db.query(`SELECT * FROM movieList`, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  },

  post: (req, res) => {
    db.query(`INSERT INTO movieList (title) VALUES ("${req.body.title}");`, (err) => {
      if (err) {
        res.send(err);
      } else {
        res.send('Successful post');
      }
    });
  }
}