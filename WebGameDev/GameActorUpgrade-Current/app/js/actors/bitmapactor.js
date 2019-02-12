// An actor that has a bitmap component and an update function that keeps the image
// at the correct position
function bitmapActor(parent, nameString, x, y, r, imageID)
{
    Actor.call(this, nameString, x, y, r);

    // Make our bitmap object, set a registration point, and append it to the provided parent
    this.image = new createjs.Bitmap(app.assets.getResult(imageID));

    this.image.regX = this.image.getBounds().width / 2;
    this.image.regY = this.image.getBounds().height / 2;

    this.image.x = this.pos.x;
    this.image.y = this.pos.y;

    parent.addChild(this.image);   
}
bitmapActor.prototype = Object.create(Actor.prototype);
bitmapActor.prototype.constructor = bitmapActor;
bitmapActor.prototype.update = function(dt)
{
    // Keep the image position in sync
    this.image.x = this.pos.x;
    this.image.y = this.pos.y;
    
    // Call our parent update
    Actor.prototype.update.call(this, dt);
};

// A bitmap actor that has a special function for when it's collected
function collectibleActor(parent, nameString, x, y, r, imageID)
{
    bitmapActor.call(this, parent, nameString, x, y, r, imageID);

	// When this method is called, make a new collectible star
    this.onCollect = function()
    {
        // Create a new star at a random point
        var pos = getRandomPointOnScreen();
        app.stars.push(new collectibleActor(app.stage, "star", pos.x, pos.y, 25, "star"));

        // Remove this object from the stars list and remove any images from the stage
        app.stars.splice( app.stars.indexOf(this), 1 );
        app.stage.removeChild(this.image);
        if (DEBUG) { app.stage.removeChild(this.debugShape); };
    }
}
collectibleActor.prototype = Object.create(bitmapActor.prototype);
collectibleActor.prototype.constructor = collectibleActor;
