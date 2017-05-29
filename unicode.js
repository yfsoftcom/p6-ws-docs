var fs = require('fs');

fs.readFile('./p6-zh-cn.md', 'utf-8', function(err, content){
  
  utfContent = unescape(content.replace(/\\u/g, '%u'));
  fs.writeFile('./p6-zh-cn1.md', utfContent, function(err){
        if(err) throw err;
        console.log('has finished');
    });
})