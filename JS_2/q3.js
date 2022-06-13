
/** Q3. Func "find" takes an array and a function and returns the first element that passes the function*/

let arr=[1,3,5,4,2];

function isEven(num){
    return (num%2==0);
}
function find(arr,isEven){
for (let i = 0; i < arr.length; i++) {
    if(isEven(arr[i])){
        return arr[i]
    }
    
}    
}

console.log(find(arr,isEven));