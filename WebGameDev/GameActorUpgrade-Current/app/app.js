var app ={
    stage: null,

    // Game State
    gameState: 0,

    // Game Objects
    myGameObject: null,
    stars: [],

    // Timers
    elapsedTime: 0, 

    // Input
    mousePos: {x: 0, y: 0},
    keyboard: {
        left : { keycode: 37, isPressed: false},
        up : { keycode: 38, isPressed: false},
        right : { keycode: 39, isPressed: false},
        down : { keycode: 40, isPressed: false},
        spacebar : { keycode: 32, isPressed: false},
    },

    // This stores references to our loaded assets
    assets: null,

    // Screens
    screen: null,

    setupCanvas: function()
    {
        var canvas = document.getElementById("game");
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
        this.stage = new createjs.Stage(canvas);
    },

    // Preload our scripts and assets
    beginLoad: function()
    {
        manifest = [
            {
                src: "js/actors/actor.js",
            },
            {
                src: "js/actors/bitmapactor.js",
            },
            {
                src: "js/settings.js",
            },
            {
                src: "js/utils.js",
            },
            {
                src: "js/ui/ui.js",
            },
            {
                src: "js/ui/screen.js",
            },
            {
                src: "media/audio/click.mp3",
                id: "click"
            },
            {
                src: "media/images/star.png",
                id: "star"
            },
            {
                src: "media/images/pigsheet.json",
                id:"pig",
                type:"spritesheet",
                crossOrigin:true
            },
        ];

        this.assets = new createjs.LoadQueue(true); // can add a filepath, LoadQueue(true, "../media/")

        // Use the following to use 'ogg' if 'mp3' doesn't work on browser
        createjs.Sound.alternateExtensions = ["ogg"];

        // Be sure to install the createjs sound plugin or your sounds won't play
        this.assets.installPlugin(createjs.Sound);

        // Set some event callbacks
        this.assets.on("progress", function (event) { console.log(((event.loaded / event.total) * 100) + "%"); });

        this.assets.on("complete", function (event) {
            console.log("Preload is complete!");
            app.init();
        });

        // Load our manifest into our assets object
        this.assets.loadManifest(manifest);
    },

    init: function()
    {
        this.setupCanvas();
    
        this.setState(eStates.MENUS);

        // Enable and track mouse input
        this.stage.enableMouseOver();

        this.stage.on("stagemousemove", function(event) {
            app.mousePos.x = Math.floor(event.stageX);
            app.mousePos.y = Math.floor(event.stageY);
            //console.log("Mouse: ( " + app.mousePos.x + ", " + app.mousePos.y + " )");
        });
        
        this.stage.on("stagemousedown", function (event) {
            app.handleMouseDown(event);
        });

        // Handle our basic keyboard inputs
        document.onkeydown = this.handleKeyDown;
        document.onkeyup = this.handleKeyUp;

        // Set up our update loop in the CreateJS Ticker
        createjs.Ticker.addEventListener("tick", this.update);
        createjs.Ticker.framerate = FPS;
    },

    // Our game loop
    update: function(event)
    {
        app.stage.update(event);
        
        // Get our delta time (dt)
        var dt = event.delta / 1000;

        // Update our elapsed time
        app.elapsedTime += dt;

        //Our state machine
        if(app.gameState === eStates.MENUS)
        {
            //console.log("Updating in the menus state");
        }
        else if(app.gameState === eStates.GAMEPLAY)
        {
            app.myGameObject.update(dt);

            app.stars.forEach(function(entry) {
                entry.update(dt);
            });
        }

    },

    // Handle mouse clicks
    handleMouseDown: function(event)
    {
        // play a mouse sound
        createjs.Sound.play( "click" );

        if(this.gameState === eStates.MENUS)
        {
            //this.setState(eStates.SIN_MOVE);
        }
        else if(this.gameState === eStates.GAMEPLAY)
        { 
            //this.setState(eStates.PLAYER_MOVE);
        }
    },

    // Handle keyboard key press
    handleKeyDown: function(event)
    {
        if(!evt){ var evt = window.event; }  //browser compatibility

        // Setting our key flags
        switch(evt.keyCode) {
            case app.keyboard.left.keycode:     app.keyboard.left.isPressed = true; return false;
            case app.keyboard.up.keycode:       app.keyboard.up.isPressed = true; return false;
            case app.keyboard.right.keycode:    app.keyboard.right.isPressed = true; return false;
            case app.keyboard.down.keycode:     app.keyboard.down.isPressed = true; return false;
            case app.keyboard.spacebar.keycode: app.keyboard.spacebar.isPressed = true; return false;
        }
    },

    handleKeyUp: function(event)
    {
        if(!evt){ var evt = window.event; }  //browser compatibility

        switch(evt.keyCode) {
            case app.keyboard.left.keycode:     app.keyboard.left.isPressed = false; return false;
            case app.keyboard.up.keycode:       app.keyboard.up.isPressed = false; return false;
            case app.keyboard.right.keycode:    app.keyboard.right.isPressed = false; return false;
            case app.keyboard.down.keycode:     app.keyboard.down.isPressed = false; return false;
            case app.keyboard.spacebar.keycode: app.keyboard.spacebar.isPressed = false; return false;
        }
    },

    // Change to a new state
    setState: function(newState)
    {
        this.gameState = newState;

        if(this.gameState === eStates.MENUS)
        {
            // Create a background
            var stageBG = new createjs.Shape();
            stageBG.graphics.beginFill('#fff291').drawRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
            this.stage.addChild(stageBG);

            // Create the first screen
            this.screen = new Screen("Game Actors", function() {
                app.screen.visible = false;
                app.setState(eStates.GAMEPLAY);
            })
            this.stage.addChild(this.screen);

            
        }
        else if(this.gameState === eStates.GAMEPLAY)
        {
           this.resetGame();
        }
    },

    resetGame: function()
    {
        // Make a player actor
        this.myGameObject = new playerActor(this.stage, 400, 300);

        // Make some stars
        for(var i = 0; i < 3; i++)
        {
            var pos = getRandomPointOnScreen();
            this.stars.push(new collectibleActor(this.stage, "star" + i, pos.x, pos.y, 25, "star"));
        }
    },
}