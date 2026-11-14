export function validateInput(input) {
    if (input === "" || input === null || input === undefined || input === 0) {
        throw new Error("Input cannot be empty");
    }
    return input;
}