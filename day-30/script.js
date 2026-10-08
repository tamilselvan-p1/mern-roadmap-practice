//Destructuring
const product ={
    name:"laptop",
    price:50000,
    brand:"Lenova"
};

const {name,price,brand} = product;
console.log(name)
console.log(price)
console.log(brand)

//Spread
const user = {
    name:"Tamil",
    age:20
};

const userWithCity = {
    ...user,
    city:"Coimbatore"
};
console.log(user)
console.log(userWithCity)

//Rest
const student = {
  sname: "Tamil",
  age: 21,
  course: "MERN",
  college: "ABC College"
};

const { sname, ...details} = student;
console.log(details);

//?. + ??
const user1 = {
  name: "Tamil",
  profile: {
    username: "tamil123"
  }
};
const udataDefault = user1.profile.phone ?? "No Phone Number"
const udata = user1.profile?.phone;
console.log(udata)
console.log(user1.profile?.username)
console.log(udataDefault)

//Combine everything

const product1 = {
  pname: "Laptop",
  pprice: 50000,
  pbrand: "Lenovo",
  details: {
    color: "Black"
  }
};

const {pname,pprice,pbrand} = product1;
const color = product1.details?.color ?? "Not Available"

const updatedProduct1 ={
    ...product1,
    stock: true
}

console.log(color)
console.log(updatedProduct1)