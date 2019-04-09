const fs = require('fs');

// const rstream = fs.createReadStream('./1_streams.md');
// const wstream = fs.createWriteStream('./streams-copy.md');
// const array = [
//     'whats your name',
//     'favorite color',
//     'best joke'
// ];

// const answers = [];


// function ask(i) {
//     process.stdout.write(`\n\n\n ${array[i]}`);
//     process.stdout.write(' > ');
// }

// process.stdin.on('data', (data) => {
//     answers.push(data);
//     if(answers.length < array.length) {
//         ask(answers.length);
//     }
//     else {
//         process.exit();
//     }
// });

// process.on('exit', () => {
//     process.stdin.write('\n\n\n\n');
//     process.stdout.write(`Sounds good ${answers[0]}, you like ${answers[1]}? ${answers[2]} really? what a joke`);
//     process.stdin.write('\n\n\n\n');
// });

// ask(0);

// const readStream = fs.createReadStream('./2_tcp.md', { highWaterMark: 50 });
const writeStream = fs.createWriteStream('newCoolThing.md', {flags: 'a'});
const newWriteStream = fs.createWriteStream('newCoolThing.json', {flags: 'a'});

// readStream.on('data', chunk => {
//     console.log(chunk.toString());
//     process.stdin.write(data);
//     readStream.emit('data', data);
//     readStream.emit('end', chunk);
// });

// readStream.on('end', (chunk) => {
//     writeStream.write(chunk.toString());
// });

writeStream.write('YOU ALL HATE ME ALMOST AS MUCH AS I HATE MYSELF');
console.log('shit was logged')
writeStream.write('NEW SHIT');
console.log('new shit was logged')
// writeStream.write('NEWER SHIT');
// writeStream.write('NEWEST SHIT');
newWriteStream.write('\n\t');
newWriteStream.write('const name = {');
newWriteStream.write('\n\t');
newWriteStream.write('"name": "spot",');
newWriteStream.write('\n\t');
newWriteStream.write('"legs": 4');
newWriteStream.write('\n\t');
newWriteStream.write('};');
writeStream.end();
newWriteStream.end();
