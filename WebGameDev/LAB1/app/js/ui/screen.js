function Screen(screenTitleText, buttonText, buttonCallbackFunc)
{
    createjs.Container.call(this);

    ui.makeDefaultText(this, screenTitleText, SCREEN_WIDTH / 2, 50);

    ui.makeDefaultTextButton(this, buttonText, SCREEN_WIDTH / 2, 400, buttonCallbackFunc);
}
Screen.prototype = Object.create(createjs.Container.prototype);
Screen.prototype.constructor = Screen;