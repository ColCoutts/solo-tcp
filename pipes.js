const fs = require('fs');

rs = fs.createReadStream('./1_streams.md');
ws = fs.createWriteStream('stream-copy.md', {flags: 'a'});

rs.on('data', chunk => {
    ws.write(chunk);
});

rs.on('end', () => {
    ws.end();
});

rs.pipe(ws)
  .on('finish', () => {
    console.log('done piping!');
  });
