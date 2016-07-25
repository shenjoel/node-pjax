
/**
 * Module dependencies.
 */


var express = require('express'),
    ejs = require('ejs');

var route = require('./routes/index');

var app = module.exports = express();
var port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('.html', ejs.__express);
app.use('/styles', express.static(__dirname + '/public/styles'));
app.use('/images', express.static(__dirname + '/public/images'));
app.use('/js', express.static(__dirname + '/public/js'));

// 模板路由
app.get('/', route.index);

app.get('/index', route.index);

app.get('/about', route.about);

app.get('/blog', route.blog);

app.get('/contact', route.contact);

app.get('/element', route.element);

app.get('/portfolio', route.portfolio);

app.get('/service', route.service);

app.get('/single', route.single);

app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);
});
