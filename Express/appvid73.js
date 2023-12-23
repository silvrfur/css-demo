//import fs
const fs=require('fs');
//import express
const express = require("express");
//to set path..
const path=require('path');
//make an app in express
const app = express();
//port 80 is default port
const port = 80;


//EXPRESS CONFIGS:
//serving static files
app.use('/static',express.static('static'));
app.use(express.urlencoded())

//PUG CONFIGS:
//set the template engine for pug(syntax from express website)
app.set('view engine','pug');
//set the views directory
app.set('views',path.join(__dirname,'views'));


//ENDPOINTS
app.get('/',(req,res)=>{
    const con="This is the content"
    const params={'title':'Using pug','content':con}
    res.status(200).render('index.pug',params)
})
app.post('/',(req,res)=>{
    // console.log(req.body);
    name=req.body.name; 
    age=req.body.age; //body.age comes from value of name provided in the input tag
    gender=req.body.gender; 
    address=req.body.address; 
    more=req.body.more;

    let outputToWrite=`the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her/them: ${more}`
    fs.writeFileSync('output.txt',outputToWrite);
    const params={message:"Your form has been submitted successfully"}
    res.status(200).render('index.pug',params)
})

//START THE SERVER
app.listen(port, () => {
    console.log(`App started successfully on port ${port}`)
})