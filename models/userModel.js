const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: String,
    detail: {
      gender: String,
      age: Number,
      address: String,
    },
  },
  { collection: "index" }
);

const user = mongoose.model("index", userSchema);

module.exports = user;
