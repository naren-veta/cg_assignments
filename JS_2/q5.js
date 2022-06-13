/**Q5. "pure" recursive version of find  */

let arr = [1, 3, 5,,9,6,7, 4, 2];

function isEven(num) {
    return (num % 2 == 0);
}
function find(arr, isEven) {
    if (isEven(arr[0])) {
        return arr[0];
    }
    else {
       return find(arr.slice(1), isEven)
    }
}

console.log(find(arr, isEven));