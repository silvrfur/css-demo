console.log("This is mod.js");

function calculateSum(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum;
}

//we have to export functions or objects for oth to use it
// module.exports=calculateSum;
module.exports={
    sum:calculateSum,
    name:"Shruti",
    repo:"learning node.js"
}

//or
// module.exports.name="james";