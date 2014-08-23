how-to-socket.io-stream
=======================

Just a simple how to for socket.io-stream. get it run in seconds.


## Install

just clone repo into a dir

```
$git clone git@github.com:alexserver/how-to-socket.io-stream.git
```

then, within repo directory, install packages (socket.io, socket.io-stream, socket.io-client)
```
$npm install
```

```client/build.js``` is already compiled, however, if you need to build it again, you'll need to have [browserify](http://browserify.org) installed. (try with sudo if npm doesn't let you install globally)

```
$npm install -g browserify
```

This project has two parts: server and client.
Server receives stream and saves into ```uploads/``` directory. (it has 755 permissions, but make sure you can write in it).

#### To Start the server
```
$node server
```

#### To start the client
I use [http-server](https://www.npmjs.org/package/http-server) as a global to start a web server to serve just static content on any desired directory.

To install http-server globally:
```
$npm install -g http-server
```

Then, go to client directory and start http web server:
```
$cd client/
$http-server
```

After this, open your browser at the address http-server will tell you (usually is http://localhost:8080 )
Upload a file, and you're done.

Congrats. You have made it!
