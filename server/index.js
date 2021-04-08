const express = require('express');
const path = require('path');
const dbQueries = require('./database/dbQueries.js');
const port = 8080;

const app = express();

app.listen(port ,() => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/movies', (req, res) => {
  dbQueries.get(req, res);
});

app.post('/movies', (req, res) => {
  dbQueries.post(req, res);
});