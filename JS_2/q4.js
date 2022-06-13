/** Q4. Replicate "map" functionality*/
function square(x){
    return x*x;
}

let arr= [1,2,3,4,5]
function map(arr,func){
let temp=[];
for (let i = 0; i < arr.length; i++) {
    temp.push(func(arr[i]));
    
}
return temp;

}
let sqrs= map(arr,square)
console.log(sqrs);
console.log(map(sqrs,Math.sqrt));