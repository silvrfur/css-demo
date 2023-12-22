// console.log("Hello World");

//code copied from node js website, about sections
//creats a server in node js
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //make it text/html
  res.setHeader('Content-Type', 'text/html');
  //prints hello world on screen
  res.end('Hello World');

  // lets get any html project here..
//   res.end(`put html code here`);

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});