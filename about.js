var express = require('../../');

var app = express.Router();


exports.about = function(req, res) {
	res.send('This is my photo!');
};