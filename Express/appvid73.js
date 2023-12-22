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

//START THE SERVER
app.listen(port, () => {
    console.log(`App started successfully on port ${port}`)
})