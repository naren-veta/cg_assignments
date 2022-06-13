/** Q6. Replicate "map" functionality with pure recursion*/
function square(x){
    return x*x;
}

let arr= [1,2,3,4,5]

function map(arr,func){

    if(arr[0] != undefined)
    
    {
        if(arr[1] != undefined )
        {
            
            return [func(arr[0])].concat(map(arr.slice(1), func))
        }
        else
        {
            return func(arr[0])
        }
    }
    else return "List is empty";
   
}
let sqrs= map(arr,square)
console.log(sqrs);
console.log(map(sqrs,Math.sqrt));