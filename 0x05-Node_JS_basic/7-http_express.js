const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const database = process.argv[2];

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(database)
    .then((message) => {
      const trimmedMessage = message.trim();
      res.status(200).send(`This is the list of our students\n${trimmedMessage}`);
    })
    .catch((error) => {
      res.status(500).send(`This is the list of our students\n${error.message.trim()}`);
    });
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
