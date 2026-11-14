export function capitalize(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    return str.toUpperCase();
}

export function reverse(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }
    return str.split('').reverse().join('');
}

