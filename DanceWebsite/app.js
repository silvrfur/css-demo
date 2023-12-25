//import express, fs, path
const express=require('express');
const fs=require('fs');
const path=require('path');
//create app of express
const app=express();
const port=80;

//serve static files using express
app.use('/static',express.static('./static'))
app.use(express.urlencoded())

//set template of pug
app.set("view engine","pug")
app.set("views",path.join(__dirname,"views")) //read from directory

//endpoints
app.get('/',(req,res)=>{
    const params={'title':'AUXE'}
    res.status(200).render('home.pug',params);
})
app.get('/contact',(req,res)=>{
    const params={'title':'AUXE'}
    res.status(200).render('contact.pug',params);
})

//post
app.post('/contact',(req,res)=>{
    name=req.body.name; 
    phone=req.body.phone;
    email=req.body.email; 
    address=req.body.address; 
    desc=req.body.desc;
    

    let outputToWrite=`name: ${name},phone: ${phone}, email: ${email}, address: ${address}, desc: ${desc}`;
    fs.writeFileSync('output.txt',outputToWrite);
    res.status(200).render('home.pug');
})

//listen
app.listen(port,()=>{
    console.log(`Application stated successfully on ${port}`);
})