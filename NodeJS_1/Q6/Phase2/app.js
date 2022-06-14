const sum=require("./operations/sum").sum;
const sub=require("./operations/sub").sub;
const mul=require("./operations/mul").mul;
const div=require("./operations/div").div;


console.log(`Sum of 3 and 7 is ${sum(3,7)}`);
console.log(`Substraction of 3 and 7 is ${sub(3,7)}`)
console.log(`Division of 3 and 7 is ${div(3,7)}`)
console.log(`Multiplication of 3 and 7 is ${mul(3,7)}`)