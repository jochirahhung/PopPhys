var app ={
    stage: null,

    currentGameState: 0,

    gameObject: null,
    gameObject2: null,

    elapsedTime: 0, 

    mousePos: {x: 0, y: 0},
    keyboard: {
        left : { keycode: 37, isPressed: false},
        up : { keycode: 38, isPressed: false},
        right : { keycode: 39, isPressed: false},
        down : { keycode: 40, isPressed: false},
        w : { keycode: 87, isPressed: false},
        a : { keycode: 65, isPressed: false},
        s : { keycode: 83, isPressed: false},
        d : { keycode: 68, isPressed: false},
        spacebar : { keycode: 32, isPressed: false},
    },

    text: null,
    assets: null,

    screen1: null,
    screen2: null,
    screen3: null,
    screen4: null,
    value: 1,

    setupCanvas: function()
    {
        var canvas = document.getElementById("game");
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;
        this.stage = new createjs.Stage(canvas);
    },

    beginLoad: function()
    {
        manifest = [
            {
                src: "js/sprite.js",
            },
            {
                src: "js/setting.js",
            },
            {
                src: "js/ui/ui.js",
            },
            {
                src: "js/ui/screen.js",
            },
            {
                src: "media/images/wumpa.png",
                id:"wumpa"
            },
            {
                src: "media/images/pigsheet.json",
                id:"pig",
                type:"spritesheet",
                crossOrigin:true
            },
        ];
        this.assets = new createjs.LoadQueue(true);

        this.assets.on("complete", function (event) {
            app.init();
        });

        this.assets.loadManifest(manifest);
    },

    init: function()
    {
        this.setupCanvas();
        this.setState(gameStates.MENU);

        var stageBG = new createjs.Shape();
        stageBG.graphics.beginFill('#420DAB').drawRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
        this.stage.addChild(stageBG);

        this.gameObject = Sprite(SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, "pig");
        this.gameObject.gotoAndPlay("walk");
        this.gameObject.scale = 0.5;

        this.gameObject2 = Bitmap(Math.random() * SCREEN_WIDTH, Math.random() * SCREEN_HEIGHT, "wumpa", "png");
        this.stage.addChild(this.gameObject);
        this.stage.addChild(this.gameObject2);

        this.screen1 = new Screen("MAIN MENU", "Instructions", function() {
            app.screen1.visible = false;
            app.screen2.visible = false;
            app.screen3.visible = false;
            app.screen4.visible = true;
            app.currentGameState = gameStates.INSTRUCTIONS;
        })
        this.stage.addChild(this.screen1);

        this.screen2 = new Screen("GAME OVER", "Return To Menu", function() {
            app.screen2.visible = false;
            app.screen1.visible = true;
            app.screen3.visible = false;
            app.screen4.visible = false;
            app.currentGameState = gameStates.MENU;
        })
        this.screen3 = new Screen("PLAY GAME", "Quit Game", function() {
            app.screen2.visible = true;
            app.screen1.visible = false;
            app.screen3.visible = false;
            app.screen4.visible = false;
            app.currentGameState = gameStates.GAMEOVER;
        })
        this.screen4 = new Screen("Instructions: Up-W   Down-S    Left-A    Right-D:  You have 20 seconds to collect as much fruit as possible", "Play Game", function(){
            app.screen2.visible = false;
            app.screen1.visible = false;
            app.screen3.visible = true;
            app.screen4.visible = false;
            app.currentGameState = gameStates.GAMEPLAY;
        })
        this.screen2.visible = false;
        this.screen3.visible = false;
        this.screen4.visible = false;
        this.stage.addChild(this.screen2);
        this.stage.addChild(this.screen3);
        this.stage.addChild(this.screen4);
        this.stage.enableMouseOver();
        
        this.stage.on("stagemousemove", function(event) {
            app.mousePos.x = Math.floor(event.stageX);
            app.mousePos.y = Math.floor(event.stageY);
            document.getElementById("x").innerHTML = "X: " + app.mousePos.x;
            document.getElementById("y").innerHTML = "Y: " + app.mousePos.y;
        });

        

        document.onkeydown = this.handleKeyDown;
        document.onkeyup = this.handleKeyUp;

        createjs.Ticker.addEventListener("tick", this.update);
        createjs.Ticker.framerate = FPS;
    },

    
    update: function(event)
    {
        app.stage.update(event);
        text = document.getElementById("text");
        var dt = event.delta / 1000;


        if(app.currentGameState === gameStates.MENU)
        {
            console.log("This is the Main Menu");
            document.getElementById("score").innerHTML = "Score: ";
            app.value = 0;
        }
        else if(app.currentGameState === gameStates.GAMEOVER)
        {
            console.log("This is the gameover screen"); 
        }
        else if(app.currentGameState === gameStates.INSTRUCTIONS){
            console.log("These are the instructions");
        }
        else if(app.currentGameState === gameStates.GAMEPLAY)
        {
            app.elapsedTime += dt;
            if(app.keyboard.left.isPressed || app.keyboard.a.isPressed)
            {
                app.gameObject.x -= SPEED * dt;
            }
            
            if(app.keyboard.right.isPressed || app.keyboard.d.isPressed)
            {
                app.gameObject.x += SPEED * dt;
            }
            
            if(app.keyboard.up.isPressed || app.keyboard.w.isPressed)
            {
                app.gameObject.y -= SPEED * dt;
            }
            
            if(app.keyboard.down.isPressed || app.keyboard.s.isPressed)
            {
                app.gameObject.y += SPEED * dt;
            }
            
            if((app.elapsedTime) >= 20){
                app.currentGameState = gameStates.GAMEOVER
                app.screen3.visible = false;
                app.screen2.visible = true;
                app.elapsedTime = 0;
            }
            else{
                console.log(app.elapsedTime);
            }

            if(areActorsColliding(app.gameObject, app.gameObject2)){
                app.gameObject2.x = Math.random() * SCREEN_WIDTH;
                app.gameObject2.y = Math.random() * SCREEN_HEIGHT;
                app.value += 25;
            }
            document.getElementById("score").innerHTML = "Score: " + app.value;
            document.getElementById("timer").innerHTML = "Timer: " + app.elapsedTime;

        }

    },

    handleMouseDown: function(event)
    {

        if(this.currentGameState === gameStates.MENU)
        {
            this.setState(gameStates.INSTRUCTIONS);
        }
        else if(this.currentGameState === gameStates.GAMEPLAY)
        { 
            this.setState(gameStates.GAMEOVER);
        }
        else if(this.currentGameState === gameStates.GAMEOVER)
        { 
            this.setState(gameStates.MENU);
        }
        else if(this.currentGameState === gameStates.INSTRUCTIONS){
            this.setState(gameStates.GAMEPLAY);
        }
    },


    handleKeyDown: function(event)
    {
        if(!evt){ var evt = window.event; }

        switch(evt.keyCode) {
            case app.keyboard.left.keycode:     
                app.keyboard.left.isPressed = true; 
                console.log("Left Arrow");
                return false;
            case app.keyboard.up.keycode:       
                app.keyboard.up.isPressed = true; 
                console.log("Up Arrow");
                return false;
            case app.keyboard.right.keycode:    
                app.keyboard.right.isPressed = true; 
                console.log("Right Arrow");
                return false;
            case app.keyboard.down.keycode:     
                app.keyboard.down.isPressed = true; 
                console.log("Down Arrow");
                return false;
            case app.keyboard.spacebar.keycode: 
                app.keyboard.spacebar.isPressed = true;
                console.log("Spacebar");
                return false;
            case app.keyboard.w.keycode:
                app.keyboard.w.isPressed = true;
                console.log("W Key");
                return false;
            case app.keyboard.a.keycode:
                app.keyboard.a.isPressed = true;
                console.log("A Key");
                return false;
            case app.keyboard.s.keycode:
                app.keyboard.s.isPressed = true;
                console.log("S Key");
                return false;
            case app.keyboard.d.keycode:
                app.keyboard.d.isPressed = true;
                console.log("D Key");
                return false;
        }
    },

    handleKeyUp: function(event)
    {
        if(!evt){ var evt = window.event; }  

        switch(evt.keyCode) {
            case app.keyboard.left.keycode:     
                app.keyboard.left.isPressed = false; 
                return false;
            case app.keyboard.up.keycode:       
                app.keyboard.up.isPressed = false; 
                return false;
            case app.keyboard.right.keycode:    
                app.keyboard.right.isPressed = false; 
                return false;
            case app.keyboard.down.keycode:     
                app.keyboard.down.isPressed = false; 
                return false;
            case app.keyboard.spacebar.keycode: 
                app.keyboard.spacebar.isPressed = false; 
                return false;
            case app.keyboard.w.keycode: 
                app.keyboard.w.isPressed = false; 
                return false;
            case app.keyboard.a.keycode: 
                app.keyboard.a.isPressed = false; 
                return false;
            case app.keyboard.s.keycode: 
                app.keyboard.s.isPressed = false; 
                return false;
            case app.keyboard.d.keycode: 
                app.keyboard.d.isPressed = false; 
                return false;
        }
    },

    setState: function(newState)
    {
        this.currentGameState = newState;

        if(this.currentGameState === gameStates.MENU)
        {
            this.screen1.visible = true;
        }
        else if(this.currentGameState === gameStates.INSTRUCTIONS){
            this.screen4.visible = true;
        }
        else if(this.currentGameState === gameStates.GAMEPLAY)
        {
            this.screen3.visible = true;
        }
        else if(this.currentGameState === gameStates.GAMEOVER)
        {
            this.screen2.visible = true;
        }
    },
}