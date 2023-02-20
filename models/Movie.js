const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    min: 2,
  },
  year: {
    type: Number,
    require: true,
  },
  duration: {
    type: Number,
    require: true,
  },
  genre: {
    type: Array,
    require: true,
    min: 1,
  },
  director: [
    {
      id: { type: ObjectID, require: true, ref: "Person" },
      name: { type: String, require: true },
    },
  ],
  writer: [
    {
      id: { type: ObjectID, require: true, ref: "Person" },
      name: { type: String, require: true },
    },
  ],
  actor: [
    {
      id: { type: ObjectID, require: true, ref: "Person" },
      name: { type: String, require: true },
    },
  ],
  country: {
    type: String,
    require: true,
  },
  language: {
    type: String,
    require: true,
  },
  review: [
    {
      reviewerId: { type: ObjectID, require: true, ref: "Person" },
      name: { type: String, require: true },
      message: { type: String, require: true, min: 1 },
      rating: {
        type: Number,
        require: true,
        validate: {
          validator: function (userRating) {
            return userRating >= 0 && userRating <= 5;
          },
          errorMessage: (props) =>
            `${props.value} is not a valid number. Must between 0 and 5`,
        },
      },
    },
  ],
});

module.exports = mongoose.Model(movieSchema, "Movie");
