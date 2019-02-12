var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io').listen(http);
var PORT = process.env.PORT || 3000;

var people = [];
var names = [
    "Smoocharu",
    "John",
    "King",
    "Grump",
    "Pig",
    "Dog",
    "Power",
    "Dad",
    "Duck"
];
var colors = [
    "#FFF",
    "#AAA",
    "#CAB",
    "#BAF",
    "#420",
    "#DAB"
];


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.use(express.static('app'));

io.on('connect', function(socket) {
    var randName = Math.floor(Math.random() * 8);
    var randColor = Math.floor(Math.random() * 5);
    var randX = Math.floor(Math.random() * 1100);
    var randY = Math.floor(Math.random() * 750);
    socket.id = names[randName];
    var color = colors[randColor];
    var name = socket.id;
    if(people.length <= 1){
        console.log(socket.id);
        people.push({name, randX, randY, color});
        console.log(people);
        io.emit('currentPlayer', randX, randY, name, color);
        io.emit('showPlayers', people);
        socket.on('disconnect', function() {
            console.log(socket.id + ' left');
            for (var i =0; i < people.length; i++){
                if (people[i].name === name) {
                    people.splice(i,1);
                    break;
                }
            }
            io.emit('removePlayer', name);
            console.log(people);
        });
    }
    else{
        socket.emit("no");
    }
});

http.listen(PORT, function() {
	console.log('listening on localhost:3000');
});