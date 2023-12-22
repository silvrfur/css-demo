const http=require('http');//http module
const fs=require('fs'); //file system module
const fileContent=fs.readFileSync('vid60.html');

//http 200 means request was okay
const server= http.createServer((req,res)=>{ //request, response
    res.writeHead(200,{'content-type':'text/html'}); //http header contains metadeta, response to client is html text
    res.end(fileContent);
})

//80 is port number
//127.0.0.1- is ip address
//third argument is callback function, which is executed when server has started listening. syntax ()=>{*callback*}
//When a server is "listening" on a certain port, it means it is ready to accept and handle connections from clients
server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80");
})
//if port is 8000, explicitly mention in search 127.0.0.1:8000