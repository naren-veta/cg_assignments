const fs=require("fs");
const content= process.argv[2];
fs.writeFile("text.txt",content,{flag:'w+'},(err)=>{
    if(err){
        console.log("Error occured")
    }
    console.log("Content written to text.txt file");
})