const fs=require("fs");
const file= process.argv[2];
const content= process.argv[3];
fs.writeFile(file,content,{flag:'w+'},(err)=>{
    if(err){
        console.log("Error occured")
    }
    console.log("Content written to"+file+"file with following :- \n");
    fs.readFile(file,{encoding:'utf-8'},(err,data)=>{
        console.log(data)
    })

})