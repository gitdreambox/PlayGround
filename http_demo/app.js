var http = require('http'),
    fs = require('fs'),
    idxFilePath = __dirname + '/index.html';

http.createServer(function (req, res) {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(idxFilePath).pipe(res);
    } else if (req.url === '/api') {
        var obj = { firstname: 'Simen', lastname: 'Li' };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404);
        res.end('<h1>404 Not Found<h1>');
    }

}).listen(3456, '127.0.0.1');