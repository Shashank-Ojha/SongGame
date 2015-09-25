var express = require('express');
var app = express();
var http = require('http').Server(app);

app.set('port', (process.env.PORT || 3000));

app.use("/", express.static(__dirname + "/public/"));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/hindi.html');
});

http.listen(process.env.PORT || 3000, function(){
    console.log('listening on *:3000');
});