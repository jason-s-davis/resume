var express = require('express');
var app = express();


app.set('env', 'production');

// For serving the static stuff
// which is all this app is right now
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {

    var options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
        'x-sent': true
        }
    };


    res.sendFile('index.html', options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status);
        }
        else {
            console.log('Sent index.html');    
        }
    });
});

app.listen(3000);
