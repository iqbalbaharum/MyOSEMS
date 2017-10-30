var express = require('express'),
    ejs = require('ejs');

var port = 3000;

var app = express();

// view
app.use(express.static(__dirname + "/public"));
app.set('view engine', 'ejs');

app.use(require('./app/routes'));

app.listen(port);
