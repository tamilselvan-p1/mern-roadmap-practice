//4. Error handling

function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User loaded")
        }, 1000);
    })
}
function getProducts(){
    return new Promise((resolve, reject) => {
       // setTimeout(()=>{resolve("Products loaded")},2000)
        reject(new Error("Products could not be loaded"))
    })
}
function getOrders(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Orders loaded")
        }, 1500);
    })
}

async function loadData(){
    try {
        const [user, products, orders] = await Promise.all([
    getUser(),
    getProducts(),
    getOrders()
])
console.log([user,products,orders])
    } catch (error) {
        console.log(error.message)
    }
}

loadData()