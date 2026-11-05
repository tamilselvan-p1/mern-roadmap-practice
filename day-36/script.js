//1. Callback to Promise

const df= function downloadFile(){
    return new Promise((resolve,reject)=>{
        //setTimeout(()=>{reject("Download Failed")},1000)
        setTimeout(()=>{resolve("File Downloaded")},2000)
    }) 
}
df().then((result)=>{console.log(result)}).catch((error)=>{console.log(error)});

//2. Create a Promise with success and failure

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

checkBalance(1000).then((result)=>{console.log(result)}).catch((result)=>{console.log(result)})
checkBalance(200).then((result)=>{console.log(result)}).catch((result)=>{console.log(result)})

