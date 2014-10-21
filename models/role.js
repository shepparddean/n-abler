var mongoose = require('mongoose');

var roleSchema = mongoose.Schema({
	
	name: String,
	description: String
});

module.exports = mongoose.model('Role', roleSchema);
