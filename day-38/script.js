const loadBtn = document.getElementById("loadBtn");
const message = document.getElementById("message");
const userList = document.getElementById("userList");

loadBtn.addEventListener("click",async () => {
    try {
        message.textContent = "Loading..."
        loadBtn.disabled = true;
        const responce = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!responce.ok){
           throw new Error("Failed To Fetch")
        }
        const users = await responce.json();
        users.forEach(element => {
            const li = document.createElement('li')
            const btn = document.createElement('button')
            li.textContent = "Name : "+ element.name + ", Email : "+element.email + ", Username : "+element.username
            btn.textContent = "clear"
            btn.addEventListener("click",()=>{li.remove(),btn.remove()})
            userList.append(li,btn)
            
        });
        message.textContent = "Users loaded successfully!"
        loadBtn.disabled = false;
    } catch (error) {
        message.textContent = "Something Went Wrong!"
        console.log(error.message)
    }
    
})