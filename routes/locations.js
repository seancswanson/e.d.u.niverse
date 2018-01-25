var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

router.post('/', function(req, res, next){
	console.log(req.body.location);
	console.log(req.body.user);
	res.send("Post route reached",req.body.location,req.body.user);
})

module.exports = router;