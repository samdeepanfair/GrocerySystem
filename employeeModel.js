const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/empDB", {
  useNewUrlParser: true,
});

const empSchema = mongoose.Schema({
  empID: { type: Number, required: true, unique: true }, 
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  DOB: { type: Date, required: true },
  // address: { type: String, required: true },
  position: {type: String, required: true},
  SSN: { type: Number, required: true, unique: true },
});

const empItem = conn2.model("empItem", empSchema);
 
  // module.exports = empItem;
  