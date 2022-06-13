//print list of first 100 fibonacci numbers
function print100FB(){
let first_fb=1;
let second_fb=1;
let count=2;
while(count<=100){
    console.log(first_fb);
    console.log(second_fb);
    count++;
    first_fb=first_fb+second_fb;
    second_fb=first_fb+second_fb;
}}
print100FB();
