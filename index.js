
var express = require('express');
var app = express();
var path = require('path');
express.static(root, [options])
app.use(express.static('public'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.htm'));
});

app.listen(8080);
