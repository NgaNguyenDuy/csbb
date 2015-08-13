var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
require('colors');


io.on('connection', function(client) {
    console.log('A client connected...'.bold.yellow);


    client.on('send', function(data) {

        io.sockets.emit('receive', data);
    });
});


server.listen('9191', function() {
	console.log('Server was running at port 9191'.bold.red);
});