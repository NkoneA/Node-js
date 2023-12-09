//require necessary dependencies
const product = require("./models/product");
const mongoose = require("mongoose");

//connection to mongo DB
mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
main().catch((err) => console.log("Connection error"));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("connection open");
}

//const p = new product({
//name: "Strawberries bulk",
//price: 1.99,
//category: "fruit",
//});

//p.save()
//.then((p) => {
//console.log(p);
//})
//.catch((e) => {
//console.log(e);
//});
const seedProducts = [
  {
    name: "Chocolate whole milk",
    price: 2.69,
    category: "dairy",
  },
  {
    name: "Organic celery",
    price: 1.5,
    category: "vegetable",
  },
  {
    name: "Organic melon",
    price: 4.99,
    category: "fruit",
  },
  {
    name: "Seedless watermelon",
    price: 3.99,
    category: "fruit",
  },
  {
    name: "Eggplant",
    price: 1.0,
    category: "vegetable",
  },
];

Product.insertMany(seedProducts)
.then(res =>{
    console.log(res)
})
.catch(e =>{
    console.log(e)
})
