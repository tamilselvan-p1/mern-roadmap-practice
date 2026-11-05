//3. Promise.all() with three tasks

function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User loaded")
        }, 1000);
    })
}
function getProducts(){
    return new Promise((resolve, reject) => {
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
Promise.all([
    getUser(),
    getProducts(),
    getOrders()
]).then((results)=>{console.log(results)}).catch((e)=>{console.log(e.message)})