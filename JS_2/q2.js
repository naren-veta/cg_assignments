
/** Q2. Compose func takes two functions f1 , f2 and returns a new function when called on a value return f1(f2(value))*/

function square(x){
    return x*x;
}
function double (x){
    return x*2;
}

function compose(square,double){
    return (num)=>{
     return   square(double(num))
    }
}
f1=compose(square,double);

f2=compose(double,square)
console.log(f1(5));
console.log(f1(10));
console.log(f2(5));
console.log(f2(10));
