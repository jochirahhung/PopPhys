var app = {
    socket: null,
    stage: null,
    gameObject: null,
    assets: null,
    otherPlayers: [],

    setupCanvas: function() {
        var canvas = document.getElementById('game');
        canvas.width = 1200;
        canvas.height = 850;
        this.stage = new createjs.Stage(canvas);
    },
    beginLoad: function()
    {
        manifest = [
            {
                src: "js/actor.js",
            },
        ];

        this.assets = new createjs.LoadQueue(true); 

        this.assets.on("complete", function (event) {
            app.init();
        });

        this.assets.loadManifest(manifest);
    },

    init: function() {
        this.setupCanvas();
        this.socket = io();

        this.socket.on('list', function(people) {
            console.log(people.toString());
        });
        this.socket.on('you', function(id) {
            console.log("You are " + id);
        });

        this.socket.on('no', function(){
            console.log("You can't connect to this room, because it is full, sorry");
        });

        this.socket.on('currentPlayer', function(x, y, name, color){
            app.gameObject = new Actor(name, x, y, color, app.stage);
            app.stage.update();
        });

        this.socket.on('showPlayers', function(people) {
            app.otherPlayers.forEach(element => {
                element.remove(app.stage);
            });
            people.forEach(element => {
                if(element.name != app.gameObject.name){
                    app.otherPlayers.push(new Actor(element.name, element.randX, element.randY, element.color, app.stage));
                }
            });
            console.log(app.otherPlayers);
            app.stage.update();
        });

        this.socket.on('removePlayer', function(name){
            console.log(name);
            var removedPlayer = app.otherPlayers.filter(player => player.name === name);
            console.log(removedPlayer);
            app.stage.removeChild(removedPlayer);
            app.gameObject.remove(app.stage);
            app.stage.update();
        });

        this.stage.on("stagemousedown", function (event) {
            app.handleMouseDown(event);
        });
        
    },
    handleMouseDown: function(event)
    {
        console.log("Mouse Clicked");
    },
    lerp: function(valA, valB, percentVal)
	{
		percentVal = percentVal > 1 ? 1 : percentVal;
		percentVal = percentVal < 0 ? 0 : percentVal;
		return valA * (1 - percentVal) + valB * percentVal;
	},
}

app.beginLoad();