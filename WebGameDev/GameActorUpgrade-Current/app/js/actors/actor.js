// A basic actor class 
function Actor(nameString, x, y, r)
{
    this.name = nameString;
    this.pos = {x: x, y: y};

    this.boundsRadius = r;

    if(DEBUG)
    {
        this.debugShape = new createjs.Shape();
        this.debugShape.graphics.beginStroke("#f00").drawCircle(0,0, this.boundsRadius);
        this.debugShape.x = this.pos.x;
        this.debugShape.y = this.pos.y;
        app.stage.addChild(this.debugShape);
    }
}
Actor.prototype.update = function(dt)
{
    if(DEBUG)
    {
        this.debugShape.x = this.pos.x;
        this.debugShape.y = this.pos.y;
    }  
};

// An actor that has a sprite component
function spriteActor(parent, nameString, x, y, r, imageID)
{
    Actor.call(this, nameString, x, y, r);

    this.image = new createjs.Sprite(app.assets.getResult(imageID));

    this.image.x = this.pos.x;
    this.image.y = this.pos.y;

    parent.addChild(this.image);
}
spriteActor.prototype = Object.create(Actor.prototype);
spriteActor.prototype.constructor = spriteActor;
spriteActor.prototype.update = function(dt)
{
    this.image.x = this.pos.x;
    this.image.y = this.pos.y;

    Actor.prototype.update.call(this, dt);
}


// A player actor that inherits from spriteActor
function playerActor(parent, x, y)
{
    spriteActor.call(this, parent, "playerActor", x, y, 100, "pig");

    this.image.gotoAndPlay("walk");

    this.update = function(dt)
    {
        if(app.keyboard.left.isPressed)
        {
            this.pos.x -= SPEED * dt;
        }
        
        if(app.keyboard.right.isPressed)
        {
            this.pos.x += SPEED * dt;
        }
        
        if(app.keyboard.up.isPressed)
        {
            this.pos.y -= SPEED * dt;
        }
        
        if(app.keyboard.down.isPressed)
        {
            this.pos.y += SPEED * dt;
        }

        // Test for collision
        app.stars.forEach(function(entry){
            if(areActorsColliding(this, entry))
            {
                entry.onCollect();
            }
        }, this);

        spriteActor.prototype.update.call(this, dt);
    }
}
playerActor.prototype = Object.create(spriteActor.prototype);
playerActor.prototype.constructor = playerActor;