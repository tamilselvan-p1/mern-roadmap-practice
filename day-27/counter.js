//counter with closures

function counter(){
    var count = 0;
    //console.log(a); the inner function var is not accessible in the outer function

    function increase(){
       // var a = "counter"
       count++
    console.log(count);
    }
    return increase;
}
let counter1 =counter();
// the outer function remebers the count
counter1();
counter1();
counter1();