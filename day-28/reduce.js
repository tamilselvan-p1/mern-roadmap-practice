//reduce

function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i])
    }
    return accumulator
}

const numbers = [1, 2, 3, 4]
const result = myReduce(numbers, function (total, num) {
    return total + num
}, 0);

console.log(result)