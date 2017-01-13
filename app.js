/**
 * Created by Totep on 1/11/17.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static('./'));

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '/index.html'));
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Working on port: ', port);
});