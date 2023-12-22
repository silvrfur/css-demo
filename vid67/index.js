//import http and fs
const http=require('http');
const fs=require('fs');

//ip and port
const hostname='127.0.0.1';
const port=3000;

//save files in the variables
const eg=fs.readFileSync('eg.txt');
const path = require('path');
//dirname is global node variable
const home = fs.readFileSync(path.join(__dirname, 'index.html'));
const about = fs.readFileSync(path.join(__dirname, 'about.html'));
const services = fs.readFileSync(path.join(__dirname, 'services.html'));
const contact = fs.readFileSync(path.join(__dirname, 'contact.html'));

// const home=fs.readFileSync('index.html','utf-8'); //--> ./ that it is present in this directory only 
// console.log('Path to index.html:', home); // Log the current directory
// const about=fs.readFileSync('./about.html');
// const services=fs.readFileSync('./services.html');
// const contact=fs.readFileSync('./contact.html');

//create server
const server=http.createServer((req,res)=>{
    console.log(req.url);
    url=req.url;

    res.statusCode=200; //sever is ready
    res.setHeader('content-Type',"text/html");//meta-data

    //Note: for comparison, we use req.url's format 
    if(url=='/'){
        res.end(home);//end response //home html is served
    }
    //if the url is not home page, give about page as response
    else if(url=='/about'){
        res.end(about);
    }
    else if(url=='/services'){
        res.end(services);
    }
    else if(url=='/contact'){
        res.end(contact);
    }
    else{
        res.statusCode=404;
        res.end("<h1>404 not found</h1>");
    }
});

//listen server
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);//syntax of link of website
});