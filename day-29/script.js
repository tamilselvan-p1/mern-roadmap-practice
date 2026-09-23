const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 55000,
    rating: 4.5,
    stock: 10
  },
  {
    id: 2,
    name: "Phone",
    category: "Electronics",
    price: 25000,
    rating: 4.2,
    stock: 0
  },
  {
    id: 3,
    name: "Headphones",
    category: "Accessories",
    price: 3000,
    rating: 4.7,
    stock: 15
  },
  {
    id: 4,
    name: "Keyboard",
    category: "Accessories",
    price: 2000,
    rating: 4.1,
    stock: 8
  },
  {
    id: 5,
    name: "Monitor",
    category: "Electronics",
    price: 18000,
    rating: 4.6,
    stock: 5
  },
  {
    id: 6,
    name: "Mouse",
    category: "Accessories",
    price: 1200,
    rating: 3.9,
    stock: 20
  }
];

//map
const pruductnames = products.map(n => n.name);
console.log(pruductnames);

//filter
const morethan10k = products.filter(n => n.price > 10000);
console.log(morethan10k)

//reduce
const total = products.reduce((a,c)=>a+c.price,0);
console.log(total)

//find
const f =  products.find(n => n.name == "Headphones")
console.log(f)

//some
const es = products.some(s => s.stock === 0)
console.log(es)

//every
const rating = products.every(r => r.rating >=4.0)
console.log(rating)

//sort
const lowestTohighest = products.sort((a,b)=> a.price - b.price );
console.log(lowestTohighest);

//Combine methods

const instocks = products.filter(n => n.stock > 0)
console.log(instocks)

const avgrating = instocks.reduce((a,c)=> a+c.rating,0)/instocks.length;
console.log(avgrating)


//bonus
const morethan4point3rating = products.filter(n => n.rating > 4.3 && n.category == 'Electronics');
console.log(morethan4point3rating)