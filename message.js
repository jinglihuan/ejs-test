// 上一个文件请求了这里导出的一个 匿名函数 并且把定义好的 express app 传进来

module.exports = function(app) {

	// 请求一个文件系统，这个是nodejs原生库

	var fs = require('fs');

	// 请求一个三方处理文件上传的库

	var multer = require('multer');

	// 给这个库定义存储方式，见库的说明

	var storage = multer.diskStorage({
		destination: function(req, file, cb) {
			cb(null, 'uploads/')
		},
		filename: function(req, file, cb) {
			cb(null, file.fieldname + '-' + Date.now())
		},
	});

	// 上传文件库的配置，通常你需要一个专门处理上传文件得方法，全局的，这里是学习意图，写这里也可以。

	var upload = multer({
		storage: storage
	});

	//上传结束时触发 这个哪儿都没有用 上传完成可以写到 磁盘存储过程那里
	onFileUploadComplete = function(file) {
		console.log("upload complete");
	}

	// 可以在这里处理 多个 routes

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
