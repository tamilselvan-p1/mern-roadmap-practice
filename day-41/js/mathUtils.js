export function square(n) {
    if (typeof n !== 'number') {
        throw new Error('Input must be a number');
    }
    return n * n;
}

export function cube(n) {
    if (typeof n !== 'number') {
        throw new Error('Input must be a number');
    }
    return n * n * n;
}