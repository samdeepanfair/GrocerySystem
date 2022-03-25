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
