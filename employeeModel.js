const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/empDB", {
  useNewUrlParser: true,
});

const emp = mongoose.Schema({
  empID: { type: Number, required: true, unique: true }, 
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  DOB: { type: Date, required: true },
  address: { type: String, required: true },
  SSN: { type: Number, required: true },
});

const empItem = mongoose.model("Employee Item", emp);
 
  module.exports = empItem;
  