// nodejs 核心模块可以放在最上边声明

var path = require("path");

/* 可以用一个var来定义一些相关的模块，结尾用“逗号隔开”

var a = require('a'),
    b = require('b'),
    c = require('b');

*/

var express = require('express'),
  app = express(),
  ejs = require('ejs').__express;

// 此处说明使用ejs翻译.html

app.engine('.html', ejs);

// 模板引擎用 .html 扩展名

app.set('view engine', 'html');

// html 都上哪儿去找

app.set('views', path.join(__dirname, '/public'));

// 配置静态资源，这样前边的http可以取出图片，你还可以配置多个静态资源目录。

app.use('/images', express.static(path.join(__dirname, '/images')));

// ，你还可以配置多个静态资源目录。比如下边这个就可以用  http://localhost:3000/zhanghong/zh.jpeg 来取出下边的文件
// app.use('/zhanghong', express.static(__dirname + '/zh'));

app.set('views', path.join(__dirname, '/public'));

app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/js')));
//要引入bootstrap要为css和js配置静态资源目录

var friends = [{
  name: 'zhao',
  tel: '12338999'
}, {
  name: 'qian',
  tel: '56898009'
}, {
  name: 'sun',
  tel: '67989898'
}, {
  name: 'li',
  tel: '900-88898'
}, ];

// 使用不同的风格来调用router

app.use('/about', require('./about').about);
app.use('/contract', require('./contract').contract);
app.use('/xiangqing', require('./xiangqing').xiangqing);
app.use('/docs', require('./docs').docs);

var message = require('./message')(app);

app.get('/', function(req, res) {
  res.render('friends', {
    friends: friends,
    name: "Jing Lihuan",
    age: "23",
    title: "my home",
    header: "welcome!"
  });
});

// 启动服务器通常都在最后一行

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
