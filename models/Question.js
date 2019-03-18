const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AnswerTypes = Object.freeze({
    Scale: 'SCALE',
    YesOrNo: 'YESORNO',
    Comment: 'COMMENT'
});

const QuestionSchema = new Schema({
  survey: {
    type: Schema.Types.ObjectId,
    ref: 'surveys'
  },
  question: {
    type: String,
    required: true
  },
  answerType: {
    type: String,
    enum: Object.values(AnswerTypes),
    required: true
  },
  additionalComments: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = Survey = mongoose.model('questions', QuestionSchema);
