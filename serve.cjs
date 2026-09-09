const http = require('http');
const fs = require('fs');
const path = require('path');

const appFile = path.join(__dirname, 'wireframe.html');
http.createServer((request, response) => {
  fs.readFile(appFile, (error, content) => {
    response.writeHead(error ? 404 : 200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(error ? 'Preview unavailable' : content);
  });
}).listen(5173, '127.0.0.1');
