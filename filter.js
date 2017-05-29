var readline = require('readline'),
    fs = require('fs');

var rl = readline.createInterface({
    input: fs.createReadStream('p6-zh-utf8.md'),
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line) {
    // console.log('> ' + line);
    if(line.indexOf('fld.') === 0){
      fs.appendFileSync("./fld.md", line.toString() + "\n");
    }
    // you won't see the last line here, as 
    // there is no \n any more
});