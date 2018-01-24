require("dotenv").config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");
var request = require('request');

router.post("/me/from/token", function(req, res, next) {
  // check header or url parameters or post parameters for token
  var origin = req.body.origin;
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  if (!origin) {
    return res
      .status(401)
      .send({ error: true, message: "passme a locale brah" });
  }

  
});

module.exports = router;