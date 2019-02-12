var _window$popmotion = window.popmotion,
    easing = _window$popmotion.easing,
    tween = _window$popmotion.tween,
    styler = _window$popmotion.styler;


var divStyler = styler(document.querySelector('.box'));

tween({
  from: 0,
  to: { x: 300, rotate: 180 },
  duration: 5000,
  ease: easing.backOut,
  flip: Infinity
  // elapsed: 500,
  // loop: 5,
  // yoyo: 5
}).start(divStyler.set);