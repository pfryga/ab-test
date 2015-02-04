'use strict';

var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/partials'
}));

app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.send();
});

app.listen(3000);
console.log('Express server started on port 3000');
