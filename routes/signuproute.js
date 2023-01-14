const express = require("express");

//Inbuilt method used to make express routes
const signupRouter = express.Router();

// importing controller
const RegisterUser = require("../controllers/RegisterUser");

signupRouter.post("/register", RegisterUser);

// (req, res) => {
//   //business logic ( we write the business logic in controller )
//   let username = req.body.username;
//   let email = req.body.email;
//   let password = req.body.password;
//   let userdata = {
//     username: username,
//     email: email,
//     password: password,
//   };

//   let resultData = new UserModel(userdata);
//   resultData
//     .save()
//     .then((item) => {
//       res.send("Item added sucessfully");
//     })
//     .catch((err) => {
//       console.log("error in adding data");
//     });
//   //   res.json({
//   //     email: email,
//   //     password: password,
//   //   });
// });
module.exports = signupRouter;
