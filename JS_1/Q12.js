/** Longest token in a given string that do not contain "a" OR "b" */

// let str = "ababcdababefgababhiab" // should result in efg
let str= "aba";
let replaced_str=str.replaceAll('a',' ').replaceAll('b',' ').split(" ");
let req_arr= replaced_str.filter((el)=> {
    if(el.length>0){
        return el;
    }
})
console.log(req_arr.length>0?req_arr.reduce((pv,cv)=> pv.length>cv.length?pv:cv):"");
