export default function greet(name) {
    if (typeof name !== 'string') {
        throw new Error('Input must be a string');
    }
    return `Hello, ${name}!`;
}