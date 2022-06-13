
/** Q1. Take two functions f1 , f2 and a value. Return f1(f2(value))*/

function square(x){
    return x*x;
}
function double (x){
    return x*2;
}
function composedValue(square,double,num){
    return square(double(num))
}

console.log(composedValue(square,double,5));