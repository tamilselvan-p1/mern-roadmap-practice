//filter
function myFilter(array,callback){
    const result =[];
    for(let i=0;i<array.length;i++){
        if(callback(array[i])){
            result.push(array[i])
        }
        
    }
    return result;
}

const numbers =[1,3,5,7,9,11]
const result = myFilter(numbers,function(num){
    return num > 7;
})

console.log(result)