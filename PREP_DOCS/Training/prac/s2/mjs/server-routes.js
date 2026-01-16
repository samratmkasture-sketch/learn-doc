const http = require('http')
var finalhandler = require('finalhandler')
var morgan = require('morgan');
const logger = morgan(':date[iso] :method :url :status :res[content-length] - :response-time ms')

let users = []
const server = http.createServer((req,res)=>{
    // req.method
    var done = finalhandler(req, res)
    logger(req, res, function (err) {
        if (err) return done(err)
    if(req.method =="GET" && req.url=="/"){
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Hello World!!")
    }else if(req.method =="POST" && req.url=="/"){
        console.log("POST ")
        var jsonString = '';

        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {
            console.log(JSON.parse(jsonString));
            users.push(JSON.parse(jsonString))
            res.end(JSON.stringify(users))
        });
        
    }else if(req.method =="DELETE" && req.url=="/"){
        var jsonString = '';

        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {
           let {name}=  JSON.parse(jsonString);
           users =  users.filter((obj)=>obj.name!=name)
            res.end(JSON.stringify(users))
        }); 
    }else if(req.method =="PATCH" && req.url=="/"){
        var jsonString = '';
        req.on('data', function (data) {
            jsonString += data;
        });

        req.on('end', function () {
           let body=  JSON.parse(jsonString);
            users =  users.map((obj,index)=>{
                if(obj.name==body.name){
                    return body
                }
                return obj
            });
            res.end(JSON.stringify(users))
        }); 
    }
    
})  
})

server.listen(3000,()=>{
    console.log("Server starts listning on port 3000")
})