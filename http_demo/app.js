var http = require('http'),
    fs = require('fs'),
    idxFilePath = __dirname + '/index.html';

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(idxFilePath).pipe(res);
}).listen(3456, '127.0.0.1');