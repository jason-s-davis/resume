var express = require('express');
var app = express();


//app.set('env', 'production');

// For serving the static stuff
// which is all this app is right now
app.use(express.static(__dirname + '/public'));


app.get('/:file', function (req, res) {

    var fileName = req.params.file;

    res.sendFile(__dirname + '/public/' + fileName);

});

app.listen(5000);
