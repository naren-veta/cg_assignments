/** Create an array containing 100 random numbers 
 * a) Print the largest
 * b) Print the smallest
 * c)Print which count is high - even count or odd count
 * d) Print the Sum and Avg value
 */

let arr=[]; 

for (let index = 0; index < 100; index++) {
    arr[index] = Math.floor(Math.random()*1000)    
}
console.log(arr)
let evens=0;
let odds=0;
arr.forEach((el)=> el%2==0?evens++:odds++);

evens>odds? console.log(`Evens are high (Total ${evens})`): console.log(`Odds are high (Total ${odds})`);

let largest =  arr.reduce((pv,cv)=> pv>cv?pv:cv);
let smallest =  arr.reduce((pv,cv)=> pv<cv?pv:cv);
let sum = arr.reduce((pv,cv)=>pv+=cv)
let avg = sum/arr.length
console.log(`Largest is ${largest} and Smallest is ${smallest}`);
console.log(`Sum is ${sum} and Average is ${avg}`)
