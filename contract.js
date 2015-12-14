var express = require('../../');

var app = express.Router();

exports.contract = function(req, res){
	res.render('contract');
};