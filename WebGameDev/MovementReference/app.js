// MOVEMENT EXAMPLES
// **********************
//
// This project showcases two different ways to move objects
// 1) Rotating an object and moving forwards and backwards in that direction
// 2) A game object that automatically rotates towards and follows the mouse
//
// This has all been done using CreateJS and some math.
// Open the index.html and run this first to see what it's doing
//
// Table of Contents:
// 160-206	- Manually rotating and driving a game object (This section also has an explainer for the math)
// 208-225	- Having an object follow the mouse

var app ={
    stage: null,

	// My game object
	myGameObject: null,
	
	// Screen Text
	screenText: null,

    // Input
    keyboard: {
        left : { keycode: 37, isPressed: false},
        up : { keycode: 38, isPressed: false},
        right : { keycode: 39, isPressed: false},
        down : { keycode: 40, isPressed: false},
        spacebar : { keycode: 32, isPressed: false},
	},
	mousePos: {x:0, y:0},

	// Game state
	eStates: {
		DRIVE_MODE: 0,
		FOLLOW_MODE: 1
	},
	gameState: null,

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
        
        this.stage.on("stagemousedown", function (event) {
            app.swapState();
        });

        // Set up our update loop in the CreateJS Ticker
        createjs.Ticker.addEventListener("tick", this.update);
        createjs.Ticker.framerate = 30;
		
		// Set up the screen
		this.screenText = new createjs.Text("", "14px Arial");
		this.stage.addChild(this.screenText);
		
		// Set our initial state
		this.setState(this.eStates.DRIVE_MODE);

		// Setup our game
		this.resetGame();		
    },


	resetGame: function()
	{
		// Create an object to move around
		this.myGameObject = new createjs.Container();
		this.myGameObject.x = 400;
		this.myGameObject.y = 300;

		// Give my game object bounds and a new registration point
		// These bounds are set to the same size as the object
		// We then set the registration point of the object to half of its bounds width and height
		// Comment this out and watch the rotation to see the difference
		this.myGameObject.setBounds(0, 0, 100, 25);
		this.myGameObject.regX = this.myGameObject.getBounds().width / 2;
		this.myGameObject.regY = this.myGameObject.getBounds().height / 2;

		// Create some shapes to give my game object some visuals
		var shapeRect = new createjs.Shape();
		shapeRect.graphics.beginFill('#666').drawRect(0, 0, 100, 24);
		this.myGameObject.addChild(shapeRect);

		var shapeCirc = new createjs.Shape();
		shapeCirc.graphics.beginFill('#0D7').drawCircle(100, 12, 12);
		this.myGameObject.addChild(shapeCirc);

		// Add my game object to the stage
		this.stage.addChild(this.myGameObject);
	},

	// Handle down keyboard key presses
	// We check these booleans in our update function
    handleKeyDown: function(event)
    {
        if(!evt){ var evt = window.event; }  //browser compatibility

        // Check which keys is being pressed, and then set the appropriate flag
        switch(evt.keyCode) {
            case app.keyboard.left.keycode:     app.keyboard.left.isPressed = true; return false;
            case app.keyboard.up.keycode:       app.keyboard.up.isPressed = true; return false;
            case app.keyboard.right.keycode:    app.keyboard.right.isPressed = true; return false;
            case app.keyboard.down.keycode:     app.keyboard.down.isPressed = true; return false;
            case app.keyboard.spacebar.keycode: app.keyboard.spacebar.isPressed = true; return false;
        }
    },

	// Handle up keyboard key presses
	// We check these booleans in our update function
    handleKeyUp: function(event)
    {
        if(!evt){ var evt = window.event; }  //browser compatibility

		// Check which keys is being pressed, and then set the appropriate flag
        switch(evt.keyCode) {
            case app.keyboard.left.keycode:     app.keyboard.left.isPressed = false; return false;
            case app.keyboard.up.keycode:       app.keyboard.up.isPressed = false; return false;
            case app.keyboard.right.keycode:    app.keyboard.right.isPressed = false; return false;
            case app.keyboard.down.keycode:     app.keyboard.down.isPressed = false; return false;
            case app.keyboard.spacebar.keycode: app.keyboard.spacebar.isPressed = false; return false;
        }
    },
	
    // Our game loop
    update: function(event)
    {
        app.stage.update(event);
        
        // Get our delta time (dt)
        var dt = event.delta / 1000;

		// Set up some values for moving and rotating
		var ROT_SPEED = 100;
		var MOVE_SPEED = 100;
		
		switch(app.gameState)
		{
			case app.eStates.DRIVE_MODE:
			// ** In this section we poll the keyboard keys and react if they're down **
			
			// We're changing the rotation of the createjs object when left or right is pressed.
			// This rotation is in degrees.
			if(app.keyboard.left.isPressed)
			{
				app.myGameObject.rotation -= ROT_SPEED * dt;
			}
			
			if(app.keyboard.right.isPressed)
			{
				app.myGameObject.rotation += ROT_SPEED * dt;
			}
			
			// In the following two if statements, we're changing the game object's x and y coordinates so that it moves in the direction it's rotated.
			// Don't worry too much about the math, but by using sine and cosine, we can find the amount we need to move on the x and the y to move a certain distance on an angle.
			// There's an explanation below if you're interested, otherwise just skip ahead to the if statements.
			//
			// EXPLANATION:
			// For example, let's say we're moving an object 10 units, and the object's angle is 0 degrees (which means it's facing to the right).
			// As we've seen, a basic way to do movement is to add or subtract an amount to move to the position of an object (speed * dt).
			// Since we're moving 10 units, our basic movement amount is 10 * dt.
			// To get our movement to happen on the angle, we feed the angle into Cos and Sin and multiply our movement by the result, Cos for x, and Sin for y.
			// Cos(0) = 1, which means we add (10 * dt * 1) to our x, which is our full positive movement in the x direction.
			// Sin(0) = 0, which means we add (10 * dt * 0) to our y, which is no distance moved on the y direction.
			// So, with an angle of 0 degrees, which means the object is facing to the right, we moved the object 10 units to the right, and no units up.
			// To see a visualization of this, see the Try It! section of this page:
			// https://www.mathsisfun.com/sine-cosine-tangent.html
			
			// Cos and Sin use radians instead of degrees, so we need to convert our angle here
			var rotation = app.myGameObject.rotation / 360 * 2 * Math.PI;
			
			if(app.keyboard.up.isPressed)
			{		
				// Add to our x and y based on our rotation
				app.myGameObject.x += Math.cos(rotation) * MOVE_SPEED * dt;
				app.myGameObject.y += Math.sin(rotation) * MOVE_SPEED * dt;
			}
			
			if(app.keyboard.down.isPressed)
			{
				// Subtract from our x and y based on our rotation
				app.myGameObject.x -= Math.cos(rotation) * MOVE_SPEED * dt;
				app.myGameObject.y -= Math.sin(rotation) * MOVE_SPEED * dt;
			}
			return false;
		
			case app.eStates.FOLLOW_MODE:
			// The math here will be very similar to what we used above, except that we'll be determining the rotation
			// We'll use the position of the mouse and the position of the object to figure it out

			// We need the angle in both radians and degrees
			var angleRad = Math.atan2(app.mousePos.y - app.myGameObject.y, app.mousePos.x - app.myGameObject.x);
			var angleDeg = angleRad * 180 / Math.PI;
			app.myGameObject.rotation = angleDeg;

			// Now, we get the distance between both points, so that we can stop moving when we're close enough
			var distance = Math.sqrt(Math.pow((app.mousePos.x - app.myGameObject.x), 2) + Math.pow((app.mousePos.y - app.myGameObject.y), 2));

			// If the game object is far enough away, moves it towards the player
			if(distance > 15)
			{
				app.myGameObject.x += Math.cos(angleRad) * MOVE_SPEED * dt;
				app.myGameObject.y += Math.sin(angleRad) * MOVE_SPEED * dt;
			}

			return false;
		}
	},
	
	setState: function(newState)
	{
		this.gameState = newState;

		switch(this.gameState)
		{
			case this.eStates.DRIVE_MODE:
				this.screenText.text = "Click to change modes\n\nDRIVE MODE:\nLeft/Right - Rotate\nUp/Down - Forwards/Backwards";
				return false;
			case this.eStates.FOLLOW_MODE:
				this.screenText.text = "Click to change modes\n\nFOLLOW MODE:\nGame object will follow your mouse";
				return false;
		}
	},

	swapState: function()
	{
		if(this.gameState === this.eStates.DRIVE_MODE)
		{
			this.setState(this.eStates.FOLLOW_MODE);
		}
		else
		{
			this.setState(this.eStates.DRIVE_MODE);
		}
	}
}