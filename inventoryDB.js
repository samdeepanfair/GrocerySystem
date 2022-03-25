const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/categoryDB", {
  useNewUrlParser: true,
});

const itemSchema = mongoose.Schema({
  itemcategory: String,
  itemId: Number,
  itemname: String,
  itemPrice: Number,
  Stock: Number,
  itemSold: Number,
});

const Item = mongoose.model("Item", itemSchema);

const apple = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 101,
  itemname: "Apple",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const banana = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 102,
  itemname: "Banana",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const peach = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 103,
  itemname: "peach",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const pineapple = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 104,
  itemname: "pineapple",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const grape = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 105,
  itemname: "",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const grava = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 106,
  itemname: "grava",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const tomato = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 107,
  itemname: "tomato",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const potato = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 108,
  itemname: "potato",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const celery = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 109,
  itemname: "celery",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const cabbage = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 110,
  itemname: "cabbage",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const kale = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 111,
  itemname: "kale",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const lettuce = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 112,
  itemname: "lettuce",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const bok_choy = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 113,
  itemname: "bok choy",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const spinach = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 114,
  itemname: "spinach",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const romaine_hearts = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 115,
  itemname: "romaine hearts",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});
const green_peper = new Item({
  itemcategory: "Fruits and Vegetables",
  itemId: 116,
  itemname: "green peper",
  itemPrice: 10,
  Stock: 10,
  itemSold: 10,
});

Item.deleteMany({});

Item.insertMany(
  [
    apple,
    banana,
    peach,
    pineapple,
    grape,
    grava,
    tomato,
    potato,
    celery,
    cabbage,
    kale,
    lettuce,
    bok_choy,
    spinach,
    romaine_hearts,
    green_peper,
  ],
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Fruits and vegetable items db created successfully");
      mongoose.connection.close();
    }
  }
);
