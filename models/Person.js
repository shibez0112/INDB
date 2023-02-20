const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    min: 1,
  },
  writerRole: {
    type: Array,
  },
  directorRole: {
    type: Array,
  },
  actorRole: {
    type: Array,
  },
  born: {
    type: Date,
  },
  trivia: {
    type: String,
  },
  quote: {
    type: Array,
  },
});

module.exports = mongoose.Model(personSchema, "Person");
