const http = require("http");
const fs=require("fs");
const port = 5000;
const server = http.createServer((req,res)=>{
    fs.readFile("index.html",{encoding:"utf-8"},(err,data)=>{
        res.write(data);
        res.end();
    })
}).listen(port,()=>{
    console.log("The server is up")
})