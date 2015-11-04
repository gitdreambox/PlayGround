'use strict';

const express = require('express'),
      app = express(),
      path = require('path'),
      hogan = require('hogan-express');

app.set('views', path.join(__dirname, 'views'));
app.engine('html', hogan);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));    // ./public

require('./routes/routes.js')(express, app);

app.listen(3000, () => {
    console.log('ChatCat is working on port 3000.');
});

