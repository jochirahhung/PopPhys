// GAME PHYSICS USING CREATEJS and MATTER.JS
// ****************
// This project can be used as reference for how to add physics to your game using the Matter.js physics engine
// This introduction is a summary of what you can find in the files in the projects
// Run the index.html first to see what's going on
// 
//	Links:
//		Matter.js - http://brm.io/matter-js/
//		Demoes - http://brm.io/matter-js/demo/#mixed
//		Docs - http://brm.io/matter-js/docs/
//
//	Initial set-up (Refer to the index.html in this folder)
//		Download matter.js, either the normal or minified version, and place it in your project
//		Release can be found here: https://github.com/liabru/matter-js/releases (just click on matter.js or matter.min.js to download that file)
//		Load it in a script tag	in your html file
//
//	Some useful info:
//		Matter.js bodies, when added to a matter.js world, are what creates your physics simulation
//		In the examples below, we use just two of the kinds of Matter.js bodies
//		Each body has an options object that can take lots of properties
//		A few used in this example are:
//			a label (the name we pass in),
//			the mass,
//			and whether it moves or not (isStatic: true means it won't move)
//		There is a lot that can be done with matter.js, and this just scratches the surface
//
//	Table of contents (uses line numbers)
//	46-57 	- Matter.js set up
//	65-66 	- Game object containers
//	79-80 	- Settings for player movement
//	119-133 - Reacting to physics object collisions
//	137-143 - Show the debug rendering for the physics world
//	157-158 - Update the Matter.js physics world
//	177-189 - How to remove a Matter.js body
// 	211-241 - Creating actors with physics objects and createjs shapes to our create our game world
//	249-274 - Actor with a circle shape and physics object
//	276-303 - Actor with a rectangle shape and physics object
//	305-341 - Actor that uses physics to jump and move
//	258,334 - Set velocity on a physics body
//	320,326 - Adding velocity over time (speeding up/accelerating)
//	265		- Create a circle physics body
//	292		- Create a rectangle physics body

// Matter.js Set Up
//****************
// Aliases for MatterJS components
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
	Bodies = Matter.Bodies;
	Body = Matter.Body;
	Events = Matter.Events;

// create a MatterJS engine
var engine = Engine.create();

// create a renderer to draw debug visuals for MatterJS
var render = null;

// The app object
var app ={
    stage: null,

	// My game objects
	gameObjects: [],
	playerObject: null, 

	// Platform
	platform: null,

	// Input
    keyboard: {
        left : { keycode: 37, isPressed: false},
        right : { keycode: 39, isPressed: false},
        spacebar : { keycode: 32, isPressed: false},
	},
	
	// Settings
	moveSpeed: 20,
	jumpSpeed: -10,
	
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

        // Set up our update loop in the CreateJS Ticker
        createjs.Ticker.addEventListener("tick", this.update);
		createjs.Ticker.framerate = 60;
		
		// Background & Text
		var back =  new createjs.Shape();
		back.graphics.beginFill('#006').drawRect(0, 0, 800, 600);
		this.stage.addChild(back);

		var text = new createjs.Text("Click circles to make them hop\nLeft & Right to move\nSpacebar to jump\nP adds or removes the player\nPlayer collisions reported in console log", "16px Arial", "#fff");
		text.x = 400;
		text.y = 25;
		text.textAlign = "center";
		this.stage.addChild(text);

		// Set up our game
		this.resetGame();

		// Enable mouse input
		this.stage.enableMouseOver();
		
		// Capture keyboard inputs and pass them down to the handler functions
        document.onkeydown = this.handleKeyDown;
        document.onkeyup = this.handleKeyUp;

		// React to collision events
		Events.on(engine, "collisionStart", function(event) {
			var pairs = event.pairs;
			
			// If we have a pair that contains the player, output what it collided with
			for (var i = 0; i < pairs.length; i++) {
				var pair = pairs[i];
				// These labels are set in the actor constructors at the bottom of the file
				if(pair.bodyA.label === "player" || pair.bodyB.label === "player")
				{
					console.log(pair.bodyA.label + " collided with " + pair.bodyB.label );

					// Reset the player's jump when they collide with something
					app.playerObject.canJump = true;
				}
			}
		});

		// Uncomment this to see the MatterJS debug render
		// var canvas = document.getElementById("game");
		// render = Render.create({
		// 	canvas: canvas,
		// 	engine: engine
		// });
		//Render.run(render);
    },

    // Our game loop
    update: function(event)
    {
        // Get our delta time (dt)
        var dt = event.delta / 1000;

		// Update our game objects
		if (app.playerObject) { app.playerObject.update(dt); };

		app.gameObjects.forEach(function(entry){entry.update(dt)});

		// Update MatterJS
		Engine.update(engine, event.delta);

		// Update CreateJS
		app.stage.update(event);
	},
	
	// Handle down keyboard key presses
	// We check these booleans in our update function
    handleKeyDown: function(event)
    {
        if(!evt){ var evt = window.event; }  //browser compatibility

        // Check which keys is being pressed, and then set the appropriate flag
        switch(evt.keyCode) {
            case app.keyboard.left.keycode:     app.keyboard.left.isPressed = true; return false;
            case app.keyboard.right.keycode:    app.keyboard.right.isPressed = true; return false;
			case app.keyboard.spacebar.keycode: app.keyboard.spacebar.isPressed = true; return false;
			// If you press 'P' it will add and remove the player
			case 80:
				if(app.playerObject)
				{
					// Remove the MatterJS body
					World.remove(engine.world, app.playerObject.body);
					// Remove the CreateJS shape
					app.stage.removeChild(app.playerObject.shape);
					// Remove the object reference
					app.playerObject = null;
				}
				else
				{
					app.makePlayerObject();
				}
				
			return false;
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
            case app.keyboard.right.keycode:    app.keyboard.right.isPressed = false; return false;
            case app.keyboard.spacebar.keycode: app.keyboard.spacebar.isPressed = false; return false;
        }
    },

	// Create all of the elements we need for our game
	resetGame: function()
	{
		// Make the player object
		this.makePlayerObject();
		
		// Make some circles that drop with gravity
		var circleStartX = 300;
		for (var i = 0; i < 3; i++)
		{
			this.gameObjects.push(new physicsCircleActor(this.stage, "circle" + i, circleStartX + (i * 99), 100, 40, 100, '#f00', false));
		}

		// Add some pegs to fall through
		var pegNum = 1;
		var pegStartX = 200;
		var pegStartY = 200;
		for (var i = 0; i < 5; i++)
		{
			this.gameObjects.push(new physicsCircleActor(this.stage, "peg" + pegNum, pegStartX  + (i  * 100), pegStartY, 10, 20, "#fff", true));
			pegNum++;
		}
		pegStartX = 150;
		pegStartY = 300;
		for (var i = 0; i < 6; i++)
		{
			this.gameObjects.push(new physicsCircleActor(this.stage, "peg" + pegNum, pegStartX  + (i  * 100), pegStartY, 10, 20, "#fff", true));
		}

		// Make a platform at the bottom
		this.gameObjects.push(new physicsRectangleActor(this.stage, "platform", 400, 500, 1200, 75, '#0f0', true));
	},

	makePlayerObject: function ()
	{
		this.playerObject = new physicsPlayerActor(this.stage, "player", 595, 100, 20, 50, '#f0f', false);
	}
}

