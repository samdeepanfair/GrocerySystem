const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.port || 3000;
const mongoose = require("mongoose");
// const inventoryModel = require("./inventoryModel");
// const { name } = require("ejs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");


const conn = mongoose.createConnection("mongodb://localhost:27017/categoryDB", {
  useNewUrlParser: true,
});
const conn2 = mongoose.createConnection("mongodb://localhost:27017/empDB", {
  useNewUrlParser: true,
});
const itemSchema = mongoose.Schema({
  itemcategory: { type: String, required: true },
  itemId: { type: Number, required: true, unique: true },
  itemname: { type: String, required: true, unique: true },
  itemPrice: { type: Number, required: true },
  Stock: { type: Number, required: true },
  itemSold: { type: Number, required: true },
});
const empSchema = mongoose.Schema({
  empID: { type: String, required: true, unique: true }, 
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  DOB: { type: Date, required: true },
  // address: { type: String, required: true },
  position: {type: String, required: true},
  SSN: { type: Number, required: true, unique: true },
});
const inventoryModel = conn.model("Item",itemSchema);
const employeeModel = conn2.model("empItem",empSchema);

// drop the database if it already exists
// const connection = mongoose.connection;
// connection.once("open", function(){
//   console.log("MongoDB connected successfully.");
//   connection.db.listCollections().toArray(function(err, names){
//     if(err) console.log(err);
//     else{
//       // for(i = 0; i < names.length; i++){
//         console.log("Line 28 index.js: " + names[0].name);
//         if((names[0].name = "items")){
//           console.log("items collection Exists in DB");
//           connection.db.dropCollection("items",function(err,res){
//             console.log("collection dropped");
//           });
//           // console.log("items collection no longer available.");
//         }else{
//           console.log("collection doesn't exist.")
//         }
//       // }
//     }
//   })
// });

// const inventoryDB = require("./inventoryDB");
// const inventoryModel = require("./inventoryModel");
// const employeeModel = require('./employeeModel');


app.get("/", (req,res)=> {
  res.redirect("/Login");
})

app.get("/Login", (req, res) => {
  console.log(`I am in login thingy.`);
  res.sendFile(__dirname + "/Login.html");
});

app.post("/Login", (req, res) => {
  console.log("We are in Login page");
  let myid = req.body.myId;
  console.log(myid);
  console.log(employeeModel.find({'empID': myid}));
  return employeeModel.find({'empID': myid},(err, doc)=> {
    if(doc.length === 0 || err){
      console.log(doc);
      res.status(403).send("Access denied.");
      // res.send(403, "No rights to access");
    }else{
      console.log(doc);
      res.redirect("/MainMenu");
    }
  })
});

app.get("/MainMenu", (req, res) => {
  console.log("I am in main page");
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
  var filterQuery = {'itemId': req.body.pID_edit};
  var updateQuery = {
    itemcategory: req.body.pCategory_edit,
    itemname: req.body.pName_edit,
    itemPrice: req.body.pPrice_edit,
    Stock: req.body.pStock_edit
  }
  
  inventoryModel.findOneAndUpdate(filterQuery, updateQuery, {upsert: true}, function(err, doc) {
      if (err) return res.send(500, {error: err});
      return res.redirect("/Inventory");
  });

});


app.post("/category", async (req, res) => {
  //get data from category page and save it into database
  //deduct the quantity of inventory after sold
  const {cartItems} = req.body;
  // await cartItems.array.forEach(element => {
  //   return inventoryModel.updateMany({itemname: element},{$inc: {Stock: -1}},{ multi: true}, function(err,res){
  //   if(err){
  //     console.error(err.toString());
  //   } else {
  //     console.log("data successfully updated!")
  //     res.redirect('/MainMenu');
  //   }
  // })
  // });
  const cartItemsLength = Object.keys(cartItems).length;
  for( let i = 0; i < cartItemsLength; i++){
    let response = await inventoryModel.updateOne(
    {itemname: cartItems[i]},
    {$inc: {Stock: -1,itemSold: 1}});
    // console.log(response);
  }

  let redir = { redirect: "/MainMenu"}
  return res.json(redir);
  
  // res.sendFile(__dirname + '/MainMenu.html');
  // window.location.assign('/MainMenu')
});

app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
