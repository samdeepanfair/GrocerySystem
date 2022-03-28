const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
// const cheerio = require("cheerio");
// $ = cheerio.load("category.html");
const inventoryModel = require("./inventoryModel");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


mongoose.connect("mongodb://localhost:27017/categoryDB", {
  useNewUrlParser: true,
});

// const itemSchema = mongoose.Schema({
//   itemcategory: { type: String, required: true },
//   itemId: { type: Number, required: true, unique: true },
//   itemname: { type: String, required: true },
//   itemPrice: { type: Number, required: true },
//   Stock: { type: Number, required: true },
//   itemSold: { type: Number, required: true },
// });

// const Item = mongoose.model("Item", itemSchema);

app.get("/", (req,res)=> {
  res.redirect("/Login");
})

app.get("/Login", (req, res) => {
  res.sendFile(__dirname + "/Login.html");
});

app.post("/Login", (req, res) => {
  console.log("We are in Login page");
  let myid = req.body.myId;
  let mypassword = req.body.mypassword;
  // console.log(myid);
  // console.log(mypassword);
  
  //validate user data here, if correct, go to the mainmenu
  res.redirect("/MainMenu");
});

app.use("/MainMenu", (req, res) => {
  console.log("I am in app.use()");
  res.sendFile(__dirname + "/MainMenu.html");
});

app.get("/Inventory", (req, res) => {
  //res.sendFile(__dirname + "/Inventory.html");

  return inventoryModel.find(function(err, items) {
    if(err) {
      console.log(err);
    } else {
      res.render("management", {
        titleName: "Inventory",
        itemName: "Product",
        fields: {
          col1: "Product Name",
          col2: "Product ID",
          col3: "Category",
          col4: "Quantity",
          col5: "Price"
        },
        items: items
      }); 
    }
  });
});

app.get("/Staffs", (req, res, next) => {
  res.sendFile(__dirname + "/Staffs.html");
});

app.get("/category", (req, res, next) => {
  // res.sendFile(__dirname + "/category.html");
  // res.render("category");
  // const cat = "Dairy and eggs";
  return inventoryModel.find(function (err, items) {
    if (err) {
      console.log(err);
    } else {
      // console.log(items);
      res.render("category", { items });
    }
  });
});

app.post("/insert-product", (req, res, next) => {

  let newProduct = new inventoryModel({
    itemcategory: req.body.pCategory,
    itemId: req.body.pID,
    itemname: req.body.pName,
    itemPrice: req.body.pPrice,
    Stock: req.body.pStock,
    itemSold: 0
  });

  newProduct.save();

  res.redirect("/Inventory");

});

app.post("/update-product", (req, res, next) => {
  
});


app.post("/category", async (req, res) => {
  //get data from category page and save it into database
  //deduct the quantity of inventory after sold
  console.log(req.params);
  res.redirect('/MainMenu')
});

app.listen(3000, () => {
  console.log("Server is now running on port 3000");
});
