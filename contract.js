var express = require('../../');

var app = express.Router();

exports.contract = function(req, res){
	res.send('我的信息');
};