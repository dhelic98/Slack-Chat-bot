var express = require('express');
var app = express();
var server = require('http').createServer(app);
var path = require('path');


app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.post('/BSec/methods/talk/:message', function (req, res) {

});

app.listen(4200);