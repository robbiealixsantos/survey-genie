const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const SurveySchema = new Schema({
  user: {
  type: Schema.Types.ObjectId,
  ref: 'users'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  timesTaken: {
    type: Number,
    required: true
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Survey = mongoose.model('surveys', SurveySchema);
