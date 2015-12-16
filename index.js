var express = require('express');

var path = require("path");

var app = express();

var ejs = require('ejs').__express;

app.engine('.html', ejs);

app.set('views', path.join(__dirname, '/public'));

app.set('view engine', 'html');

app.use('/images', express.static(__dirname + '/images'));

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

app.use('/about', require('./about').about);
app.use('/contract', require('./contract').contract);

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

if (!module.parent) {
  app.listen(3000);
  console.log('Express started on port 3000');
}
