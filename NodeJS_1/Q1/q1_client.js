const http = require("http");
const msg = JSON.stringify({ "name": "Naren" })
const options = {
    hostname: "localhost",
    port: 8080,
    path:"/",
    method: "POST",
    headers: { "Content-Type": "application/json" }
}

const req = http.request(options, (res) => {
    resBody='';
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf-8');

    res.on('data', (chunk) => {
        resBody+=chunk;
    })

    res.on('end', () => console.log(resBody))
})

req.on('error', (e) => `Request error ${e.message}`);

req.write(msg);
req.end();


// console.log(req);