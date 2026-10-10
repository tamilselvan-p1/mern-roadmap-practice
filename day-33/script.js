//Set
const numbers = [1,2,2,3,4,4,5,6,5,6,7,7]
const uniqueNumbers = [...new Set(numbers)]
console.log(uniqueNumbers)

//Map
const sentence ="AppLe. banana orange apple banana"
const sentenceLowercae = sentence.toLowerCase()//removes the uppercase
const removepuctuation = sentenceLowercae.replace(/[^a-zA-Z ]/g, "")//removes the punctuations
const words = removepuctuation.split(" ")
const frequency = new Map()

for(word of words){
    if(frequency.has(word)){
        frequency.set(word,frequency.get(word)+1)
    }
    else{
        frequency.set(word,+1)
    }
}
console.log(frequency)

//Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("tamil@gamail.com"))
console.log(emailRegex.test("tamil@gamail."))
console.log(emailRegex.test("tamilgamail.com"))
console.log(emailRegex.test("tamil@.com"))
console.log(emailRegex.test("ta mil@gamail.com"))