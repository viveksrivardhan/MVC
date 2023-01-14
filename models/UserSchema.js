// require mongoose
// step 1: Connecting to Database
// step 2: Create a schema
// step 3: Create a model
// step 4: I can add Objects / Documents
// step 5: I can find documents

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const users = new Schema({
  username: String,
  email: String,
  password: String,
});

const UserModel = mongoose.model("testdb", users);
module.exports = UserModel;
