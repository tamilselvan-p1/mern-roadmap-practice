// Rules of FizzBuzz
// If a number splits evenly by 3 and 5, you say FizzBuzz.
// If a number splits evenly by 3 only, you say Fizz.
// If a number splits evenly by 5 only, you say Buzz.
// For any other number, you just say the number itself
for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizzbuzz")
    }
    else if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else {
        console.log(i)

    }
}