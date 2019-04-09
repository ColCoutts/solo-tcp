// const http = require('http');

// const server = http.createServer((req, res) => {
//     console.log('request was made ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('Hey There All');
// });

// server.listen(3000, '127.0.0.1');
// console.log('yo now listening to port 3000');

const net = require('net');
//every client is a socket
// const server = net.createServer(client => {
//     console.log('Youre in!');
//     client.on('data', data => {
//         console.log(data.toString());
//     })
// });

const server = net.createServer(client => {
    console.log('Youre in!');

    // client.pipe(client);
    client.on('data', data => {
        client.write(`ECHO FROM SERVER: ${data}`);
    });
});

server.listen(3000);
