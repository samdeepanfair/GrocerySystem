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

const admin = new Item({
    empID: 101,
    firstName: "abc",
    lastName: "def",
    DOB: 01/01/1999,
    address: "CAN",
    SSN: 000000,
  });
    
  empItem.deleteMany({});
  
  empItem.insertMany(
    [
      admin
    ],
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("items db created successfully");
        mongoose.connection.close();
      }
    }
  );
  
  module.exports = empItem;
  