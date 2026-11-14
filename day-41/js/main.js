import {
    capitalize,
    reverse
} from "./stringUtils.js";

import {
    square,
    cube
} from "./mathUtils.js";

import greet from "./greet.js";

import {
    validateInput as vi
} from "./validation.js";
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const textInput = document.getElementById("textInput");
const nameInput = document.getElementById("nameInput");
const result = document.getElementById("result");

const capitalizeBtn = document.getElementById("capitalizeBtn");
const reverseBtn = document.getElementById("reverseBtn");
const squareBtn = document.getElementById("squareBtn");
const cubeBtn = document.getElementById("cubeBtn");
const greetBtn = document.getElementById("greetBtn");

function calculate(operation) {

    const a = Number(num1.value);
    const b = Number(num2.value);

    try {

        const answer = vi(operation(a, b));
        result.textContent = `Result: ${answer}`;

    } catch (error) {

        result.textContent = error.message;

    }
}

function handleTextOperation(operation) {

    const text = textInput.value;

    try {

        const answer = vi(operation(text));

        result.textContent = `Result: ${answer}`;

    } catch (error) {

        result.textContent = error.message;

    }
}

squareBtn.addEventListener("click", () => {
    calculate(square);
});

cubeBtn.addEventListener("click", () => {
    calculate(cube);
});

capitalizeBtn.addEventListener("click", () => {
    handleTextOperation(capitalize);
});

reverseBtn.addEventListener("click", () => {
    handleTextOperation(reverse);
}); 

greetBtn.addEventListener("click", () => {
    const name = nameInput.value;
    try {
        const greeting = greet(vi(name));
        result.textContent = greeting;
    } catch (error) {
        result.textContent = error.message;
    }
}); 