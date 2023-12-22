//read and write to any file using node module
const fs=require("fs"); //fs module
let text=fs.readFileSync("eg.txt","utf-8");
console.log(text);

//replace 
text=text.replace("Hello World","Hello Shruti");
console.log("Replacement is done"); //but not in original file, the value after replacement is stored in text vari

//write into new file
fs.writeFileSync("shruti.txt",text);
