// Function to reverse an array of random values
let arr=[3,6,9,1,4,-8,0,45,-101,5,8]
function reverseArray(arr){
    let len = arr.length%2==0? (arr.length/2):Math.round(arr.length/2);
    console.log(`arr.length ${arr.length} and len = ${len}`)
for (let i = 0; i <len; i++) {
    let temp=0;
    temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp; 
    }
console.log(arr);
}
reverseArray(arr)