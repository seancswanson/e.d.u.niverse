require("dotenv").config();
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/user");
var request = require('request');

router.post("/", function(req, res, next) {
  // check header or url parameters or post parameters for token
  var origin = req.body.origin;
  var latitude = req.body.latitude;
  var longitude = req.body.longitude;
  var distanceAPI = 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins='+origin+'&destinations='+latitude+','+longitude+'&key='+process.env.GOOGLE_MAPS_API;
  if (!origin) {
    return res
      .status(401)
      .send({ error: true, message: "passme a locale brah" });
  }else{
      request(distanceAPI,
      function(error, response, body){
        if(error){
            console.log('get error', err);
        }else{
            var dataObj = JSON.parse(body);
            console.log(dataObj.rows[0]);
            var toSend = dataObj.rows[0].elements;
            res.json(toSend);
        }
      });
  }
});

module.exports = router;