const http = require('http');
const fs = require('fs');
const path = require('path');

const appFile = path.join(__dirname, 'wireframe.html');
http.createServer((request, response) => {
  const requestPath = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
  const relativePath = requestPath === '/' ? 'wireframe.html' : requestPath.replace(/^\/+/, '');
  const requestedFile = path.resolve(__dirname, relativePath);
  const isInsideProject = requestedFile === path.resolve(__dirname) || requestedFile.startsWith(`${path.resolve(__dirname)}${path.sep}`);
  const filePath = isInsideProject ? requestedFile : appFile;
  const contentTypes = {'.html':'text/html; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg'};
  fs.readFile(filePath, (error, content) => {
    response.writeHead(error ? 404 : 200, { 'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream' });
    response.end(error ? 'Preview unavailable' : content);
  });
}).listen(5173, '127.0.0.1');
