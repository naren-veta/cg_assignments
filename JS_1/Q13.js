/** Write three functions that compute the sum of the numbers in an array using:
for-loop
while-loop
do-while-loop
*/

let a= [3,4,6,8,10];

function addForLoop(arr){
let sum=0;
for (let i = 0; i < arr.length; i++) {   
    sum+=arr[i] }
return sum;
}
console.log(addForLoop(a));

function addWhileLoop(arr){
    let sum=0;
    let len=0;
    while(len<arr.length){
        sum+=arr[len];
        len++;       
    }
    return sum;
}

console.log(addWhileLoop(a))


function addDoWhileLoop(arr){
    let sum=0;
    let len=0;
    do{
        sum+=arr[len];
        len++;       
    }while(len<arr.length)
    return sum;
}

console.log(addDoWhileLoop(a))