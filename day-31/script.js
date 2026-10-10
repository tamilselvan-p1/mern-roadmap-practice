// this - regular method
const user = {
    name:"Tamil",
    greet: function(){
        console.log(this.name)
    }
}
user.greet();

//this - arrow function method
const user2 = {
    name:"Tamil",
    greet: ()=>{
        console.log(this.name)
    }
}
user2.greet();

//call
function introduce(city,country){
    console.log(`${this.name} lives in ${city},${country}`)
}
const User ={
    name:"Tamil"
}

introduce.call(User,"Coimbatore","India")

//apply
function add(a,b){
    console.log(`${this.number} ${a}+${b} = ${a+b}`)
}

const Add = {
    number:"the two numbers added"
}

add.apply(Add,[2,3]);

//bind
//using the previous code
const inrtoduceUser = introduce.bind(User)
inrtoduceUser("Coimbatore","India")

//prototype
function person(name){
    this.name = name

}

person.prototype.sayHello = function(){
    console.log("Hello! "+ this.name)
}

const person1 = new person("Tamil")
const person2 = new person("Alice")
person1.sayHello();
person2.sayHello();