// const fs = require('fs')

// console.log("1")
// // const fileContent = fs.readFileSync("./datafile.txt","utf-8");
// // console.log(fileContent)
// fs.readFile("./datafile.txt","utf-8",(err, data)=>{
//     console.log(data)
// });
// console.log("2")
globalThis=25;

const  add = require('./module1')

console.log("add ", add(1,2))
const  add2 = require('./module1')


console.log("add2 ", add2(3,4))