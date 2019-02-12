var express = require('express');
var expressSession = require('express-session');
var jade = require('jade');
var bodyParser = require('body-parser');

var app = express();

var checkAuth = function (req, res, next) {
    if (req.session.user && req.session.user.isAuthenticated) {
        next();
    } else {
        res.redirect('/');
    }
};

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// creates a session on request
app.use(expressSession({secret: '5ecretP455c0de', saveUninitialized: true, resave: true}));

app.get('/', function (req, res) {
    res.render('login');
});

var urlencodedParser = bodyParser.urlencoded({ extended: false })

// checks to see if user and password are correct
app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body.username);
    if (req.body.username == 'user' && req.body.password == 'pass') {
        req.session.user = { isAuthenticated: true, username: req.body.username};
        res.redirect('/private');
    } else {
        // logout here so if the user was logged in before, it will log them out if user/pass wrong
        res.redirect('/logout');
    }
});

// example of page that does not need authorization
app.get('/public', function (req, res) {
   res.send('Public access');
});

// checks for authorization by calling checkAuth
app.get('/private', checkAuth, function (req, res) {
   res.send('Authorized access: Welcome ' + req.session.user.username + '<br><a href="/logout">Logout</a');
});

// logs out the user by destroying the session
app.get('/logout', function (req, res) {
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        else
        {
            res.redirect('/');
        }
    });

});

app.listen(3000);