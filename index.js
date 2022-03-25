const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/pulic")));

app.get("/Login", (req, res) => {
  res.sendFile(__dirname + "/Login.html");
});

app.post("/Login", (req, res) => {
  console.log("We are in Login page");
  let myid = req.body.myId;
  let mypassword = req.body.mypassword;
  console.log(myid);
  console.log(mypassword);
  // res.redirect("/MainMenu");
});

app.use("/MainMenu", (req, res) => {
  console.log("I am in app.use()");
  res.sendFile(__dirname + "/MainMenu.html");
});

app.get("/category", (req, res) => {
  res.sendFile(__dirname + "/category.html");
});

app.listen(3000, () => {
  console.log("Server is now running on port 3000");
});
