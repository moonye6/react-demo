

var http = require('http');
var path = require('path');
var url = require('url');
var express = require('express');
var app = express();

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//react
require("node-jsx").install();
var ReactAsync = require('react-async');
var React = require('react/addons');
var ReactApp = React.createFactory(require('./App/component/ReactApp'));


//模板页面
app.set('views', path.join(__dirname, 'views'));
//设置模板引擎 ejs
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(cookieParser());


//public是静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
	var reactHtml = ''//React.renderToString(ReactApp({}));
	res.render('index.ejs', {reactOut: reactHtml});
});

app.use(function(req, res ,next) {
	res.stateCode = 404;
	res.end('not found');
});
app.listen(80)

//启动程序时可自动打开网页
require('child_process').exec('start http://127.0.0.1')
