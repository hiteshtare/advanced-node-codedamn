const http = require('http');
const bcrypt = require('bcrypt');

//Default = 3600 req/sec

http.createServer((req,res)=>{

  bcrypt.hash('jg',2).then(hash=>{
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.write(hash);
    res.end();
  })
}).listen(1337);