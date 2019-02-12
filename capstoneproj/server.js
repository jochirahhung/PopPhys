var path = require("path"),
    express = require("express"),
    bcrypt = require('bcrypt-nodejs'),
    mongoose = require('mongoose'),
    route = require('./routes/routes.js'),
    passport = require("passport");
    bodyParser = require('body-parser'),
    session = require("express-session"),
    nodeMailer = require("nodemailer");

    var hash;
var app = express();

var checkAuth = function (req, res, next) {
    if (req.session.user.code == "MHS2018" || req.session.user.code == "LHS2018" || req.session.user.code == "Neu2018") {
        next();
    } else {
        res.redirect('http://localhost:3000/profile');
    }
};

var cons = require('consolidate');

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.use(express.static('/index.html'));
app.use(express.static(path.join(__dirname, "/build")));
app.use(session({secret: '5ecretP455c0de', saveUninitialized: true, resave: true}));
app.use("/node_modules", express.static('node_modules'));
app.get("/#!/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "/build/login.html"));
});

app.get("/create", function(req, res){
    res.sendFile(path.join(__dirname, "/build/createUser.html"));
});

app.get("/quiz", function(req, res){
    res.sendFile(path.join(__dirname, "/build/quiz.html"));
});

app.get("/profile", function(req, res){
    res.render(path.join(__dirname, "/build/profile.ejs"), {name: req.session.user.name, desc: req.session.user.desc, email: req.session.user.email, teacher: req.session.user.teacher, ch1Score: req.session.user.ch1Score, ch2Score: req.session.user.ch2Score, ch3Score: req.session.user.ch3Score, ch4Score: req.session.user.ch4Score, ch5Score: req.session.user.ch5Score, ch6Score: req.session.user.ch6Score, ch7Score: req.session.user.ch7Score, ch8Score: req.session.user.ch8Score});
});

app.get("/findPeople", function(req, res){
    route.allusers.find({}).exec(function(err, users) {   
        if (err) throw err;
        res.render(path.join(__dirname, "/build/findPeople.ejs"), {usersArray: users});
    });
});

app.get("/teach", checkAuth, function(req, res){
    route.allusers.find({}).exec(function(err, users) {   
        if (err) throw err;
        res.render(path.join(__dirname, "/build/teachers.ejs"), {usersArray: users, session: req.session.user.code});
    });
});


var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.post("/edit", urlencodedParser, route.editDesc)

app.post("/createUser", urlencodedParser, route.createUser);

app.post("/logout", route.logout);

app.post('/login', urlencodedParser, route.authenticate);

app.post('/sendEmail', urlencodedParser,  route.sendMail);

app.post('/quiz1', urlencodedParser, route.checkQuiz1);

app.post('/quiz2', urlencodedParser, route.checkQuiz2);

app.post('/quiz3', urlencodedParser, route.checkQuiz3);

app.post('/quiz4', urlencodedParser, route.checkQuiz4);

app.post('/quiz5', urlencodedParser, route.checkQuiz5);

app.post('/quiz6', urlencodedParser, route.checkQuiz6);

app.post('/quiz7', urlencodedParser, route.checkQuiz7);

app.post('/quiz8', urlencodedParser, route.checkQuiz8);

app.listen(3000);