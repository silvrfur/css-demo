// sysnchronous or blocking- line by line execusion
// asynchrounous or non-blocking- callbacks will fire once task is done

const fs=require("fs"); //fs module
//callback of this async will keep going, this the fun reads the file, other lines will get executed
//jab iska kaam hojaye tab print karega(call back fire karega), tab tak neeche wali lines executes hote rahengi
let text=fs.readFile("eg.txt","utf-8",(err,data)=>{
    console.log(err,data);
});

console.log("what's poppin'");