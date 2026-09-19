//Higher-Order Functions(on function can give an another function as parameter) , created own map,filter,reduce
//map

function myMap(array,callback){
    const result =[];
    for(i=0;i<array.length;i++)
    {
        result.push(callback(array[i]))
    }
    return result;
}

const numbers =[1,2,3,4];
const result = myMap(numbers,function(number)
{
   return number*2
})
console.log(result)


