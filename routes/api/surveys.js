require('dotenv').config()

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load Input Validation
// example: const validateRegisterInput = require('../../validation/register');
// TODO SURVEY VALIDATION

// Load Survey model
const Survey = require('../../models/Survey');

// GET api/surveys/test
// Tests surveys route
// Public
router.get('/test', (req, res) => res.json({ msg: 'Surveys Works' }));

// GET api/surveys
// Get surveys by user id
// Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    Survey.find({ user: req.user.id })
      .then(post => {
        if (post) {
          res.json(post);
        } else {
          res.status(404).json({ nosurveyfound: 'No survey found associated with that user ID' })
        }
      })
      .catch(err =>
        res.status(404).json({ nosurveyfound: 'No survey found associated with that user ID' })
      );
});

// GET api/surveys/:id
// Get survey by survey id
// Private
router.get('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Survey.find({ _id: req.params.id })
    .then(post => {
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ nosurveyfound: 'No survey found associated with that ID' })
      }
    })
    .catch(err =>
      res.status(404).json({ nosurveyfound: 'No survey found associated with that ID' })
    );
});

// POST api/surveys
// Create survey
// Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  //const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  //if (!isValid) {
  //  return res.status(400).json(errors);
  //}

  const newSurvey = new Survey({
    title: req.body.title,
    description: req.body.description,
    timesTaken: 0,
    user: req.user.id
  });

  newSurvey.save().then(post => res.json(post));
});

module.exports = router;
