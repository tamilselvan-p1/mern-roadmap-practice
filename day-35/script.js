const form = document.querySelector("#contactForm")
const name = document.querySelector("#username")
const email = document.querySelector("#email")
const count = document.querySelector("#count")

const message = document.querySelector("#message")
form.addEventListener("submit",(e)=>{e.preventDefault();
    console.log("Form Submited");
    
    console.log("Name : "+name.value);
    console.log("Email : "+email.value);
    console.log("Message : "+message.value);
    form.reset();
})

message.addEventListener("input",()=>{count.textContent = message.value.length})