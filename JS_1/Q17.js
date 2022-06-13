/** Q17. Shift k elements in an array without creating copies */

let arr=[1,2,3,4,5,6];

let num_shifts=5;

for(let i=0;i<num_shifts;i++){
    arr.push(arr.shift());
}

console.log(arr)