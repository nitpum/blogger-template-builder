var express = require('express');
var jade = require('jade');
//var fs = require('fs');
/*
fs.readFile('./templates/base.jade', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
    var fn = jade.compile(data, {pretty:true});
    var html = fn({name:'Oleg'});
    console.log(html);
});
*/

var app = express();

/**
 * Configuration
 */
var config = require('./config');

var port = config.port || 1125;

app.locals.pretty = config.pretty || true;

app.set('view engine', 'pug');
app.set('views', 'src/');


app.get('*', function (req, res) {
    res.render('index');
});

// Listen
app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});