var express = require('express');

var app = express.Router();

var app = module.exports = express();



exports.contract = function(req, res){
	res.render('contract');
};