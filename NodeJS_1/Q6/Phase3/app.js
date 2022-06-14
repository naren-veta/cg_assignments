const moment = require("moment");

const sum=require("../Phase2/operations/sum").sum
const sub=require("../Phase2//operations/sub").sub;
const mul=require("../Phase2//operations/mul").mul;
const div=require("../Phase2//operations/div").div;
var a = moment().format('dddd, MMMM Do YYYY, hh:mm:ss a');
console.log(a)

console.log(`Sum of 3 and 7 is ${sum(3,7)}`);
console.log(`Substraction of 3 and 7 is ${sub(3,7)}`)
console.log(`Division of 3 and 7 is ${div(3,7)}`)
console.log(`Multiplication of 3 and 7 is ${mul(3,7)}`)