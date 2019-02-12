function Screen(screenTitleText, buttonCallbackFunc)
{
    createjs.Container.call(this);

    // Add a screen title
    ui.makeDefaultText(this, screenTitleText, SCREEN_WIDTH / 2, 50);

    // Add a button
    ui.makeDefaultTextButton(this, "Click Me", SCREEN_WIDTH / 2, 400, buttonCallbackFunc);
}
Screen.prototype = Object.create(createjs.Container.prototype);
Screen.prototype.constructor = Screen;