const mongoose = require('mongoose');

//create schema
const locationSchema = new mongoose.Schema({
	name: String,
	user: {
		type: String,
		required: true,
	}
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;