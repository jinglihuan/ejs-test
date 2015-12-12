var express = require('../../');

var app = express.Router();

exports.message = function(req, res){
	res.send('请留言');

};