const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello Holberton School!');
});

server.listen(1245, () => {});

module.exports = server;
