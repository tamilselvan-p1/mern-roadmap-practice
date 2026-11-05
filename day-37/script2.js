//3. Three async tasks

function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User loaded")
        }, 1000);
    })
}
function getProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve("Products loaded")},2000)
        //reject(new Error("Products could not be loaded"))
    })
}
function getOrders(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Orders loaded")
        }, 1500);
    })
}

const [user, products, orders] = await Promise.all([
    getUser(),
    getProducts(),
    getOrders()
])
const p = [user,products,orders]

console.log(p)



