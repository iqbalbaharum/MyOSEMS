var express = require('express');
var router = express.Router();


module.exports = router;


router.get("/", (req, res) => {
  res.render('list');
});

router.get("/meetup", (req, res) => {
  res.render('meetup');
});

router.get("/register", (req, res) => {
  res.render('register');
});

router.get("/login", (req, res) => {
  res.render('login');
});

router.get("/register", (req, res) => {
  res.render('register');
});
