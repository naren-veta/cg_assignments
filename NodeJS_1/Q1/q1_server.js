/**Q1. Write a node program that execute a connectin to server and returns success message */


var http = require("http");
var port = 8080;
var server = http.createServer(async(req,res)=>{
    const buffers=[];
    for await(const chunk of req)
    {
        buffers.push(chunk)
    }
    const data= Buffer.concat(buffers).toString();
    

    res.writeHead(200,{"Content-Type":"text/plain"});
    // console.log(req)
    res.end("Welcome to my server ~~  "+JSON.parse(data).name)
}).listen(port,()=> console.log("Sucess! I am listening on port ",port));