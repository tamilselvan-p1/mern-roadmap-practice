class AgeValidationError extends Error {
    constructor(message) {
        super(message); {
            this.name = "Age Validation Error"
        }
    }
}

class PasswordError extends Error {
    constructor(message) {
        super(message); {
            this.name = "Password Error"
        }
    }
}

const age = document.getElementById("age");
const password = document.getElementById("password")
const message = document.getElementById("message")
const Form = document.getElementById("Form")

function validate(age, password) {
    if (age.trim() === "") {
        throw new AgeValidationError("Enter The Age");

    }
    if (age < 18) {
        throw new AgeValidationError("Age Must Be 18 Or Above");

    }
    if (password.trim() === "") {
        throw new PasswordError("Enter The Password");

    }
    if (password.length < 8) {
        throw new PasswordError("Password should be 8 characters or more");

    }
}

Form.addEventListener("submit", (element) => {
    element.preventDefault();
    try {
        validate(age.value, password.value)
        message.textContent = "Registration Successful"
        message.style.color = "green"
    } catch (error) {
        if (error instanceof AgeValidationError) {
            message.textContent = error.message;
        }
        if (error instanceof PasswordError) {
            message.textContent = error.message;
        }
        message.style.color = "red"
    }
    finally {

        console.log("Validation Completed")
    }

})


