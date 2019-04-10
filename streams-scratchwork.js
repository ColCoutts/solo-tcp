const fs = require('fs');

const writeStream = fs.createWriteStream('newCoolThing.md', {flags: 'a'});
const newWriteStream = fs.createWriteStream('newCoolThing.json', {flags: 'a'});

writeStream.write('YOU STOP THIS');
console.log('shit was logged')
writeStream.write('NEW SHIT');
console.log('new shit was logged')
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
