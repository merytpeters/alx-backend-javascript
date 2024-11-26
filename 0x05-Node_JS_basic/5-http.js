const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    countStudents(database)
      .then((message) => {
        const trimmedMessage = message.trim();
        res.end(`This is the list of our students\n${trimmedMessage}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message.trim()}`);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(1245, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