// Make a circular physics actor
function physicsCircleActor(parent, name, x, y, r, mass, color, isStatic)
{
	// Create a circle that reacts to clicks
	this.shape = new createjs.Shape();
	this.shape.graphics.beginFill(color).drawCircle(0, 0, r);
	this.shape.x = x;
	this.shape.y = y;
	this.shape.on("click", function(){
		Body.setVelocity(this.body, {x: 0, y: -5});
	}, this);

	// Add my game object to the stage
	parent.addChild(this.shape);

	// Create a MatterJS Physics Body
	this.body = Bodies.circle(x, y, r, {isStatic: isStatic, mass: mass, label: name});

	// Add this body to the physics world
	World.add(engine.world, this.body);
}
physicsCircleActor.prototype.update = function(dt)
{
	this.shape.x = this.body.position.x;
	this.shape.y = this.body.position.y;
}

// Make a rectangular physics actor
function physicsRectangleActor(parent, name, x, y, w, h, color, isStatic)
{
	// Create a rectangle
	this.shape = new createjs.Shape();
	this.shape.graphics.beginFill(color).drawRect(0, 0, w, h);
	this.shape.x = x;
	this.shape.y = y;
	this.shape.setBounds(w, h);
	this.shape.regX = w / 2;
	this.shape.regY = h / 2;
	
	// Add my game object to the stage
	parent.addChild(this.shape);

	// Create a MatterJS Physics Body
	this.body = Bodies.rectangle(x, y, w, h, {isStatic: isStatic, label: name});

	// Add this body to the physics world
	World.add(engine.world, this.body);

	// Update the position of our circle actor with its physics body
	this.update = function(dt)
	{
		this.shape.x = this.body.position.x;
		this.shape.y = this.body.position.y;
	}
}

// Make a circle that's set up to be the player actor
function physicsPlayerActor(parent, name, x, y, r, mass, color, isStatic)
{
	physicsCircleActor.call(this, parent, name, x, y, r, mass, color, isStatic)

	// A boolean to track whether we can jump again or not
	this.canJump = true;

	// Update the position of our circle actor with its physics body
	this.update = function(dt)
	{
		// Move the physics body around
		if(app.keyboard.left.isPressed)
		{
			var newVelocity = Matter.Vector.create(this.body.velocity.x - (app.moveSpeed * dt), this.body.velocity.y);
			Body.setVelocity(this.body, newVelocity);
		}
		
		if(app.keyboard.right.isPressed)
		{
			var newVelocity = Matter.Vector.create(this.body.velocity.x + (app.moveSpeed * dt), this.body.velocity.y);
			Body.setVelocity(this.body, newVelocity);
		}

		if(app.keyboard.spacebar.isPressed && this.canJump)
		{
			this.canJump = false;

			var newVelocity = Matter.Vector.create(this.body.velocity.x, this.body.velocity.y + app.jumpSpeed);
			Body.setVelocity(this.body, newVelocity);
		}

		physicsCircleActor.prototype.update.call(this, dt);
	}
}
physicsPlayerActor.prototype = Object.create(physicsCircleActor);
physicsPlayerActor.prototype.constructor = physicsPlayerActor;
