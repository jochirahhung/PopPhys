function Actor(nameString, x, y, color, parent)
{
    this.name = nameString;
    this.pos = {x: x, y: y};
    this.shape = new createjs.Shape();
    this.shape.graphics.beginFill(color).drawRect(x, y, 40, 40);

    parent.addChild(this.shape);

}
Actor.prototype.remove = function(parent)
{
    parent.removeChild(this.shape);
};