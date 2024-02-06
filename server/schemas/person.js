const mongoose = require("mongoose");

const person = mongoose.Schema({
  fullname: { type: String },
  email: { type: String },
  phone: { type: String },
  img: { type: String },
});

const personSchema = mongoose.model("person", person);

module.exports = personSchema;
