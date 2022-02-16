process.env.UV_THREADPOOL_SIZE = 4

const http = require('http');
const bcrypt = require('bcrypt');

//Default = 3600 req/sec

//UV_THREADPOOL_SIZE - 1 = 1100 req/sec
//UV_THREADPOOL_SIZE - 2 = 2000 req/sec
//UV_THREADPOOL_SIZE - 3 = 3000 req/sec
//UV_THREADPOOL_SIZE - 4 = 3600 req/sec

http.createServer((req,res)=>{

  bcrypt.hash('jg',2).then(hash=>{
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.write(hash);
    res.end();
  })
}).listen(1337);