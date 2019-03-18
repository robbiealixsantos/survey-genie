require('dotenv').config()

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load Input Validation
// example: const validateRegisterInput = require('../../validation/register');
// TODO QUESTION VALIDATION

// Load Question model
const Question = require('../../models/Question');

// GET api/questions/test
// Tests surveys route
// Public
router.get('/test', (req, res) => res.json({ msg: 'Questions Works' }));

// GET api/questions/:id
// Get questions by survey id
// Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Question.find({ survey: req.params.id })
    .then(post => {
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ nosurveyfound: 'No questions found associated with that survey ID' })
      }
    })
    .catch(err =>
      res.status(404).json({ nosurveyfound: 'No questions found associated with that survey ID' })
    );
});

// POST api/questions
// Create question for survey
// Private
router.post('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  //const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  //if (!isValid) {
  //  return res.status(400).json(errors);
  //}

  const newQuestion = new Question({
    survey: req.params.id,
    question: req.body.question,
    answerType: req.body.answertype,
    additionalComments: req.body.additionalcomments
  });

  newQuestion.save().then(post => res.json(post));
});

module.exports = router;
