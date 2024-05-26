const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    currentArea:{type:String, required: true},
    phoneNo:{type: String, required: true},
    position:{type: String, required: true},
  },
  {
    collection: "Users",
  }
);

const model = mongoose.model("Users", UsersSchema);

module.exports = model;
