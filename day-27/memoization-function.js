function memoize(fn) {
    const cache = {};
    return function (n) {
        if (n in cache) {
            console.log("getting from cache");
            return cache[n];

        }
        console.log("calculating");
        const result = fn(n);

        cache[n] = result;
        return result;

    }
}
function square(n) {
    return n * n;

}

const memoizedsquare = memoize(square)

console.log(memoizedsquare(5));
console.log(memoizedsquare(5));