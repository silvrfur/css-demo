//import express
const express = require("express");
//to set path..
const path=require('path');
//make an app in express
const app = express();
//port 80 is default port
const port = 80;

//serving static files
app.use('/static',express.static('static'));

//set the template engine for pug(syntax from express website)
app.set('view engine','pug');
//set the views directory
app.set('views',path.join(__dirname,'views'));

// endpoint for pug, sytax copied from doc
app.get("/demo", (req, res) => {
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })
});

/*in Express.js, app.get is like telling your web application what to do when someone asks for a specific page on your website. It's like saying, "Hey, if someone goes to the main page of my website (/), do this particular thing." */
app.get("/about", (req, res) => {
    res.send("This is the about page of my express app");
});
app.post("/about", (req, res) => {
    res.send("This is the post of about page of my express app");
});

app.listen(port, () => {
    console.log(`App started successfully on port ${port}`)
})