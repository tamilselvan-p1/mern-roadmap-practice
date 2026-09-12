let num = 99;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }

    }

}
if (isPrime) {
    console.log(num + " is Prime")
}
else {
    console.log(num + " is Not Prime")
}