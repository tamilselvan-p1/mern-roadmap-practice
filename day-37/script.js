//1. Convert callback to async/await

const df= function downloadFile(){
    return new Promise((resolve,reject)=>{
        //setTimeout(()=>{reject("Download Failed")},1000)
        setTimeout(()=>{resolve("File Downloaded")},2000)
    }) 
}
async function dfLoad() {
    const result = await df()
    console.log(result)
}

dfLoad()

//2. Create a payment checker

function checkBalance(balance){
    return new Promise((resolve,reject)=>{
        if (balance >= 500) {
            resolve("Payment successful");
        }
        if (balance < 500) {
            reject("Insufficient balance");
        }
    })
}

async function showBalance(b) {
    try {
        const result = await checkBalance(b)
    console.log(result)
    } catch (error) {
        console.log(error);
    }
}

showBalance(1000)
showBalance(100)
