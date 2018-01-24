var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');

router.post('/', function(req, res, next){
	res.send("Post route reached")
})

module.exports = router;