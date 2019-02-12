var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/data');

var mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error:'));
mdb.once('open', function (callback) {
    
});

var hash;

var userSchema = mongoose.Schema({
    name: String,
    password: String,
    description: String,
    teacher: Boolean,
    email: String,
    student: Boolean,
    code: String,
    ch1Score: Number,
    ch2Score: Number,
    ch3Score: Number,
    ch4Score: Number,
    ch5Score: Number,
    ch6Score: Number,
    ch7Score: Number,
    ch8Score: Number
});
var User = mongoose.model('user_collection', userSchema);

exports.allusers = User;

exports.createUser = function (req, res) {
    bcrypt.hash(req.body.password, null, null, function (err, hash) {
        console.log(hash);
        if(req.body.code == "MHS2018" || req.body.code == "LHS2018" || req.body.code == "Neu2018"){
            var user = new User({ name: req.body.name, password: hash, description: "Nothing", teacher: true, email: req.body.email, student: false, code: req.body.code, ch1Score: 20, ch2Score: 20, ch3Score: 20, ch4Score: 20, ch5Score: 20, ch6Score: 20, ch7Score: 20, ch8Score: 20});
        } else if(req.body.code == "LHSStudent" || req.body.code == "MHSStudent" || req.body.code == "NeuStudent"){
            var user = new User({ name: req.body.name, password: hash, description: "Nothing", teacher: false, email: req.body.email, student: true, code: req.body.code, ch1Score: 0, ch2Score: 0, ch3Score: 0, ch4Score: 0, ch5Score: 0, ch6Score: 0, ch7Score: 0, ch8Score: 0});
        } else {
            var user = new User({ name: req.body.name, password: hash, description: "Nothing", teacher: false, email: req.body.email, student: false, code: req.body.code, ch1Score: 0, ch2Score: 0, ch3Score: 0, ch4Score: 0, ch5Score: 0, ch6Score: 0, ch7Score: 0, ch8Score: 0});
        }
         user.save(function (err, user) {
         if (err) return console.error(err);
            console.log(req.body.name + ' added');
         });

            bcrypt.compare(req.body.password, hash, function (err, res) {
                console.log(res);
            });

            bcrypt.compare("somethingStupid", hash, function (err, res) {
                console.log(res);
            });
        });
   res.redirect('/login');
};

exports.authenticate = function(req, res){
    User.findOne({'name': req.body.name}, function(err, user) {
           if(err) return console.error(err);
           if(user){
               bcrypt.compare(req.body.password, user.password, function(err, respond) {
                   if (respond) {
                       console.log("User logged in");
                       req.session.user = { isAuthenticated: true, name: req.body.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                       console.log(req.session.user);
                       req.session.save;
                       console.log(req.body.name);
                       res.redirect("/#!/");
                   } else {
                       console.log("User not logged in");
                       res.redirect('/login');
                       console.log(err);
                   }
               });
           }else{
               console.log("Cannot find user");
               res.redirect('/login');
           }
       });
   };

exports.logout = function (req, res) {
    console.log(req.session.user);
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
        else
        {
            res.redirect('/login');
            console.log(req.session);
        }
    });

};

