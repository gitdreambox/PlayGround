var fs = require('fs');
var zlib = require('zlib');

var inputFile = __dirname + '/in_data.txt',
    outputFile = __dirname + '/copy_data.txt',
    zipFile = __dirname + '/in_data.txt.gz';

var readable = fs.createReadStream(inputFile);
var writable = fs.createWriteStream(outputFile);
var compressed = fs.createWriteStream(zipFile);

var gzip = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);