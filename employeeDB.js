const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/empDB", {
  useNewUrlParser: true,
});

const emp = mongoose.Schema({
  empID: { type: Number, required: true, unique: true }, 
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  DOB: { type: Date, required: true },
  // address: { type: String, required: true },
  position: {type: String, required: true},
  SSN: { type: Number, required: true, unique: true },
});

const empItem = mongoose.model("empItem", emp);

const admin = new empItem({
    empID: 300330001,
    firstName: "Nelson",
    lastName: "Eng",
    DOB: 01/01/1999,
    position: "manager",
    SSN: 900000001,
  });
const employee1 = new empItem({
    empID: 300331111,
    firstName: "Joling",
    lastName: "Weng",
    DOB: 01/01/1999,
    position: "cashier",
    SSN: 900000002,
  });
const employee2 = new empItem({
    empID: 300331112,
    firstName: "Sulgi",
    lastName: "Kim",
    DOB: 01/01/1999,
    position: "cashier",
    SSN: 900000003,
  });
const employee3 = new empItem({
    empID: 300331112,
    firstName: "Tashmeet",
    lastName: "Singh",
    DOB: 01/01/1999,
    position: "cashier",
    SSN: 900000004,
  });
const employee4 = new empItem({
    empID: 300331112,
    firstName: "Samdeep",
    lastName: "Singh",
    DOB: 01/01/1999,
    position: "cashier",
    SSN: 900000005,
  });


    
  empItem.deleteMany({});
  
  empItem.insertMany(
    [
      admin,
      employee1,
      employee2,
      employee3,
      employee4,
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
  