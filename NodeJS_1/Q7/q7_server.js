var http = require("http");
var port = 8080;
var server = http.createServer((req,res)=>{
    let date=new Date('2022 Jun 13 12:30:00 PM GMT-0800'); 
    let time_offset = date.getTimezoneOffset();

    res.end(JSON.stringify({date,time_offset}))
}).listen(port,()=> console.log("Sucess! I am listening on port ",port));