var express = require('express');
var cookieParser = require('cookie-parser');

var app = express();

app.use(cookieParser('This is my passphrase'));

app.get('/', function (req, res) {
    if(req.cookies.beenHereBefore === 'yes') {
        res.send('You have been here before');
    } else {
        res.cookie('beenHereBefore', 'yes');
        res.send('This is your first time');
    }
    
});

app.get('/clear', function (req, res) {
    res.clearCookie('beenHereBefore');
    res.redirect('/');
});

app.listen(3000);