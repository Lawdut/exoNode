var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    stars: {
      type: Number,
      required: true
    },
    review: {
      type: String,
      required: true
    }
  });

  var Review = mongoose.model("Review", ReviewSchema);

  module.exports = Review;