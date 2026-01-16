const http = require('node:http')
const url = require('node:url');

const server = http.createServer((req,res)=>{
    const protocol = req.protocol; 
    const host = req.hostname; 
    const url = req.originalUrl; 
    const port = process.env.PORT || PORT; 
    // url.port#

    const fullUrl = `${protocol}://${host}:${port}${url}` 
    console.log("fullUrl => " , fullUrl)
    const myURL =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash'); 
  myURL.pathname = '/a/b/c';
  myURL.search = '?d=e';
  myURL.hash = '#fgh'; 

    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("Hello World!!")
})

server.listen(3000,()=>{
    console.log("Server starts listning on port 3000")
})