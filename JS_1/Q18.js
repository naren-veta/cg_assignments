/** Translate text to Pig Latin. "The quick brown fox" becomes "Hetay uickqay rownbay oxfay"*/

let str = "the quick brown fox";
console.log(str)
let format_str= str.split(" ").map((el)=>{
    let sub_arr = el.split("");
    sub_arr.push(sub_arr.shift());
    el=sub_arr.join("");
    return el+"ay";
}).join(" ");
console.log(format_str);