function Sprite(x, y, imageID)
{
    var sprite = new createjs.Sprite(app.assets.getResult(imageID));
    
    sprite.x = x;
    sprite.y = y;
    this.pos = {x: sprite.x, y: sprite.y};
    return sprite;
}

function Bitmap(x, y, imageID, type)
{
    // Create a new bitmap using the result from our loaded assets
    var bitmap = new createjs.Bitmap(app.assets.getResult(imageID));
    
    // Set its position
    bitmap.x = x;
    bitmap.y = y;
    this.pos = {x: bitmap.x, y: bitmap.y};

    // Set its registration point (bitmaps automatically have a bounds)
    bitmap.regX = bitmap.getBounds().width / 2;
    bitmap.regY = bitmap.getBounds().height / 2;

    return bitmap;
}

function areActorsColliding(actor1, actor2)
{

    // Make sure they're both actors first
    if(actor1 instanceof Sprite && actor2 instanceof Bitmap)
    {
        var distance = getDistance(actor1.pos, actor2.pos);

        // If the distance is closer than our radii
        if(distance < (actor1.boundsRadius + actor2.boundsRadius))
        {
            return true;
        }

        return false;
    };
   
};

// Get the distance between two positions (must be an object in {x: ?, y: ?} format)
function getDistance(pos1, pos2)
{
    // We use the pythagorean theorem to determine the distance between two points,
    // where C is the distance
    //
    //       Point 1 |
    //               v
    //              /|
    //             / |
    //          C /  | 
    //           /   | B
    //          /    |    
    //         /_____|
    //         ^  A    
    // Point 2 |

	// To get the distance, we need to find the length of sides A and B

    // pos1.x - pos2.x gets us the length of one side of the triangle (the A)
    // We'll square it here
    var aSqrd = Math.pow((pos1.x - pos2.x), 2);

    // pos1.y - pos2.y gets us the length of the other side (the B)
	// We'll 
    var bSqrd = Math.pow((pos1.y - pos2.y), 2);

    // Now we get c, using the pytahgorean theorem
    var distance = Math.sqrt(aSqrd + bSqrd);

    return distance;
}