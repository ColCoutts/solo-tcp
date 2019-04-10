const net = require('net');

const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

const client = net.createConnection(3000, '127.0.0.1', () => {
    console.log('i am connected client side');
    rl.prompt();
    rl.on('line', line => {
        client.write(line);
        rl.prompt();
    });
});

client.on('data', data => {
    console.log(`\n${data.toString()}`);
    rl.prompt();
});
