// Dependencies
// =============================================================
// Requiring Express
var express = require('express');
// Requiring Models
var db = require("../models");
var router = express.Router();

router.get("/", function(req,res){
  res.render('index/index')
});

// Routes
// =============================================================
router.get("/users", function(req, res) {
  db.User.findAll({}).then(function(dbUser) {
    res.json(dbUser);
  });
});

// Get rotue for retrieving a single post
router.get("/user/search", function(req, res) {
  console.log(req.body);
  db.User.findOne({
    where: {
      username: req.body.user
    },
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

router.post("/create/user", function(req, res) {
  db.User.create(req.body).then(function(dbPost) {
    res.redirect("/");
  });
});

// DELETE route for deleting posts
router.delete("/user/:id", function(req, res) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

// PUT route for updating posts
router.put("/user/:id", function(req, res) {
  db.Post.update({
      where: {
        id: req.body.id
      },
    }).then(function(dbUser) {
      res.json(dbUser);
    });
});
module.exports = router;