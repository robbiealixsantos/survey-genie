require('dotenv').config()

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// Load Input Validation
// example: const validateRegisterInput = require('../../validation/register');
// TODO SURVEY VALIDATION

// Load User model
const Survey = require('../../models/Survey');

// GET api/surveys/test
// Tests surveys route
// Public
router.get('/surveys', (req, res) => res.json({ msg: 'Surveys Works' }));

// POST api/surveys
// Create survey
// Public
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  //const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  //if (!isValid) {
  //  return res.status(400).json(errors);
  //}

  const newSurvey = new Survey({
    title: req.body.title,
    description: req.body.description,
    timestaken: 0,
    user: req.user.id
  });

  newSurvey.save().then(post => res.json(post));
});

module.exports = router;
