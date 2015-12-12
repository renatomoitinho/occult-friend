var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var application = express();
var pub = __dirname + '/public';

//Configuration templates engine
application.set('view engine', 'jade');
application.set('views', __dirname + '/views');

application.use(express.static(pub));
application.use(cookieParser());
application.use(bodyParser.json()); // for parsing application/json
application.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded
application.use(multer()); // for parsing multipart/form-data
application.use(session({
    secret: 'occult friend',
    resave: false,
    saveUninitialized: true
}));

//
// ROUTES

application.get('/', function(req, res) {
    res.render('dashboard', {
        title: 'Express Login'
    });
});

application.get('/admin', function(req, res) {
    res.render('admin', {
        title: 'Express Login'
    });
});

var port = process.env.PORT || 3000;

var server = application.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});