//var vs let in a loop 
for(var i = 0;i < 3;i++)
{
 setTimeout(()=>console.log("var:",i),0);
}

for(let j = 0; j < 3; j++)
{
    setTimeout(()=>console.log("let:",j),0);
}
// on settimeout var runs the loop first and var i =3;



console.log(x);
var x = 5;
//undefined because of hoisting, var is hoisted to the top of the scope but not initialized.



console.log(y);
let y = 10;
//ReferenceError: Cannot access 'y' before initialization, let is hoisted but not initialized, it is the temporal dead zone.



function testscope(){
    if(true){
        var a = "i am var";
        let b = "i am let";
    }
    console.log(a); // accessible
    console.log(b); // ReferenceError: b is not defined
}
 testscope();
//var is function scoped, let is block scoped



sayhi();
function sayhi(){
    console.log("HI!")
}
// function declaration is hoisted, so it can be called before its definition.


