const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const inventoryDB = require("./inventoryModel");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.get("/Login", (req, res) => {
  res.sendFile(__dirname + "/Login.html");
});

app.post("/Login", (req, res) => {
  console.log("We are in Login page");
  // let myid = req.body.myId;
  // let mypassword = req.body.mypassword;
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
  res.sendFile(__dirname + "/Inventory.html");
});

app.get("/Staffs", (req, res) => {
  res.sendFile(__dirname + "/Staffs.html");
});

app.get("/category", (req, res) => {
  res.sendFile(__dirname + "/category.html");
});

app.post("/category", async (req, res) => {
  //get data from category page and save it into database
  //deduct the quantity of inventory after sold
});

app.listen(3000, () => {
  console.log("Server is now running on port 3000");
});
