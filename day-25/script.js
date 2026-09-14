//function declarations
function add(a,b)
{
    return a+b;
}
console.log(add(2,3));


//function expression
const add2 = function (c,d){
    return c+d;
} 
console.log(add2(2,2));

//Arrow Function
const add3 = (e,f) => e+f;
console.log(add3(5,5))