exports.sendMail = function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'popphysemail@gmail.com',
            pass: 'jochi789'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    let mailOptions = {
        from: '"PopPhys" <popphysemail@gmail.com>',
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.body + "    Please do not reply to this email, this is sent from popphys.com"
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.redirect("http://localhost:3000/profile");
        });
    };

    exports.editDesc = function(req, res){
        User.findOne({'name': req.session.user.name}, function(err, user) {
            if(err) return console.error(err);
            if(user){
                user.description = req.body.body;
                user.save(function (err, user) {
                    if (err) return console.error(err);
                       console.log("Saved");
                    });
                req.session.user = { isAuthenticated: true, name: user.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                console.log(req.session.user);
                res.redirect("/profile");
            }
        });
    }

    exports.checkQuiz1 = function(req, res){
        var score1 = 0;
        if(req.body.q1 == "physics" || req.body.q1 == "Physics"){
            score1 = score1 + 2;
        };
        if(req.body.q2 == "forces" || req.body.q2 == "Forces"){
            score1 = score1 + 2;
        };
        if(req.body.q3 == "acceleration" || req.body.q3 == "Acceleration"){
            score1 = score1 + 2;
        };
        if(req.body.q4 == "mass" || req.body.q4 == "Mass"){
            score1 = score1 + 2;
        };
        if(req.body.q5 == "first law" || req.body.q5 == "First Law" || req.body.q5 == "First law"){
            score1 = score1 + 2;
        };
        if(req.body.q6 == "second law" || req.body.q6 == "Second Law" || req.body.q6 == "Second law"){
            score1 = score1 + 2;
        };
        if(req.body.q7 == "third law" || req.body.q7 == "Third Law" || req.body.q7 == "Third law"){
            score1 = score1 + 2;
        };
        if(req.body.q8 == "elastic" || req.body.q8 == "Elastic"){
            score1 = score1 + 2;
        };
        if(req.body.q9 == "compress" || req.body.q9 == "Compress"){
            score1 = score1 + 2;
        };
        if(req.body.q10 == "expand" || req.body.q10 == "Expand"){
            score1 = score1 + 2;
        };
        User.findOne({'name': req.session.user.name}, function(err, user) {
                    var score1 = 0;
        if(req.body.q1 == "physics" || req.body.q1 == "Physics"){
            score1 = score1 + 2;
        };
        if(req.body.q2 == "forces" || req.body.q2 == "Forces"){
            score1 = score1 + 2;
        };
        if(req.body.q3 == "acceleration" || req.body.q3 == "Acceleration"){
            score1 = score1 + 2;
        };
        if(req.body.q4 == "mass" || req.body.q4 == "Mass"){
            score1 = score1 + 2;
        };
        if(req.body.q5 == "first law" || req.body.q5 == "First Law" || req.body.q5 == "First law"){
            score1 = score1 + 2;
        };
        if(req.body.q6 == "second law" || req.body.q6 == "Second Law" || req.body.q6 == "Second law"){
            score1 = score1 + 2;
        };
        if(req.body.q7 == "third law" || req.body.q7 == "Third Law" || req.body.q7 == "Third law"){
            score1 = score1 + 2;
        };
        if(req.body.q8 == "elastic" || req.body.q8 == "Elastic"){
            score1 = score1 + 2;
        };
        if(req.body.q9 == "compress" || req.body.q9 == "Compress"){
            score1 = score1 + 2;
        };
        if(req.body.q10 == "expand" || req.body.q10 == "Expand"){
            score1 = score1 + 2;
        };
            if(err) return console.error(err);
            if(user){
                user.ch1Score = score1;
                user.save(function (err, user) {
                    if (err) return console.error(err);
                       console.log("Saved");
                    });
                req.session.user = { isAuthenticated: true, name: req.body.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                console.log(req.session.user);
                res.redirect("/profile");
            }
        });
    }

    exports.checkQuiz2 = function(req, res){
        var score2 = 0;
        if(req.body.q1 == "time" || req.body.q1 == "Time"){
            score2 = score2 + 2;
        };
        if(req.body.q2 == "motion" || req.body.q2 == "Motion"){
            score2 = score2 + 2;
        };
        if(req.body.q3 == "time" || req.body.q3 == "Time"){
            score2 = score2 + 2;
        };
        if(req.body.q4 == "limit" || req.body.q4 == "Limit"){
            score2 = score2 + 2;
        };
        if(req.body.q5 == "vector" || req.body.q5 == "Vector"){
            score2 = score2 + 2;
        };
        if(req.body.q6 == "velocity" || req.body.q6 == "Velocity"){
            score2 = score2 + 2;
        };
        if(req.body.q7 == "Solids" || req.body.q7 == "Solids"){
            score2 = score2 + 2;
        };
        if(req.body.q8 == "lots" || req.body.q8 == "Lots"){
            score2 = score2 + 2;
        };
        if(req.body.q9 == "planet" || req.body.q9 == "Planet"){
            score2 = score2 + 2;
        };
        if(req.body.q10 == "energy" || req.body.q10 == "Energy"){
            score2 = score2 + 2;
        };
        User.findOne({'name': req.session.user.name}, function(err, user) {
            if(err) return console.error(err);
            if(user){
                user.ch2Score = score2;
                user.save(function (err, user) {
                    if (err) return console.error(err);
                       console.log("Saved");
                    });
                req.session.user = { isAuthenticated: true, name: req.body.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                console.log(req.session.user);
                res.redirect("/profile");
            }
        });
    }

    exports.checkQuiz3 = function(req, res){
        var score3 = 0;
        if(req.body.q1 == "conduction" || req.body.q1 == "Conduction"){
            score3 = score3 + 2;
        };
        if(req.body.q2 == "bigger" || req.body.q2 == "Bigger"){
            score3 = score3 + 2;
        };
        if(req.body.q3 == "friction" || req.body.q3 == "Friction"){
            score3 = score3 + 2;
        };
        if(req.body.q4 == "inefficiency" || req.body.q4 == "Inefficiency"){
            score3 = score3 + 2;
        };
        if(req.body.q5 == "celsius" || req.body.q5 == "Celsius"){
            score3 = score3 + 2;
        };
        if(req.body.q6 == "farenheit" || req.body.q6 == "Farenheit"){
            score3 = score3 + 2;
        };
        if(req.body.q7 == "32" || req.body.q7 == "32"){
            score3 = score3 + 2;
        };
        if(req.body.q8 == "science" || req.body.q8 == "Science"){
            score3 = score3 + 2;
        };
        if(req.body.q9 == "celsius" || req.body.q9 == "Celsius"){
            score3 = score3 + 2;
        };
        if(req.body.q10 == "oxygen" || req.body.q10 == "Oxygen"){
            score3 = score3 + 2;
        };
        User.findOne({'name': req.session.user.name}, function(err, user) {
            if(err) return console.error(err);
            if(user){
                user.ch3Score = score3;
                user.save(function (err, user) {
                    if (err) return console.error(err);
                       console.log("Saved");
                    });
                req.session.user = { isAuthenticated: true, name: req.body.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                console.log(req.session.user);
                res.redirect("/profile");
            }
        });
    }

    exports.checkQuiz4 = function(req, res){
        var score4 = 0;
        if(req.body.q1 == "zeroth" || req.body.q1 == "Zeroth"){
            score4 = score4 + 2;
        };
        if(req.body.q2 == "Adiabatic" || req.body.q2 == "adiabatic"){
            score4 = score4 + 2;
        };
        if(req.body.q3 == "isovolumic" || req.body.q3 == "Isovolumic"){
            score4 = score4 + 2;
        };
        if(req.body.q4 == "isobaric" || req.body.q4 == "Isobaric"){
            score4 = score4 + 2;
        };
        if(req.body.q5 == "isothermal" || req.body.q5 == "Isothermal"){
            score4 = score4 + 2;
        };
        if(req.body.q6 == "cold" || req.body.q6 == "Cold"){
            score4 = score4 + 2;
        };
        if(req.body.q7 == "Enthalpy" || req.body.q7 == "enthalpy"){
            score4 = score4 + 2;
        };
        if(req.body.q8 == "Entropy" || req.body.q8 == "entropy"){
            score4 = score4 + 2;
        };
        if(req.body.q9 == "Reversibility" || req.body.q9 == "reversibility"){
            score4 = score4 + 2;
        };
        if(req.body.q10 == "energy" || req.body.q10 == "Energy"){
            score4 = score4 + 2;
        };
        User.findOne({'name': req.session.user.name}, function(err, user) {
            if(err) return console.error(err);
            if(user){
                user.ch4Score = score4;
                user.save(function (err, user) {
                    if (err) return console.error(err);
                       console.log("Saved");
                    });
                req.session.user = { isAuthenticated: true, name: req.body.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                console.log(req.session.user);
                res.redirect("/profile");
            }
        });
    }

    exports.checkQuiz5 = function(req, res){
        var score5 = 0;
        if(req.body.q1 == "visible" || req.body.q1 == "Visible"){
            score5 = score5 + 2;
        };
        if(req.body.q2 == "EM" || req.body.q2 == "em"){
            score5 = score5 + 2;
        };
        if(req.body.q3 == "Energy" || req.body.q3 == "energy"){
            score5 = score5 + 2;
        };
        if(req.body.q4 == "light" || req.body.q4 == "Light"){
            score5 = score5 + 2;
        };
        if(req.body.q5 == "ROYGBIV" || req.body.q5 == "roygbiv"){
            score5 = score5 + 2;
        };
        if(req.body.q6 == "lens" || req.body.q6 == "Lens"){
            score5 = score5 + 2;
        };
        if(req.body.q7 == "Ozone" || req.body.q7 == "ozone"){
            score5 = score5 + 2;
        };
        if(req.body.q8 == "violet" || req.body.q8 == "Violet"){
            score5 = score5 + 2;
        };
        if(req.body.q9 == "gray" || req.body.q9 == "Gray"){
            score5 = score5 + 2;
        };
        if(req.body.q10 == "middle" || req.body.q10 == "Middle"){
            score5 = score5 + 2;
        };
        User.findOne({'name': req.session.user.name}, function(err, user) {
            if(err) return console.error(err);
            if(user){
                user.ch5Score = score5;
                user.save(function (err, user) {
                    if (err) return console.error(err);
                       console.log("Saved");
                    });
                req.session.user = { isAuthenticated: true, name: req.body.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                console.log(req.session.user);
                res.redirect("/profile");
            }
        });
    }

    exports.checkQuiz6 = function(req, res){
        var score6 = 0;
        if(req.body.q1 == "particle" || req.body.q1 == "Particle"){
            score6 = score6 + 2;
        };
        if(req.body.q2 == "positive" || req.body.q2 == "Positive"){
            score6 = score6 + 2;
        };
        if(req.body.q3 == "friction" || req.body.q3 == "Friction"){
            score6 = score6 + 2;
        };
        if(req.body.q4 == "Metal" || req.body.q4 == "metal"){
            score6 = score6 + 2;
        };
        if(req.body.q5 == "DC" || req.body.q5 == "dc"){
            score6 = score6 + 2;
        };
        if(req.body.q6 == "AC" || req.body.q6 == "ac"){
            score6 = score6 + 2;
        };
        if(req.body.q7 == "Magnetism" || req.body.q7 == "magnetism"){
            score6 = score6 + 2;
        };
        if(req.body.q8 == "Electrons" || req.body.q8 == "electrons"){
            score6 = score6 + 2;
        };
        if(req.body.q9 == "Carbon" || req.body.q9 == "carbon"){
            score6 = score6 + 2;
        };
        if(req.body.q10 == "Gold" || req.body.q10 == "gold"){
            score6 = score6 + 2;
        };
        User.findOne({'name': req.session.user.name}, function(err, user) {
            if(err) return console.error(err);
            if(user){
                user.ch6Score = score6;
                user.save(function (err, user) {
                    if (err) return console.error(err);
                       console.log("Saved");
                    });
                req.session.user = { isAuthenticated: true, name: req.body.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                console.log(req.session.user);
                res.redirect("/profile");
            }
        });
    }

    exports.checkQuiz7 = function(req, res){
        var score7 = 0;
        if(req.body.q1 == "1800's" || req.body.q1 == "1800s"){
            score7 = score7 + 2;
        };
        if(req.body.q2 == "Electricity" || req.body.q2 == "electricity"){
            score7 = score7 + 2;
        };
        if(req.body.q3 == "Forces" || req.body.q3 == "forces"){
            score7 = score7 + 2;
        };
        if(req.body.q4 == "Magnet" || req.body.q4 == "magnet"){
            score7 = score7 + 2;
        };
        if(req.body.q5 == "AC" || req.body.q5 == "ac"){
            score7 = score7 + 2;
        };
        if(req.body.q6 == "hertz" || req.body.q6 == "Hertz"){
            score7 = score7 + 2;
        };
        if(req.body.q7 == "DC" || req.body.q7 == "dc"){
            score7 = score7 + 2;
        };
        if(req.body.q8 == "1700's" || req.body.q8 == "1700s"){
            score7 = score7 + 2;
        };
        if(req.body.q9 == "magnetic" || req.body.q9 == "Magnetic"){
            score7 = score7 + 2;
        };
        if(req.body.q10 == "resistance" || req.body.q10 == "Resistance"){
            score7 = score7 + 2;
        };
        User.findOne({'name': req.session.user.name}, function(err, user) {
            if(err) return console.error(err);
            if(user){
                user.ch7Score = score7;
                user.save(function (err, user) {
                    if (err) return console.error(err);
                       console.log("Saved");
                    });
                req.session.user = { isAuthenticated: true, name: req.body.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                console.log(req.session.user);
                res.redirect("/profile");
            }
        });
    }

    exports.checkQuiz8 = function(req, res){
        var score8 = 0;
        if(req.body.q1 == "space" || req.body.q1 == "Space"){
            score8 = score8 + 2;
        };
        if(req.body.q2 == "matter" || req.body.q2 == "Matter"){
            score8 = score8 + 2;
        };
        if(req.body.q3 == "nuclear" || req.body.q3 == "Nuclear"){
            score8 = score8 + 2;
        };
        if(req.body.q4 == "fusion" || req.body.q4 == "Fusion"){
            score8 = score8 + 2;
        };
        if(req.body.q5 == "Carbon-14" || req.body.q5 == "carbon-14"){
            score8 = score8 + 2;
        };
        if(req.body.q6 == "DNA" || req.body.q6 == "dna"){
            score8 = score8 + 2;
        };
        if(req.body.q7 == "uncontrollable" || req.body.q7 == "Uncontrollable"){
            score8 = score8 + 2;
        };
        if(req.body.q8 == "235"){
            score8 = score8 + 2;
        };
        if(req.body.q9 == "4500000000" || req.body.q9 == "4.5 billion"){
            score8 = score8 + 2;
        };
        if(req.body.q10 == "Bose-Einstein" || req.body.q10 == "bose-einstein"){
            score8 = score8 + 2;
        };
        User.findOne({'name': req.session.user.name}, function(err, user) {
            if(err) return console.error(err);
            if(user){
                user.ch8Score = score8;
                user.save(function (err, user) {
                    if (err) return console.error(err);
                       console.log("Saved");
                    });
                req.session.user = { isAuthenticated: true, name: req.body.name, desc: user.description, email: user.email, code: user.code, teacher: user.teacher, ch1Score: user.ch1Score, ch2Score: user.ch2Score, ch3Score: user.ch3Score, ch4Score: user.ch4Score, ch5Score: user.ch5Score, ch6Score: user.ch6Score, ch7Score: user.ch7Score, ch8Score: user.ch8Score};
                console.log(req.session.user);
                res.redirect("/profile");
            }
        });
    }
