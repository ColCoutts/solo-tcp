const net = require('net');

const server = net.createServer(client => {
    console.log('Youre in!');

    client.on('data', data => {
        client.write(`ECHO FROM SERVER: ${data}`);
    });
});

server.listen(3000);
