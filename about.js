exports.about = function(req, res) {
	res.render('about');
};

// exports.show = function(req, res, next){
// 	title = req.params.title;
// 	console.log(title);

// 	var query = coon.query('select*from'+TEST_TABLE+'where title='+title',
// 		function(err, rows, fileds){
// 			var imgs ='';
// 			img = rows[0].text;
// 			res.writeHead('200',{'Content-Type':'image/jpg'});
// 			res.end(img,'binary');
// 			res.write(img,'binary')
// 		});
// };
