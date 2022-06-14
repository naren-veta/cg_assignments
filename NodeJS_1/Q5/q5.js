const fs = require("fs");
const file=process.argv[2];
const search='John';//Anything can be searched.

fs.readFile(file,{encoding:"utf-8"},(err,data)=>{
if(err){
    console.log(err.message)
}
let num_of_occ= data.match(new RegExp(search,"gi")).length;
console.log(`${search} occurred ${num_of_occ} times`);
})