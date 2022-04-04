const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/categoryDB", {
  useNewUrlParser: true,
});

const itemSchema = mongoose.Schema({
  itemcategory: { type: String, required: true },
  itemId: { type: Number, required: true, unique: true },
  itemname: { type: String, required: true },
  itemPrice: { type: Number, required: true },
  Stock: { type: Number, required: true },
  itemSold: { type: Number, required: true },
});

const Item = conn.model("Item", itemSchema);

module.exports = Item;
