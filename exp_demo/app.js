var express = require('express'),
    port = process.env.PORT || 3000,
    app = express();

app.get('/', function (req, res) {
    res.send('<html><head></head><body><h1>Hello World!</h1></body>');
});

app.get('/api', function (req, res) {
    res.json({ firstname: 'Simen', lastname: 'Li' });
});

app.get('/person/:id', function (req, res) {
    res.send(`<html><head></head><body><h1>person: ${req.params.id}</h1></body>`);
});

app.get('/person/:room/:id', function (req, res) {
    res.send(`<html><head></head><body><h1>
              person: ${req.params.id} in ${req.params.room}</h1></body>`);
});

app.listen(port);