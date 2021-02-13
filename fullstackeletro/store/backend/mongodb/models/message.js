const mongoose = require("../connection");

const feedbackSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  text: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now,
  },
});

const feedback = mongoose.model("feedbacks", feedbackSchema);

module.exports = feedback;
