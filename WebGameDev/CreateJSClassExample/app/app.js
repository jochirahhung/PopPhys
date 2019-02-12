var app ={
    stage: null,

    // Game State
    gameState: 0,

    // Game Objects
    myGameObject: null,

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
    screen1: null,
    screen2: null,

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
                src: "js/actor.js",
            },
            {
                src: "js/settings.js",
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
    
        this.setState(eStates.PLAYER_MOVE);

        // Create a background
        var stageBG = new createjs.Shape();
        stageBG.graphics.beginFill('#fff291').drawRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.stage.addChild(stageBG);

        // Create an actor
        this.myGameObject = createSpriteActor(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, "pig");
        this.stage.addChild(this.myGameObject);
        // Play the walk animation
        this.myGameObject.goToAndPlay("walk");
        // Scale the game obejct
        this.myGameObject.scale = 0.5;

        // Screen Management Example #1
        // Toggling screens on and off
        this.screen1 = new Screen("I AM SCREEN ONE", function() {
            app.screen1.visible = false;
            app.screen2.visible = true;
        })
        this.stage.addChild(this.screen1);

        this.screen2 = new Screen("THIS IS SCREEN TWO", function() {
            app.screen2.visible = false;
            app.screen1.visible = true;
        })
        this.screen2.visible = false;
        this.stage.addChild(this.screen2);

        // Screen Management Example #2
        // Removing children so that you can create a new screen
        // this.screen1 = new Screen("Click the button and it will die...", function() {
        //     app.stage.removeChild(app.screen1);
        // });
        // this.stage.addChild(this.screen1);

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
        if(app.gameState === eStates.RANDOM)
        {
            app.myGameObject.x += (Math.random() * 10) - 5;
            app.myGameObject.y += (Math.random() * 10) - 5;
        }
        else if(app.gameState === eStates.SIN_MOVE)
        {
            app.myGameObject.y += Math.sin(app.elapsedTime) * 100 * dt;    
        }
        else if(app.gameState === eStates.PLAYER_MOVE)
        {
            if(app.keyboard.left.isPressed)
            {
                app.myGameObject.x -= SPEED * dt;
            }
            
            if(app.keyboard.right.isPressed)
            {
                app.myGameObject.x += SPEED * dt;
            }
            
            if(app.keyboard.up.isPressed)
            {
                app.myGameObject.y -= SPEED * dt;
            }
            
            if(app.keyboard.down.isPressed)
            {
                app.myGameObject.y += SPEED * dt;
            }

        }

    },

    // Handle mouse clicks
    handleMouseDown: function(event)
    {
        // play a mouse sound
        createjs.Sound.play( "click" );

        if(this.gameState === eStates.RANDOM)
        {
            this.setState(eStates.SIN_MOVE);
        }
        else if(this.gameState === eStates.SIN_MOVE)
        { 
            this.setState(eStates.PLAYER_MOVE);
        }
        else if(this.gameState === eStates.PLAYER_MOVE)
        { 
            this.setState(eStates.RANDOM);
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

        if(this.gameState === eStates.RANDOM)
        {
            //console.log("Changing state to eStates.RANDOM");
        }
        else if(this.gameState === eStates.SIN_MOVE)
        {
            //console.log("Changing state to eStates.SIN_MOVE");
        }
        else if(this.gameState === eStates.PLAYER_MOVE)
        {
            //console.log("Changing state to eStates.PLAYER_MOVE");
        }
    },
}