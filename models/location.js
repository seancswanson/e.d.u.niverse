const mongoose = require('mongoose');

//create schema
const locationSchema = new mongoose.Schema({
	name: String,
	userId: {
		type: String,
		required: true,
	}
});

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;