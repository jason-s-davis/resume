/**
 * Module dependencies.
 */

var express = require('express');
var compress = require('compression');
var _ = require('lodash');
var connectAssets = require('connect-assets');
var path = require('path');


var hour = 3600000;
var day = hour * 24;
var week = day * 7;


/**
 * Server setup.
 */

var app = express();

app.set('port', (process.env.PORT || 5000));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compress());
app.use(connectAssets({
  paths: [path.join(__dirname, 'public/css'), path.join(__dirname, 'public/js')],
  helperContext: app.locals
}));


app.use(express.static(path.join(__dirname, 'public'), { maxAge: week }));


app.get('/', function(req, res) {
    res.render('home', {
        title: 'Home'
    });
});

// app.get('/stuff', function(req, res) {
//     res.render('stuff', {
//         title: 'Stuff'
//     });
// });


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
