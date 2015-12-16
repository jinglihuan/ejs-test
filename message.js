var express = require('express');

var app = express();

var router = express.Router();

var multer = require('multer');

//svar upload = multer();

// app.use(multer({ dest: './uploads/'}))
// 	router.use(function(req, res, next){
// 		console.log(req.files);
// 		next();
// 	});

exports.message = function(req, res, next){
	res.render('message');
};

var storage = multer.diskStorage({
	destination: function (req, file, cb){
		cb(null, 'files/uploads')	
	},
	filename: function (req, file, cb) {
	cb(null, file.fieldname + '-' + Date.now())
	},
})
//var storage = multer.memoryStorage();
var upload = multer({ 
	storage: storage 
});

//上传结束时触发
onFileUploadComplete:function(file){
	console.log("upload complete");
}