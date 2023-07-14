const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(8000);
const io = socketio(expressServer);

io.on('connection', (socket) => {
   socket.on("received", (msg) => {
      io.emit("setmsg", msg);
   })
});