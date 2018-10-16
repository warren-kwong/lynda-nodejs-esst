var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function(ws) {
  ws.on('message', message => {
    if (message === 'exit') {
      ws.close();
    } else {
      // wss.clients is an array of all connected clients
      wss.clients.forEach(client => {
        client.send(message);
      });
    }
  });

  ws.send('Welcome to cyber chat');
});
