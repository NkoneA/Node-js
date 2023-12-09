//require necessary dependencies
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const Product = require("./models/product");

//declare categories
const categories = Product.schema.path("category").enumValues;

//connection to mongo DB
mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
main().catch((err) => console.log("Connection error"));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/farmStand");
  console.log("connection open");
}

//set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//index route
app.get("/products", async (req, res) => {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("./products/index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("./products/index", { products, category: "All" });
  }
});

//create a form to add new products
app.get("/products/new", (req, res) => {
  res.render("products/new", { categories });
});

//Add new product to the current product list
//redirect to the main products page
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.redirect("/products");
});

//show product route by id
app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  console.log(product);
  res.render("./products/show", { product });
});

//render update form
app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("products/edit", { product, categories });
});
//update product by id
app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

//delete product by id
app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

//server listening
app.listen(3000, () => {
  console.log("Listening on port 3000!");
});
