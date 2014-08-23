/**
How to socket.io-stream
*
*/

var io = require("socket.io").listen(3001),
    ss = require("socket.io-stream"),
    path = require('path'),
    fs = require("fs");

io.on('connection', function(socket) {
  console.log("listening socket.io on 3001");
  //when socket is connected, listen to event upload
  ss(socket).on('upload', function(stream, data) {
    var filename = path.basename(data.name),
        directory = "uploads/";

    console.log("uploading file >> ", directory + filename);
    stream.pipe(fs.createWriteStream(directory + filename));
  });
});