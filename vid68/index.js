console.log("This is index.js");

const calculateSum = require("./mod");
//import whatever is exported
const sum=require("./mod"); 

//when only function was exported
// console.log(calculateSum([2,3,4,5]));

//when object is exported
console.log(sum.sum([2,3,4,5]));
//note: outer sum is varible of index.js inner sum is key of caculatesum function