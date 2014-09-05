var express = require('express');
var app = express();


//app.set('env', 'production');

// For serving the static stuff
// which is all this app is right now
app.use(express.static(__dirname + '/public'));


app.get('/:file', function (req, res) {

    var options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
        'x-sent': true
        }
    };

    var fileName = req.params.file;

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status);
        }
        else {
            console.log('Sent: ' + fileName);    
        }
    });
});

app.listen(3000);
