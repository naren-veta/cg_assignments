const http = require("http");
const options = {
    hostname: "localhost",
    port: 8080,
    path:"/",
    method: "GET"
}

const req = http.request(options, (res) => {
    resBody='';
    res.setEncoding('utf-8');
    res.on('data', (chunk) => {
        resBody+=chunk;
    })
    
    
    res.on('end', () => {
        response= JSON.parse(resBody)
        // console.log(response)
        
        let server_time= new Date(response.date).getTime();
        let time_offset = response.time_offset*6000;
        let total_mill_sec= server_time+time_offset;
        let date = new Date(total_mill_sec)   
        console.log(`The Server time is ${date.toLocaleString()}`)
    });


})

req.on('error', (e) => `Request error ${e.message}`);
req.end();