var io = require('socket.io-client');
var ss = require('socket.io-stream');

var socket = io.connect('http://localhost:3001');

//using jquery just for simplicity
(function($){
  //when file is triggered
  $('#file').change(function(e) {
    var file = e.target.files[0];
    var stream = ss.createStream();

    // upload a file to the server.
    ss(socket).emit('upload', stream, {size: file.size, name: file.name});
    ss.createBlobReadStream(file).
      on("end", function(){
        console.log("file uploaded !");
      }).
      pipe(stream);
  });
})(jQuery);
