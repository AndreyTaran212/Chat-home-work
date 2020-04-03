const path = require('path');
const { Server } = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');
const app = express();
const server = new Server(app);
const io = socketIO(server);
const router = require('./router');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
/*
* static files
* */
app.use(express.static(path.join(__dirname, '../uploads')));
/*
* http routing
* */
app.use('/api', router);
/*
* error handler
* */
app.use((err, req, res, next) => {
  res.status(500).send(err);
});

/*
* WebSocket
* */
const chat = io.of('/chat').on('connection', function (socket) {
  chat.on('message', msg => {

  });
  chat.on('disconnect', reason => {

  });
});
/*
* start server
* */
server.listen(PORT, () =>
  console.log(`Example app listening on port ${ PORT }!`),
);






