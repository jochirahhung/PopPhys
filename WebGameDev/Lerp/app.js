var app ={
    stage: null,

	// My game object
	myGameObject: null,
	myGameObjectColor: null, 

	// Values to lerp between
	gameObjectColor: {
		start: {
			r: 255,
			g: 150,
			b: 0
		},
		target: {
			r: 0,
			g: 75,
			b: 255
		}
	},
	gameObjectRotation: {
		start: 0,
		target: 135
	},
	gameObjectScale: {
		start: 1,
		target: 0.5
	},
	gameObjectPosition: {
		start: {
			x: 150,
			y: 200
		},
		target: {
			x: 650,
			y: 400
		}
	},
	
	// Lerp timers for both directions
	lerpToTargetTimer: 0,
	lerpToStartTimer: 0,
	lerpMaxTime: 4,

	// Screen Text
	screenText: null,

	mousePos: {x:0, y:0},


    setupCanvas: function()
    {
        var canvas = document.getElementById("game");
        canvas.width = 800;
        canvas.height = 600;
        this.stage = new createjs.Stage(canvas);
    },

    init: function()
    {
        this.setupCanvas();
	
        // Capture our keyboard inputs and pass them down to our handler functions
        document.onkeydown = this.handleKeyDown;
		document.onkeyup = this.handleKeyUp;
		
		// Set up our mouse
		this.stage.enableMouseOver();

		this.stage.on("stagemousemove", function(event) {
            app.mousePos.x = Math.floor(event.stageX);
            app.mousePos.y = Math.floor(event.stageY);
            //console.log("Mouse: ( " + app.mousePos.x + ", " + app.mousePos.y + " )");
        });

        // Set up our update loop in the CreateJS Ticker
        createjs.Ticker.addEventListener("tick", this.update);
        createjs.Ticker.framerate = 30;
		
		// Setup our game
		this.resetGame();		

		// Set up the screen
		this.scaleText = new createjs.Text("", "24px Arial");
		this.scaleText.x = 50;
		this.scaleText.y = 50;
		this.stage.addChild(this.scaleText);

		this.rotationText = new createjs.Text("", "24px Arial");
		this.rotationText.x = 50;
		this.rotationText.y = 500;
		this.stage.addChild(this.rotationText);

		this.positionText = new createjs.Text("", "24px Arial");
		this.positionText.x = 400;
		this.positionText.y = 50;
		this.stage.addChild(this.positionText);

		this.colorText = new createjs.Text("", "24px Arial");
		this.colorText.x = 400;
		this.colorText.y = 500;
		this.stage.addChild(this.colorText);

		"SCALE: " + this.myGameObject.scale

    },


	resetGame: function()
	{
		// Create an object to move around
		this.myGameObject = new createjs.Container();
		this.myGameObject.x = this.gameObjectPosition.start.x;
		this.myGameObject.y = this.gameObjectPosition.start.y;

		// Give my game object bounds and a new registration point
		// These bounds are set to the same size as the object
		// We then set the registration point of the object to half of its bounds width and height
		// Comment this out and watch the rotation to see the difference
		this.myGameObject.setBounds(0, 0, 100, 100);
		this.myGameObject.regX = this.myGameObject.getBounds().width / 2;
		this.myGameObject.regY = this.myGameObject.getBounds().height / 2;

		// Create a shape to give my game object some visuals
		var shapeRect = new createjs.Shape();
		this.myGameObjectColor = shapeRect.graphics.beginFill('#FFF').command;
		shapeRect.graphics.drawRect(0, 0, 100, 100);
		this.myGameObject.addChild(shapeRect);

		// Add my game object to the stage
		this.stage.addChild(this.myGameObject);
	},
	
    // Our game loop
    update: function(event)
    {
        app.stage.update(event);
        
        // Get our delta time (dt)
		var dt = event.delta / 1000;
		
		// Check our first lerp timer, which counts up
		if(app.lerpToTargetTimer <= app.lerpMaxTime)
		{
			// If the timer is below the max time, increase the timer
			app.lerpToTargetTimer += dt;
			
			// If this timer is above the max, set the next timer to full
			if(app.lerpToTargetTimer > app.lerpMaxTime)
			{
				app.lerpToStartTimer  = app.lerpMaxTime;
			}

			// How far are we into our lerping, OR, what percent of our lerp has occured?
			var percentVal = app.lerpToTargetTimer / app.lerpMaxTime;

			app.updateGameObject(percentVal);
		}
		// Check our second lerp timer, which counts down
		else if (app.lerpToStartTimer > 0)
		{
			// If the timer is greater than zero, decrease the timer
			app.lerpToStartTimer -= dt;

			// If this timer is below 0, reset the original timer
			if(app.lerpToStartTimer <= 0)
			{
				app.lerpToTargetTimer = 0;
			}

			// How far are we into our lerping, OR, what percent of our lerp has occured?
			var percentVal = app.lerpToStartTimer / app.lerpMaxTime;

			app.updateGameObject(percentVal);
		}

	},

	// Handles all of the lerping, called from update
	updateGameObject: function(percentVal)
	{
		// Scale the object
		this.myGameObject.scale = this.lerp(this.gameObjectScale.start, this.gameObjectScale.target, percentVal);
		
		// Rotate the object
		this.myGameObject.rotation = this.lerp(this.gameObjectRotation.start, this.gameObjectRotation.target, percentVal);
	
		// Change the object's position
		this.myGameObject.x = this.lerp(this.gameObjectPosition.start.x, this.gameObjectPosition.target.x, percentVal);
		this.myGameObject.y = this.lerp(this.gameObjectPosition.start.y, this.gameObjectPosition.target.y, percentVal);
	
		// Change the object's color
		var r = this.lerp(this.gameObjectColor.start.r, this.gameObjectColor.target.r, percentVal);
		var g = this.lerp(this.gameObjectColor.start.g, this.gameObjectColor.target.g, percentVal);
		var b = this.lerp(this.gameObjectColor.start.b, this.gameObjectColor.target.b, percentVal);
		this.myGameObjectColor.style = "rgba(" + r + "," + g + "," + b + ",255)";

		// Update the text displays
		this.updateTextDisplays(r, g, b);
	},


	// Our actual lerp (linear interpolation) function
	lerp: function(valA, valB, percentVal)
	{
		// Clamp the percentVal
		percentVal = percentVal > 1 ? 1 : percentVal;
		percentVal = percentVal < 0 ? 0 : percentVal;
		return valA * (1 - percentVal) + valB * percentVal;
	},

	// Update all the text to show proper values
	updateTextDisplays: function(r, g, b)
	{
		this.scaleText.text = "SCALE: " + (Math.floor(this.myGameObject.scale * 100) / 100);
		this.rotationText.text = "ROTATION: " + (Math.floor(this.myGameObject.rotation * 100) / 100);
		this.positionText.text = "POSITION: { x: " + (Math.floor(this.myGameObject.x * 100) / 100) + ", y: " + (Math.floor(this.myGameObject.y * 100) / 100) + " }";
		this.colorText.text = "COLOR: { r: " + Math.floor(r) + ", g: " + Math.floor(g) + ", b: " + Math.floor(b) + " }";
	}
}