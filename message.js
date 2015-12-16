module.exports = function(app) {

	var fs = require('fs');

	var multer = require('multer');

	var storage = multer.diskStorage({
		destination: function(req, file, cb) {
			cb(null, 'uploads/')
		},
		filename: function(req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now())
		},
	});

	var upload = multer({
		storage: storage
	});

	//上传结束时触发
	onFileUploadComplete = function(file) {
		console.log("upload complete");
	}

	app.get('/message', function(req, res, next) {
		fs.readdir('uploads', function(err, files) {
			res.files = files;
			next();
		});
	}, function(req, res, next) {
		console.log(res.files);
		res.render('message', {
			files: res.files
		});
	});

	app.post('/file/uploading', upload.single('inputFile'), function(req, res, next) {
		console.log(req.file);
		res.redirect('/message');
	});
}
