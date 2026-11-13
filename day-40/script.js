const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const phoneInput = document.getElementById("phone");
const darkmode = document.getElementById("darkmode");

const clearBtn = document.getElementById("clearBtn");
const message = document.getElementById("message");
const usersList = document.getElementById("usersList");

var savedUser = localStorage.getItem("user");
if (savedUser) {
    try {
        savedUser = JSON.parse(savedUser);
    } catch (error) {
        console.error("Error parsing saved user data:", error);
        savedUser = [];
    }}
const users = savedUser

// Track which user is currently being edited (null means creating a new user)
let currentEditElement = null;

// Function to render the list of users
function renderUsers() {
    usersList.innerHTML = ""; // Clear list before rebuilding
    
    users.forEach(element => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        
        li.textContent = `Name: ${element.name} | Email: ${element.email} `;
        btn.textContent = "Edit"; // Changed text to "Edit" for better UX
        
        // Clicking Edit populates the form with this user's data
        btn.addEventListener("click", () => {
            currentEditElement = element; // Track that we are editing this specific user object
            
            nameInput.value = element.name;
            emailInput.value = element.email;
            ageInput.value = element.age;
            phoneInput.value = element.phone;
            darkmode.checked = element.darkmode;
            
            applyTheme(element.darkmode);
            message.textContent = `Editing user: ${element.name}`;
        });
        
        li.append(btn);
        usersList.append(li);
    });
}

// Initial render of the saved users
renderUsers();

function applyTheme(isDark) {
    if (isDark) {
        document.body.style.backgroundColor = "grey";
        console.log("on");
    } else {
        document.body.style.backgroundColor = "white";
        console.log("off");
    }
}

darkmode.addEventListener("change", () => {
    applyTheme(darkmode.checked);
});

// Save or Update form data
form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    if (currentEditElement) {
        // UPDATE EXISTING USER: Modify the object directly (it updates inside the array by reference)
        currentEditElement.name = nameInput.value.trim();
        currentEditElement.email = emailInput.value.trim();
        currentEditElement.age = ageInput.value;
        currentEditElement.phone = phoneInput.value;
        currentEditElement.darkmode = darkmode.checked;
        
        message.textContent = "User updated successfully!";
        currentEditElement = null; // Reset edit state back to creation mode
    } else {
        // CREATE NEW USER
        const newUser = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            age: ageInput.value,
            phone: phoneInput.value,
            darkmode: darkmode.checked
        };
        users.push(newUser);
        message.textContent = "Details saved successfully!";
    }
    
    // Save state to localStorage and refresh the UI list
    localStorage.setItem("user", JSON.stringify(users));
    renderUsers();
    form.reset();
});

// Restore last saved user data when page loads
if (users.length > 0) {
    const lastUser = users[users.length - 1];
    nameInput.value = lastUser.name;
    emailInput.value = lastUser.email;
    ageInput.value = lastUser.age;
    phoneInput.value = lastUser.phone;
    darkmode.checked = lastUser.darkmode;
    
    applyTheme(lastUser.darkmode);
    message.textContent = "Previous details restored!";
}

// Clear saved data
clearBtn.addEventListener("click", () => {
    localStorage.removeItem("user");
    users.length = 0; // Clears the existing array memory
    renderUsers();
    form.reset();
    applyTheme(false);
    currentEditElement = null;
    message.textContent = "Saved data cleared!";
});
