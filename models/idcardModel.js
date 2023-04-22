const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const idCardSchema = new Schema(
  {
    card_id: { type: Number },
    prefix: { type: String },
    first_name: { type: String },
    last_name: { type: String },
    birth_date: { type: String },
    religion: { type: String },
    address: { type: String },
  },
  { collection: "idcard" }
);

const idcard = mongoose.model("idcard", idCardSchema);

module.exports = idcard;
