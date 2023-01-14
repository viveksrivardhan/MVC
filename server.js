// mvc ==> model, view, controller
const express = require("express");

const app = express();
app.use(express.json());

//we require mongoose and create an object for model part
const mongoose = require("mongoose");

//db connection

mongoose.connect(
  "mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/test",
  function (err) {
    if (err) {
      console.log("Not able to connect to Mongo DB");
    } else {
      console.log("Connection Successful");
    }
  }
);

// signup and login
// signup => username, email and password
// store in db //mongo db => register/signup

// for login after signup
// email and password => goes to backend =>function (controller) => communicate with database(model) => checks

app.get("/register", (req, res) => {
  res.send("running get request");
});
//which loads some kind of function
const signupRouter = require("./routes/signuproute");
//actual route /signup/register
app.use("/signup", signupRouter);
app.listen("1000", () => {
  console.log("Server is running");
});
