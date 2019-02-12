/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports.splitColorValues = splitColorValues;
var varType = function varType(variable) {
  return Object.prototype.toString.call(variable).slice(8, -1);
};

var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now;

/*
  Convert camelCase to dash-case

  @param [string]
  @return [string]
*/
var camelToDash = exports.camelToDash = function camelToDash(string) {
  return string.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

/*
  Generate current timestamp
  
  @return [timestamp]: Current UNIX timestamp
*/
var currentTime = exports.currentTime = HAS_PERFORMANCE_NOW ? function () {
  return performance.now();
} : function () {
  return new Date().getTime();
};

var setDOMAttrs = exports.setDOMAttrs = function setDOMAttrs(element, attrs) {
  for (var key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      element.setAttribute(key, attrs[key]);
    }
  }
};
/*
  Split comma-delimited string

  "foo,bar" -> ["foo", "bar"]

  @param [string]
  @return [array]
*/
var splitCommaDelimited = exports.splitCommaDelimited = function splitCommaDelimited(value) {
  return isString(value) ? value.split(/,\s*/) : [value];
};

/**
 *  Returns a function that will check any argument for `term`
 * `contains('needle')('haystack')`
 */
var contains = exports.contains = function contains(term) {
  return function (v) {
    return isString(term) && v.indexOf(term) !== -1;
  };
};

/**
 *  Returns a function that will check to see if an argument is
 *  the first characters in the provided `term`
 * `isFirstChars('needle')('haystack')`
 */
var isFirstChars = exports.isFirstChars = function isFirstChars(term) {
  return function (v) {
    return isString(term) && v.indexOf(term) === 0;
  };
};

/**
 * Create a unit value type
 */
var createUnitType = exports.createUnitType = function createUnitType(type, transform) {
  return {
    test: contains(type),
    parse: parseFloat,
    transform: transform
  };
};

/*
  Get value from function string
  "translateX(20px)" -> "20px"
*/
var getValueFromFunctionString = exports.getValueFromFunctionString = function getValueFromFunctionString(value) {
  return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};

/**
 * Creates a function that will split color
 * values from string into an object of properties
 * `mapArrayToObject(['red', 'green', 'blue'])('rgba(0,0,0)')`
 */
function splitColorValues(terms) {
  var numTerms = terms.length;

  return function (v) {
    var values = {};
    var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));

    for (var i = 0; i < numTerms; i++) {
      values[terms[i]] = valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
    }

    return values;
  };
}

/*
  Is utils var an array ? 
  
  @param: Variable to test
  @return [boolean]: Returns true if utils.varType === 'Array'
*/
var isArray = exports.isArray = function isArray(arr) {
  return varType(arr) === 'Array';
};

/*
  Is utils var a function ? 
  
  @param: Variable to test
  @return [boolean]: Returns true if utils.varType === 'Function'
*/
var isFunc = exports.isFunc = function isFunc(obj) {
  return varType(obj) === 'Function';
};

/*
  Is utils var a number?
  
  @param: Variable to test
  @return [boolean]: Returns true if typeof === 'number'
*/
var isNum = exports.isNum = function isNum(num) {
  return typeof num === 'number';
};

/*
  Is utils var an object?
  
  @param: Variable to test
  @return [boolean]: Returns true if typeof === 'object'
*/
var isObj = exports.isObj = function isObj(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

/*
  Is utils var a string ? 
  
  @param: Variable to test
  @return [boolean]: Returns true if typeof str === 'string'
*/
var isString = exports.isString = function isString(str) {
  return typeof str === 'string';
};

var isHex = exports.isHex = isFirstChars('#');
var isRgb = exports.isRgb = isFirstChars('rgb');
var isHsl = exports.isHsl = isFirstChars('hsl');
var isColor = exports.isColor = function isColor(v) {
  return isHex(v) || isRgb(v) || isHsl(v);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;

var _onNextFrame = __webpack_require__(20);

var _onNextFrame2 = _interopRequireDefault(_onNextFrame);

var _createRenderStep = __webpack_require__(21);

var _createRenderStep2 = _interopRequireDefault(_createRenderStep);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var willRenderNextFrame = false;

/**
 * Maximum permitted ms since last frame
 * @type {Number}
 */
var MAX_ELAPSED = 20;

/**
 * Current framestamp
 * @type {Number}
 */
var currentFramestamp = (0, _utils.currentTime)();

var elapsed = 0;

/**
 * Factor to multiply `elapsed` by - 
 * 0.5 would be slow motion, 2 would be fast
 * @type {Number}
 */
var dilation = 1;

function startRenderLoop() {
  if (!willRenderNextFrame) {
    willRenderNextFrame = true;
    (0, _onNextFrame2.default)(processFrame);
  }
}

var frameStart = (0, _createRenderStep2.default)(startRenderLoop);
var frameUpdate = (0, _createRenderStep2.default)(startRenderLoop);
var frameRender = (0, _createRenderStep2.default)(startRenderLoop);
var frameEnd = (0, _createRenderStep2.default)(startRenderLoop);

function processFrame(framestamp) {
  willRenderNextFrame = false;
  elapsed = Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1) * dilation;
  currentFramestamp = framestamp;

  frameStart.process();
  frameUpdate.process();
  frameRender.process();
  frameEnd.process();
}

var onFrameStart = exports.onFrameStart = frameStart.schedule;
var onFrameUpdate = exports.onFrameUpdate = frameUpdate.schedule;
var onFrameRender = exports.onFrameRender = frameRender.schedule;
var onFrameEnd = exports.onFrameEnd = frameEnd.schedule;
var cancelOnFrameStart = exports.cancelOnFrameStart = frameStart.cancel;
var cancelOnFrameUpdate = exports.cancelOnFrameUpdate = frameUpdate.cancel;
var cancelOnFrameRender = exports.cancelOnFrameRender = frameRender.cancel;
var cancelOnFrameEnd = exports.cancelOnFrameEnd = frameEnd.cancel;

var timeSinceLastFrame = exports.timeSinceLastFrame = function timeSinceLastFrame() {
  return elapsed;
};
var currentFrameTimestamp = exports.currentFrameTimestamp = function currentFrameTimestamp() {
  return currentFramestamp;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _framesync = __webpack_require__(1);

var _calc = __webpack_require__(3);

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Action = function () {
  // lawsuit - sorry
  function Action() {
    var _this = this;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Action);

    this.scheduledUpdate = function () {
      _this.lastUpdated = (0, _framesync.timeSinceLastFrame)();
      _this.prev = _this.current;

      var _props = _this.props,
          onUpdate = _props.onUpdate,
          passive = _props.passive;

      if (_this.update) {
        _this.current = _this.update(_this.current);
      }

      if (onUpdate) {
        if (onUpdate.registerAction) {
          onUpdate.set(_this.get());
        } else {
          onUpdate(_this.get(), _this);
        }
      }

      _this.fireListeners();

      if (!passive && _this._isActive) {
        (0, _framesync.onFrameUpdate)(_this.scheduledUpdate);
      }

      if (_this.isActionComplete && _this.isActionComplete()) {
        _this.complete();
      }

      return _this;
    };

    this.props = _extends({}, this.constructor.defaultProps);

    this.setProps(props);

    this.lastUpdated = 0;
    this.prev = this.current = props.current || props.from || 0;
  }

  Action.prototype.start = function start() {
    var _props2 = this.props,
        onStart = _props2.onStart,
        _onStart = _props2._onStart,
        passive = _props2.passive;

    if (!passive) {
      this._isActive = true;
      (0, _framesync.onFrameUpdate)(this.scheduledUpdate);
    }

    if (this.onStart) this.onStart();
    if (onStart) onStart(this);
    if (_onStart) _onStart(this);

    return this;
  };

  Action.prototype.stop = function stop() {
    var _props3 = this.props,
        onStop = _props3.onStop,
        _onStop = _props3._onStop,
        passive = _props3.passive;

    if (!passive) {
      this._isActive = false;
      (0, _framesync.cancelOnFrameUpdate)(this.scheduledUpdate);
    }

    if (this.onStop) this.onStop();
    if (onStop) onStop(this);
    if (_onStop) _onStop(this);

    return this;
  };

  Action.prototype.complete = function complete() {
    var _props4 = this.props,
        onComplete = _props4.onComplete,
        _onComplete = _props4._onComplete;

    this.stop();

    if (this.onComplete) this.onComplete();
    if (onComplete) onComplete(this);
    if (_onComplete) _onComplete(this);

    return this;
  };

  Action.prototype.setProps = function setProps(_ref) {
    var onUpdate = _ref.onUpdate,
        props = _objectWithoutProperties(_ref, ['onUpdate']);

    this.props = _extends({}, this.props, props);

    if (onUpdate) this.output(onUpdate);

    return this;
  };

  Action.prototype.output = function output(func) {
    this.props.onUpdate = func;
    if (func.registerAction) func.registerAction(this);

    return this;
  };

  Action.prototype.get = function get() {
    var transform = this.props.transform;

    return transform ? transform(this.current) : this.current;
  };

  Action.prototype.getBeforeTransform = function getBeforeTransform() {
    return this.current;
  };

  Action.prototype.set = function set(v) {
    this.current = v;
    return this;
  };

  Action.prototype.getProp = function getProp(key) {
    return this.props[key];
  };

  Action.prototype.getVelocity = function getVelocity() {
    return (0, _calc.speedPerSecond)(this.current - this.prev, this.lastUpdated);
  };

  Action.prototype.isActive = function isActive() {
    return this._isActive;
  };

  Action.prototype.addListener = function addListener(listener) {
    this.listeners = this.listeners || [];
    this.numListeners = this.numListeners || 0;
    if (this.listeners.indexOf(listener) === -1) {
      this.listeners.push(listener);
      this.numListeners++;
    }
    return this;
  };

  Action.prototype.removeListener = function removeListener(listener) {
    var listenerIndex = this.listeners ? this.listeners.indexOf(listener) : -1;
    if (listenerIndex !== -1) {
      this.numListeners--;
      this.listeners.splice(listenerIndex, 1);
    }
    return this;
  };

  Action.prototype.fireListeners = function fireListeners() {
    var current = this.get();
    for (var i = 0; i < this.numListeners; i++) {
      this.listeners[i](current, this);
    }
    return this;
  };

  return Action;
}();

exports.default = Action;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.stepProgress = exports.speedPerSecond = exports.speedPerFrame = exports.smooth = exports.radiansToDegrees = exports.pointFromAngleAndDistance = exports.getValueFromProgress = exports.getProgressFromValue = exports.distance = exports.dilate = exports.degreesToRadians = exports.angle = undefined;

var _utils = __webpack_require__(0);

/*
  Convert number to x decimal places

  @param [number]
  @param [number]
  @return [number]
*/
var toDecimal = function toDecimal(num) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

  precision = Math.pow(10, precision);
  return Math.round(num * precision) / precision;
};

var ZERO_POINT = {
  x: 0,
  y: 0,
  z: 0
};

var distance1D = function distance1D(a, b) {
  return Math.abs(a - b);
};

/*
  Angle between points

  Translates the hypothetical line so that the 'from' coordinates
  are at 0,0

  @param [object]: X and Y coordinates of from point
  @param [object]: X and Y cordinates of to point
  @return [radian]: Angle between the two points in radians
*/
var angle = exports.angle = function angle(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ZERO_POINT;
  return radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};

/*
  Convert degrees to radians

  @param [number]: Value in degrees
  @return [number]: Value in radians
*/
var degreesToRadians = exports.degreesToRadians = function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
};

/*
  Dilate

  Change the progression between a and b according to dilation.

  So dilation = 0.5 would change

  a --------- b

  to

  a ---- b

  @param [number]: Previous value
  @param [number]: Current value
  @param [number]: Dilate progress by x
  @return [number]: Previous value plus the dilated difference
*/
var dilate = exports.dilate = function dilate(a, b, dilation) {
  return a + (b - a) * dilation;
};

/*
  Distance

  Returns the distance between two n dimensional points.

  @param [object/number]: x and y or just x of point A
  @param [object/number]: (optional): x and y or just x of point B
  @return [number]: The distance between the two points
*/
var distance = exports.distance = function distance(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ZERO_POINT;

  // 1D dimensions
  if ((0, _utils.isNum)(a)) {
    return distance1D(a, b);

    // Multi-dimensional
  } else {
    var xDelta = distance1D(a.x, b.x);
    var yDelta = distance1D(a.y, b.y);
    var zDelta = (0, _utils.isNum)(a.z) ? distance1D(a.z, b.z) : 0;

    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
};

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
var getProgressFromValue = exports.getProgressFromValue = function getProgressFromValue(from, to, value) {
  return (value - from) / (to - from);
};

/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (a number from 0-1)

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
var getValueFromProgress = exports.getValueFromProgress = function getValueFromProgress(from, to, progress) {
  return -progress * from + progress * to + from;
};

/*
  Point from angle and distance

  @param [object]: 2D point of origin
  @param [number]: Angle from origin
  @param [number]: Distance from origin
  @return [object]: Calculated 2D point
*/
var pointFromAngleAndDistance = exports.pointFromAngleAndDistance = function pointFromAngleAndDistance(origin, angle, distance) {
  angle = degreesToRadians(angle);

  return {
    x: distance * Math.cos(angle) + origin.x,
    y: distance * Math.sin(angle) + origin.y
  };
};

/*
  Convert radians to degrees

  @param [number]: Value in radians
  @return [number]: Value in degrees
*/
var radiansToDegrees = exports.radiansToDegrees = function radiansToDegrees(radians) {
  return radians * 180 / Math.PI;
};

/*
  Framerate-independent smoothing

  @param [number]: New value
  @param [number]: Old value
  @param [number]: Frame duration
  @param [number] (optional): Smoothing (0 is none)
*/
var smooth = exports.smooth = function smooth(newValue, oldValue, duration) {
  var smoothing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
};

/*
  Convert x per second to per frame velocity based on fps

  @param [number]: Unit per second
  @param [number]: Frame duration in ms
*/
var speedPerFrame = exports.speedPerFrame = function speedPerFrame(xps, frameDuration) {
  return (0, _utils.isNum)(xps) ? xps / (1000 / frameDuration) : 0;
};

/*
  Convert velocity into velicity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
var speedPerSecond = exports.speedPerSecond = function speedPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1000 / frameDuration) : 0;
};

/*
  Create stepped version of 0-1 progress

  @param [int]: Number of steps
  @param [number]: Current value
  @return [number]: Stepped value
*/
var stepProgress = exports.stepProgress = function stepProgress(steps, progress) {
  var segment = 1 / (steps - 1);
  var target = 1 - 1 / steps;
  var progressOfTarget = Math.min(progress / target, 1);

  return Math.floor(progressOfTarget / segment) * segment;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.bezier = exports.blendColor = exports.alpha = exports.color = exports.hsla = exports.rgba = exports.rgbUnit = exports.px = exports.degrees = exports.percent = exports.transformChildValues = exports.steps = exports.snap = exports.smooth = exports.wrap = exports.nonlinearSpring = exports.spring = exports.generateNonIntergratedSpring = exports.multiply = exports.divide = exports.add = exports.subtract = exports.interpolate = exports.flow = exports.pipe = exports.conditional = exports.clamp = exports.clampMin = exports.clampMax = exports.applyOffset = exports.appendUnit = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _calc = __webpack_require__(3);

var _utils = __webpack_require__(0);

var _parsers = __webpack_require__(14);

var _framesync = __webpack_require__(1);

var noop = function noop(v) {
  return v;
};

/**
 * Append Unit
 * A function that will append
 * appendUnit('px', 20) -> '20px'
 * @param  {string} unit)
 * @return {number}
 */
var appendUnit = exports.appendUnit = function appendUnit(unit) {
  return function (v) {
    return '' + v + unit;
  };
};

/**
 * Apply offset
 * A function that, given a value, will get the offset from `from`
 * and apply it to `to`
 * @param  {number} from
 * @param  {number} to
 * @return {function}
 */
var applyOffset = exports.applyOffset = function applyOffset(from, to) {
  var getOffset = subtract(from);
  var applyOffsetTo = add(to);
  return function (v) {
    return applyOffsetTo(getOffset(v));
  };
};

/**
 * Clamp value between
 * Creates a function that will restrict a given value between `min` and `max`
 * @param  {number} min
 * @param  {number} max
 * @return {number}
 */
var clampMax = exports.clampMax = function clampMax(max) {
  return function (v) {
    return Math.min(v, max);
  };
};
var clampMin = exports.clampMin = function clampMin(min) {
  return function (v) {
    return Math.max(v, min);
  };
};
var clamp = exports.clamp = function clamp(min, max) {
  var _min = clampMin(min);
  var _max = clampMax(max);
  return function (v) {
    return _min(_max(v));
  };
};

var conditional = exports.conditional = function conditional(condition, ifTrue) {
  var ifFalse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
  return function (v, action) {
    return condition(v, action) ? ifTrue(v, action) : ifFalse(v, action);
  };
};

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */
var pipe = exports.pipe = function pipe() {
  for (var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++) {
    transformers[_key] = arguments[_key];
  }

  var numTransformers = transformers.length;
  var i = 0;

  return function (acc) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    var v = acc;
    for (i = 0; i < numTransformers; i++) {
      v = transformers[i].apply(transformers, [v].concat(args));
    }

    return v;
  };
};

// Deprecated: Remove in 7.1.0
var flow = exports.flow = pipe;

/**
 * Interpolate from set of values to another
 * @param  {Array} input array
 * @param  {Array} output
 * @param  {Function} rangeEasing
 * @return {Function}
 */
var interpolate = exports.interpolate = function interpolate(input, output, rangeEasing) {
  var rangeLength = input.length;
  var finalIndex = rangeLength - 1;

  return function (v) {
    // If value outside minimum range, quickly return
    if (v <= input[0]) {
      return output[0];
    }

    // If value outside maximum range, quickly return
    if (v >= input[finalIndex]) {
      return output[finalIndex];
    }

    var i = 1;

    // Find index of range start
    for (; i < rangeLength; i++) {
      if (input[i] > v || i === finalIndex) {
        break;
      }
    }

    var progressInRange = (0, _calc.getProgressFromValue)(input[i - 1], input[i], v);
    var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
    return (0, _calc.getValueFromProgress)(output[i - 1], output[i], easedProgress);
  };
};

var subtract = exports.subtract = function subtract(origin) {
  return function (v) {
    return v - origin;
  };
};
var add = exports.add = function add(origin) {
  return function (v) {
    return v + origin;
  };
};
var divide = exports.divide = function divide(origin) {
  return function (v) {
    return v / origin;
  };
};
var multiply = exports.multiply = function multiply(origin) {
  return function (v) {
    return v * origin;
  };
};

var generateNonIntergratedSpring = exports.generateNonIntergratedSpring = function generateNonIntergratedSpring() {
  var alterDisplacement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;
  return function (constant, origin) {
    return function (v) {
      var displacement = origin - v;
      var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
      return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
    };
  };
};

var spring = exports.spring = generateNonIntergratedSpring();
var nonlinearSpring = exports.nonlinearSpring = generateNonIntergratedSpring(Math.sqrt);

var wrap = exports.wrap = function wrap(min, max) {
  return function (v) {
    var rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
  };
};

var smooth = exports.smooth = function smooth() {
  var strength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;

  var previousValue = 0;
  var lastUpdated = 0;

  return function (v) {
    var currentFramestamp = (0, _framesync.currentFrameTimestamp)();
    var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
    var newValue = timeDelta ? (0, _calc.smooth)(v, previousValue, timeDelta, strength) : previousValue;
    lastUpdated = currentFramestamp;
    previousValue = newValue;
    return newValue;
  };
};

var snap = exports.snap = function snap(points) {
  if (typeof points === 'number') {
    return function (v) {
      return Math.round(v / points) * points;
    };
  } else {
    var i = 0;
    var numPoints = points.length;

    return function (v) {
      var lastDistance = Math.abs(points[0] - v);

      for (i = 1; i < numPoints; i++) {
        var point = points[i];
        var distance = Math.abs(point - v);

        if (distance === 0) return point;

        if (distance > lastDistance) return points[i - 1];

        if (i === numPoints - 1) return point;

        lastDistance = distance;
      }
    };
  }
};

var steps = exports.steps = function steps(_steps) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'start';
  return function (v) {
    var progress = (0, _calc.getProgressFromValue)(min, max, v);
    return (0, _calc.getValueFromProgress)(min, max, (0, _calc.stepProgress)(_steps, progress, direction));
  };
};

var transformChildValues = exports.transformChildValues = function transformChildValues(childTransformers) {
  var mutableState = {};
  return function (v) {
    for (var key in v) {
      var childTransformer = childTransformers[key];
      if (childTransformer) {
        mutableState[key] = childTransformer(v[key]);
      }
    }

    return mutableState;
  };
};

// Unit transformers
var percent = exports.percent = appendUnit('%');
var degrees = exports.degrees = appendUnit('deg');
var px = exports.px = appendUnit('px');

var rgbUnit = exports.rgbUnit = pipe(clamp(0, 255), Math.round);

var rgbaTemplate = function rgbaTemplate(_ref) {
  var red = _ref.red,
      green = _ref.green,
      blue = _ref.blue,
      _ref$alpha = _ref.alpha,
      alpha = _ref$alpha === undefined ? 1 : _ref$alpha;
  return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
};

var rgba = exports.rgba = pipe(transformChildValues({
  red: rgbUnit,
  green: rgbUnit,
  blue: rgbUnit,
  alpha: alpha
}), rgbaTemplate);

var hslaTemplate = function hslaTemplate(_ref2) {
  var hue = _ref2.hue,
      saturation = _ref2.saturation,
      lightness = _ref2.lightness,
      _ref2$alpha = _ref2.alpha,
      alpha = _ref2$alpha === undefined ? 1 : _ref2$alpha;
  return 'hsla(' + hue + ', ' + saturation + ', ' + lightness + ', ' + alpha + ')';
};

var hsla = exports.hsla = pipe(transformChildValues({
  hue: parseInt,
  saturation: percent,
  lightness: percent,
  alpha: alpha
}), hslaTemplate);

var color = exports.color = function color(v) {
  if (v.hasOwnProperty('red')) {
    return rgba(v);
  } else if (v.hasOwnProperty('hue')) {
    return hsla(v);
  }
  return v;
};

var alpha = exports.alpha = clamp(0, 1);

var blend = function blend(from, to, v) {
  var fromExpo = from * from;
  var toExpo = to * to;
  return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};
// http://codepen.io/osublake/pen/xGVVaN
var blendColor = exports.blendColor = function blendColor(from, to) {
  var fromColor = (0, _utils.isString)(from) ? (0, _parsers.color)(from) : from;
  var toColor = (0, _utils.isString)(to) ? (0, _parsers.color)(to) : to;

  var blended = _extends({}, fromColor);

  return function (v) {
    for (var key in blended) {
      blended[key] = blend(fromColor[key], toColor[key], v);
    }
    blended.red = blend(fromColor.red, toColor.red, v);
    blended.green = blend(fromColor.green, toColor.green, v);
    blended.blue = blend(fromColor.blue, toColor.blue, v);
    blended.alpha = (0, _calc.getValueFromProgress)(fromColor.alpha, toColor.alpha, v);
    return blended;
  };
};

// Bezier resolver
// Refactored from https://github.com/hughsk/bezier/blob/master/index.js
/**
## The MIT License (MIT) ##

Copyright (c) 2013 Hugh Kennedy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
 */
var resolve3 = function resolve3(points) {
  return function (t) {
    var ut = 1 - t;
    return (points[0] * ut + points[1] * t) * ut + (points[1] * ut + points[2] * t) * t;
  };
};

var resolve4 = function resolve4(points) {
  return function (t) {
    var ut = 1 - t;
    var a1 = points[1] * ut + points[2] * t;
    return ((points[0] * ut + points[1] * t) * ut + a1 * t) * ut + (a1 * ut + (points[2] * ut + points[3] * t) * t) * t;
  };
};

var bezier = exports.bezier = function bezier(points) {
  return points.length === 3 ? resolve3(points) : resolve4(points);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.complex = exports.color = exports.hsla = exports.hex = exports.rgba = exports.rgbUnit = exports.scale = exports.px = exports.percent = exports.degrees = exports.alpha = exports.number = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
}; /**
    * Value types
    *
    * alpha
    * degrees
    * hex
    * hsla
    * percent
    * px
    * rgbUnit
    * rgb
    * scale
    */

var _transformers = __webpack_require__(4);

var _parsers = __webpack_require__(14);

var _utils = __webpack_require__(0);

var number = exports.number = {
  test: _utils.isNum,
  parse: parseFloat
};

// Value types
var alpha = exports.alpha = _extends({}, number, {
  transform: _transformers.alpha
});

var degrees = exports.degrees = (0, _utils.createUnitType)('deg', _transformers.degrees);
var percent = exports.percent = (0, _utils.createUnitType)('%', _transformers.percent);
var px = exports.px = (0, _utils.createUnitType)('px', _transformers.px);

var scale = exports.scale = _extends({}, number, {
  default: 1
});

var rgbUnit = exports.rgbUnit = _extends({}, number, {
  transform: _transformers.rgbUnit
});

var rgba = exports.rgba = {
  test: _utils.isRgb,
  parse: _parsers.rgba,
  transform: _transformers.rgba
};

var hex = exports.hex = _extends({}, rgba, {
  test: _utils.isHex,
  parse: _parsers.hex
});

var hsla = exports.hsla = {
  test: _utils.isHsl,
  parse: _parsers.hsla,
  transform: _transformers.hsla
};

var color = exports.color = {
  parse: _parsers.color,
  test: _utils.isColor,
  transform: _transformers.color
};

var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
var generateToken = function generateToken(token) {
  return '${' + token + '}';
};
var complex = exports.complex = {
  test: function test(v) {
    var matches = v.match && v.match(FLOAT_REGEX);
    return (0, _utils.isArray)(matches) && matches.length > 1;
  },
  parse: function parse(v) {
    var parsedValue = {};
    v.match(FLOAT_REGEX).forEach(function (value, i) {
      return parsedValue[i] = parseFloat(value);
    });
    return parsedValue;
  },
  createTransformer: function createTransformer(prop) {
    var counter = 0;
    var template = prop.replace(FLOAT_REGEX, function () {
      return generateToken(counter++);
    });

    return function (v) {
      var output = template;
      for (var key in v) {
        if (v.hasOwnProperty(key)) {
          output = output.replace(generateToken(key), v[key]);
        }
      }

      return output;
    };
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

var _transformers = __webpack_require__(4);

var _calc = __webpack_require__(3);

var _easing = __webpack_require__(9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var clampProgress = (0, _transformers.clamp)(0, 1);

var NEXT_STEPS = {
  loop: function loop(tween) {
    return tween.start();
  },
  yoyo: function yoyo(tween) {
    return tween.reverse().start();
  },
  flip: function flip(tween) {
    return tween.flip().start();
  }
};

var Tween = function (_Action) {
  _inherits(Tween, _Action);

  function Tween() {
    _classCallCheck(this, Tween);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  Tween.prototype.onStart = function onStart() {
    var _props = this.props,
        duration = _props.duration,
        playDirection = _props.playDirection;

    this.elapsed = playDirection === 1 ? 0 : duration;
    this.progress = 0;
  };

  Tween.prototype.update = function update() {
    var _props2 = this.props,
        duration = _props2.duration,
        ease = _props2.ease,
        from = _props2.from,
        to = _props2.to,
        playDirection = _props2.playDirection;

    if (!this.isManualUpdate) {
      this.elapsed += (0, _framesync.timeSinceLastFrame)() * playDirection;
    }

    this.isManualUpdate = false;
    this.progress = clampProgress((0, _calc.getProgressFromValue)(0, duration, this.elapsed));

    return (0, _calc.getValueFromProgress)(from, to, ease(this.progress));
  };

  Tween.prototype.isActionComplete = function isActionComplete() {
    var _props3 = this.props,
        duration = _props3.duration,
        playDirection = _props3.playDirection,
        yoyo = _props3.yoyo,
        loop = _props3.loop,
        flip = _props3.flip;

    var isComplete = playDirection === 1 ? this.elapsed >= duration : this.elapsed <= 0;

    if (isComplete && (yoyo || loop || flip)) {
      var isStepTaken = false;

      for (var key in NEXT_STEPS) {
        var nextStep = NEXT_STEPS[key];
        var countProp = key + 'Count';
        var stepMax = this.getProp(key);
        var stepCount = this.getProp(countProp);

        if (stepMax > stepCount) {
          var _setProps;

          this.setProps((_setProps = {}, _setProps[countProp] = stepCount + 1, _setProps));
          nextStep(this);
          isStepTaken = true;
        }
      }

      if (isStepTaken) isComplete = false;
    }

    return isComplete;
  };

  Tween.prototype.getElapsed = function getElapsed() {
    return this.elapsed;
  };

  Tween.prototype.flip = function flip() {
    this.elapsed = this.props.duration - this.elapsed;
    var _ref = [this.props.to, this.props.from];
    this.props.from = _ref[0];
    this.props.to = _ref[1];

    return this;
  };

  Tween.prototype.reverse = function reverse() {
    this.props.playDirection *= -1;
    return this;
  };

  Tween.prototype.seek = function seek(progress) {
    var duration = this.props.duration;

    this.elapsed = (0, _calc.getValueFromProgress)(0, duration, progress);
    this.isManualUpdate = true;
    if (!this.isActive()) this.scheduledUpdate();
  };

  return Tween;
}(_2.default);

Tween.defaultProps = {
  duration: 300,
  ease: _easing.easeOut,
  from: 0,
  to: 1,
  flip: 0,
  flipCount: 0,
  yoyo: 0,
  yoyoCount: 0,
  loop: 0,
  loopCount: 0,
  playDirection: 1
};

exports.default = function (props) {
  return new Tween(props);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _framesync = __webpack_require__(1);

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Renderer = function () {
  function Renderer(props) {
    _classCallCheck(this, Renderer);

    this.render = this.render.bind(this);

    this.props = _extends({}, this.constructor.defaultProps, props);

    this.state = {};
    this.changedValues = [];
  }

  /**
   * Get current state.
   * If `key` is not defined, return entire cached state.
   * If `key` is defined, return cached value if present.
   * If `key` is defined and cached value is not present, read and return.
   * @param  {string} (optional) key of value
   * @return {value}
   */

  Renderer.prototype.get = function get(key) {
    if (key) {
      if (this.state[key] !== undefined) {
        return this.state[key];
      } else {
        return this.read(key);
      }
    } else {
      return this.state;
    }
  };

  /**
   * Read value according to `onRead`
   * @param  {string} Name of property to read
   * @return {[type]}
   */

  Renderer.prototype.read = function read(key) {
    if (this.onRead) {
      return this.onRead(key);
    }
  };

  /**
   * Update `state` with new values and schedule `render`.
   * @param {object} values
   * @param {value} value toset
   */

  Renderer.prototype.set = function set() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[1] === 'undefined') {
      var values = args[0];
      // Set multiple values

      for (var key in values) {
        this.setValue(key, values[key]);
      }
    } else {
      var _key2 = args[0],
          value = args[1];

      this.setValue(_key2, value);
    }

    if (this.hasChanged) {
      (0, _framesync.onFrameRender)(this.render);
    }

    return this;
  };

  // > Wiley - 6 in the Morning
  /**
   * Set a single value
   * If a string or number, set directly.
   * If an object or array, create new object or array
   * if it doesn't already exist. Then shallow compare
   * to set and compare individual values.
   * One of the clearer drawbacks and annoyances with
   * using mutable instead of immutable states.
   * @param {[type]} key
   * @param {[type]} value
   */

  Renderer.prototype.setValue = function setValue(key, value) {
    var currentValue = this.state[key];

    // If number or string, set directly
    if ((0, _utils.isNum)(value) || (0, _utils.isString)(value)) {
      if (currentValue !== value) {
        this.state[key] = value;
        this.hasChanged = true;
      }
    } else if ((0, _utils.isArray)(value)) {
      if (!currentValue) {
        this.state[key] = [];
      }

      var numValues = value.length;
      for (var i = 0; i < numValues; i++) {
        if (this.state[key][i] !== value[i]) {
          this.state[key][i] = value[i];
          this.hasChanged = true;
        }
      }
    } else if ((0, _utils.isObj)(value)) {
      if (!currentValue) {
        this.state[key] = {};
      }

      for (var valueKey in value) {
        if (this.state[key][valueKey] !== value[valueKey]) {
          this.state[key][valueKey] = value[valueKey];
          this.hasChanged = true;
        }
      }
    }

    if (this.hasChanged && this.changedValues.indexOf(key) === -1) {
      this.changedValues.push(key);
    }
  };

  /**
   * Fires `onRender` if values have changed or `forceRender`
   * is set to true.
   * @return {this}
   */

  Renderer.prototype.render = function render() {
    var forceRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if ((forceRender || this.hasChanged) && this.onRender) {
      this.onRender();
    }

    this.changedValues.length = 0;
    this.hasChanged = false;

    return this;
  };

  return Renderer;
}();

exports.default = Renderer;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var axes = ['X', 'Y', 'Z'];

var transformProps = {
  x: true,
  y: true,
  z: true
};

var SCALE = 'scale';
var ROTATE = 'rotate';
var TRANSFORM_PERSPECTIVE = 'transformPerspective';
var TERMS = ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE];

transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;

TERMS.forEach(function (term) {
  return axes.forEach(function (axis) {
    return transformProps[term + axis] = true;
  });
});

exports.default = transformProps;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cubicBezier = exports.anticipate = exports.createAnticipateEasing = exports.backInOut = exports.backOut = exports.backIn = exports.createBackIn = exports.circInOut = exports.circOut = exports.circIn = exports.easeInOut = exports.easeOut = exports.easeIn = exports.createExpoIn = exports.linear = exports.createMirroredEasing = exports.createReversedEasing = undefined;

var _transformers = __webpack_require__(4);

var DEFAULT_OVERSHOOT_STRENGTH = 1.525;

var createReversedEasing = exports.createReversedEasing = function createReversedEasing(easing) {
  return function (p) {
    return 1 - easing(1 - p);
  };
};
var createMirroredEasing = exports.createMirroredEasing = function createMirroredEasing(easing) {
  return function (p) {
    return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
  };
};

var linear = exports.linear = function linear(p) {
  return p;
};

var createExpoIn = exports.createExpoIn = function createExpoIn(power) {
  return function (p) {
    return Math.pow(p, power);
  };
};
var easeIn = exports.easeIn = createExpoIn(2);
var easeOut = exports.easeOut = createReversedEasing(easeIn);
var easeInOut = exports.easeInOut = createMirroredEasing(easeIn);

var circIn = exports.circIn = function circIn(p) {
  return 1 - Math.sin(Math.acos(p));
};
var circOut = exports.circOut = createReversedEasing(circIn);
var circInOut = exports.circInOut = createMirroredEasing(circOut);

var createBackIn = exports.createBackIn = function createBackIn(power) {
  return function (p) {
    return p * p * ((power + 1) * p - power);
  };
};
var backIn = exports.backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = exports.backOut = createReversedEasing(backIn);
var backInOut = exports.backInOut = createMirroredEasing(backIn);

var createAnticipateEasing = exports.createAnticipateEasing = function createAnticipateEasing(power) {
  var backEasing = createBackIn(power);
  return function (p) {
    return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
  };
};

var anticipate = exports.anticipate = createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);

var cubicBezier = exports.cubicBezier = function cubicBezier(x1, y1, x2, y2) {
  var xBezier = (0, _transformers.bezier)(0, x1, x2, 1);
  var yBezier = (0, _transformers.bezier)(0, y1, y2, 1);

  return function (t) {
    return yBezier(xBezier(t));
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CompositeAction = function (_Action) {
  _inherits(CompositeAction, _Action);

  function CompositeAction(props) {
    _classCallCheck(this, CompositeAction);

    var actions = props.actions,
        remainingProps = _objectWithoutProperties(props, ['actions']);

    var _this = _possibleConstructorReturn(this, _Action.call(this, remainingProps));

    _this.current = {};
    _this.actionKeys = [];
    _this.addActions(actions);
    return _this;
  }

  CompositeAction.prototype.addActions = function addActions(actions) {
    var _this2 = this;

    var _loop = function _loop(key) {
      if (_this2.actionKeys.indexOf(key) === -1) {
        _this2.actionKeys.push(key);
      }

      _this2[key] = actions[key];

      var onUpdate = function onUpdate(v) {
        _this2.current[key] = v;
        (0, _framesync.onFrameUpdate)(_this2.scheduledUpdate);
      };

      _this2[key].setProps({
        _onStop: function _onStop() {
          return _this2.numActiveActions--;
        }
      }).addListener(onUpdate);
    };

    for (var key in actions) {
      _loop(key);
    }
  };

  CompositeAction.prototype.onStart = function onStart() {
    var _this3 = this;

    this.numActiveActions = this.actionKeys.length;
    this.actionKeys.forEach(function (key) {
      return _this3[key].start();
    });
  };

  CompositeAction.prototype.onStop = function onStop() {
    var _this4 = this;

    this.actionKeys.forEach(function (key) {
      return _this4[key].stop();
    });
  };

  CompositeAction.prototype.getVelocity = function getVelocity() {
    var _this5 = this;

    var velocity = {};
    this.actionKeys.forEach(function (key) {
      return velocity[key] = _this5[key].getVelocity();
    });
    return velocity;
  };

  CompositeAction.prototype.isActionComplete = function isActionComplete() {
    return this.numActiveActions === 0;
  };

  return CompositeAction;
}(_2.default);

CompositeAction.defaultProps = {
  passive: true
};

exports.default = function (actions, props) {
  return new CompositeAction(_extends({
    actions: actions
  }, props));
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Parallel = function (_Action) {
  _inherits(Parallel, _Action);

  function Parallel(props) {
    _classCallCheck(this, Parallel);

    var actions = props.actions,
        remainingProps = _objectWithoutProperties(props, ['actions']);

    var _this = _possibleConstructorReturn(this, _Action.call(this, remainingProps));

    _this.actions = [];
    _this.current = [];
    _this.addActions(actions);
    return _this;
  }

  Parallel.prototype.addAction = function addAction(action) {
    var _this2 = this;

    if (this.actions.indexOf(action) !== -1) return;

    this.actions.push(action);

    var i = this.actions.length - 1;
    var onUpdate = function onUpdate(v) {
      _this2.current[i] = v;
      (0, _framesync.onFrameUpdate)(_this2.scheduledUpdate);
    };

    onUpdate(action.get());

    action.setProps({
      _onStop: function _onStop() {
        return _this2.numActiveActions--;
      }
    }).addListener(onUpdate);
  };

  Parallel.prototype.addActions = function addActions(actions) {
    var _this3 = this;

    actions.forEach(function (action) {
      return _this3.addAction(action);
    });
  };

  Parallel.prototype.onStart = function onStart() {
    this.numActiveActions = this.actions.length;
    this.actions.forEach(function (action) {
      return action.start();
    });
  };

  Parallel.prototype.onStop = function onStop() {
    this.actions.forEach(function (action) {
      return action.stop();
    });
  };

  Parallel.prototype.getVelocity = function getVelocity() {
    return this.actions.map(function (action) {
      return action.getVelocity();
    });
  };

  Parallel.prototype.isActionComplete = function isActionComplete() {
    return this.numActiveActions === 0;
  };

  Parallel.prototype.getChildren = function getChildren() {
    return this.actions;
  };

  return Parallel;
}(_2.default);

exports.default = function (actions, props) {
  return new Parallel(_extends({ actions: actions }, props));
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Value = function (_Action) {
  _inherits(Value, _Action);

  function Value() {
    _classCallCheck(this, Value);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  Value.prototype.set = function set(v) {
    this.toUpdate = v;
    (0, _framesync.onFrameUpdate)(this.scheduledUpdate);
    return v;
  };

  Value.prototype.update = function update() {
    return this.toUpdate !== undefined ? this.toUpdate : this.current;
  };

  Value.prototype.stopRegisteredAction = function stopRegisteredAction() {
    if (this.action && this.action.isActive()) this.action.stop();
    this.action = undefined;
  };

  Value.prototype.registerAction = function registerAction(action) {
    this.stopRegisteredAction();
    this.action = action;
    return this;
  };

  Value.prototype.onStop = function onStop() {
    this.stopRegisteredAction();
  };

  return Value;
}(_2.default);

Value.defaultProps = {
  passive: true
};

exports.default = function (current, onUpdate) {
  return new Value({ current: current, onUpdate: onUpdate });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.svgPath = exports.svg = exports.css = exports.Renderer = exports.value = exports.spring = exports.stagger = exports.tween = exports.trackOffset = exports.touches = exports.pointer = exports.physics = exports.parallel = exports.delay = exports.crossFade = exports.composite = exports.colorTween = exports.chain = exports.Action = exports.valueTypes = exports.transform = exports.easing = exports.calc = exports.currentFrameTimestamp = exports.timeSinceLastFrame = exports.cancelOnFrameEnd = exports.cancelOnFrameRender = exports.cancelOnFrameUpdate = exports.cancelOnFrameStart = exports.onFrameEnd = exports.onFrameRender = exports.onFrameUpdate = exports.onFrameStart = undefined;

var _framesync = __webpack_require__(1);

Object.defineProperty(exports, 'onFrameStart', {
  enumerable: true,
  get: function get() {
    return _framesync.onFrameStart;
  }
});
Object.defineProperty(exports, 'onFrameUpdate', {
  enumerable: true,
  get: function get() {
    return _framesync.onFrameUpdate;
  }
});
Object.defineProperty(exports, 'onFrameRender', {
  enumerable: true,
  get: function get() {
    return _framesync.onFrameRender;
  }
});
Object.defineProperty(exports, 'onFrameEnd', {
  enumerable: true,
  get: function get() {
    return _framesync.onFrameEnd;
  }
});
Object.defineProperty(exports, 'cancelOnFrameStart', {
  enumerable: true,
  get: function get() {
    return _framesync.cancelOnFrameStart;
  }
});
Object.defineProperty(exports, 'cancelOnFrameUpdate', {
  enumerable: true,
  get: function get() {
    return _framesync.cancelOnFrameUpdate;
  }
});
Object.defineProperty(exports, 'cancelOnFrameRender', {
  enumerable: true,
  get: function get() {
    return _framesync.cancelOnFrameRender;
  }
});
Object.defineProperty(exports, 'cancelOnFrameEnd', {
  enumerable: true,
  get: function get() {
    return _framesync.cancelOnFrameEnd;
  }
});
Object.defineProperty(exports, 'timeSinceLastFrame', {
  enumerable: true,
  get: function get() {
    return _framesync.timeSinceLastFrame;
  }
});
Object.defineProperty(exports, 'currentFrameTimestamp', {
  enumerable: true,
  get: function get() {
    return _framesync.currentFrameTimestamp;
  }
});

var _calc2 = __webpack_require__(3);

var _calc = _interopRequireWildcard(_calc2);

var _easing2 = __webpack_require__(9);

var _easing = _interopRequireWildcard(_easing2);

var _transformers = __webpack_require__(4);

var _transform = _interopRequireWildcard(_transformers);

var _valueTypes2 = __webpack_require__(5);

var _valueTypes = _interopRequireWildcard(_valueTypes2);

var _actions = __webpack_require__(2);

var _actions2 = _interopRequireDefault(_actions);

var _chain2 = __webpack_require__(15);

var _chain3 = _interopRequireDefault(_chain2);

var _colorTween2 = __webpack_require__(22);

var _colorTween3 = _interopRequireDefault(_colorTween2);

var _composite2 = __webpack_require__(10);

var _composite3 = _interopRequireDefault(_composite2);

var _crossFade2 = __webpack_require__(23);

var _crossFade3 = _interopRequireDefault(_crossFade2);

var _delay2 = __webpack_require__(16);

var _delay3 = _interopRequireDefault(_delay2);

var _parallel2 = __webpack_require__(11);

var _parallel3 = _interopRequireDefault(_parallel2);

var _physics2 = __webpack_require__(24);

var _physics3 = _interopRequireDefault(_physics2);

var _pointer2 = __webpack_require__(25);

var _pointer3 = _interopRequireDefault(_pointer2);

var _touches2 = __webpack_require__(26);

var _touches3 = _interopRequireDefault(_touches2);

var _trackOffset2 = __webpack_require__(27);

var _trackOffset3 = _interopRequireDefault(_trackOffset2);

var _tween2 = __webpack_require__(6);

var _tween3 = _interopRequireDefault(_tween2);

var _stagger2 = __webpack_require__(28);

var _stagger3 = _interopRequireDefault(_stagger2);

var _spring2 = __webpack_require__(29);

var _spring3 = _interopRequireDefault(_spring2);

var _value2 = __webpack_require__(12);

var _value3 = _interopRequireDefault(_value2);

var _renderers = __webpack_require__(7);

var _renderers2 = _interopRequireDefault(_renderers);

var _css2 = __webpack_require__(30);

var _css3 = _interopRequireDefault(_css2);

var _svg2 = __webpack_require__(32);

var _svg3 = _interopRequireDefault(_svg2);

var _svgPath2 = __webpack_require__(35);

var _svgPath3 = _interopRequireDefault(_svgPath2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

exports.calc = _calc;
exports.easing = _easing;
exports.transform = _transform;
exports.valueTypes = _valueTypes;

// Actions

exports.Action = _actions2.default;
exports.chain = _chain3.default;
exports.colorTween = _colorTween3.default;
exports.composite = _composite3.default;
exports.crossFade = _crossFade3.default;
exports.delay = _delay3.default;
//export inertia from './actions/inertia';

exports.parallel = _parallel3.default;
exports.physics = _physics3.default;
exports.pointer = _pointer3.default;
exports.touches = _touches3.default;
exports.trackOffset = _trackOffset3.default;
exports.tween = _tween3.default;
exports.stagger = _stagger3.default;
exports.spring = _spring3.default;
exports.value = _value3.default;

// Renderers

exports.Renderer = _renderers2.default;
exports.css = _css3.default;
exports.svg = _svg3.default;
exports.svgPath = _svgPath3.default;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.color = exports.hsla = exports.rgba = exports.hex = undefined;

var _utils = __webpack_require__(0);

var hex = exports.hex = function hex(v) {
  var r = void 0,
      g = void 0,
      b = void 0;

  // If we have 6 characters, ie #FF0000
  if (v.length > 4) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b = v.substr(5, 2);

    // Or we have 3 characters, ie #F00
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b = v.substr(3, 1);
    r += r;
    g += g;
    b += b;
  }

  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b, 16),
    alpha: 1
  };
};

var rgba = exports.rgba = (0, _utils.splitColorValues)(['red', 'green', 'blue', 'alpha']);

var hsla = exports.hsla = (0, _utils.splitColorValues)(['hue', 'saturation', 'lightness', 'alpha']);

var color = exports.color = function color(v) {
  if ((0, _utils.isRgb)(v)) {
    return rgba(v);
  } else if ((0, _utils.isHex)(v)) {
    return hex(v);
  } else if ((0, _utils.isHsl)(v)) {
    return hsla(v);
  }

  return v;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Chain = function (_Action) {
  _inherits(Chain, _Action);

  function Chain() {
    var _temp, _this, _ret;

    _classCallCheck(this, Chain);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Action.call.apply(_Action, [this].concat(args))), _this), _this.playNext = function () {
      var _this$props = _this.props,
          i = _this$props.i,
          order = _this$props.order;

      if (i < order.length - 1) {
        _this.props.i++;
        _this.playCurrent();
      } else {
        _this.complete();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Chain.prototype.onStart = function onStart() {
    this.props.i = 0;
    this.playCurrent();
  };

  Chain.prototype.playCurrent = function playCurrent() {
    var _props = this.props,
        i = _props.i,
        order = _props.order;

    order[i].props._onComplete = this.playNext;
    order[i].start();
  };

  Chain.prototype.onStop = function onStop() {
    var _props2 = this.props,
        i = _props2.i,
        order = _props2.order;

    order[i].stop();
  };

  return Chain;
}(_2.default);

exports.default = function (order, onComplete) {
  return new Chain({ order: order, onComplete: onComplete });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tween = __webpack_require__(6);

var _tween2 = _interopRequireDefault(_tween);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (duration, onComplete) {
  return (0, _tween2.default)({ duration: duration, onComplete: onComplete });
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _valueTypes = __webpack_require__(5);

exports.default = {
  // Color props
  color: _valueTypes.color,
  backgroundColor: _valueTypes.color,
  outlineColor: _valueTypes.color,
  fill: _valueTypes.color,
  stroke: _valueTypes.color,

  // Border props
  borderColor: _valueTypes.color,
  borderTopColor: _valueTypes.color,
  borderRightColor: _valueTypes.color,
  borderBottomColor: _valueTypes.color,
  borderLeftColor: _valueTypes.color,
  borderRadius: _valueTypes.px,

  // Positioning
  width: _valueTypes.px,
  height: _valueTypes.px,
  top: _valueTypes.px,
  left: _valueTypes.px,
  bottom: _valueTypes.px,
  right: _valueTypes.px,

  // Transform properties
  rotate: _valueTypes.degrees,
  rotateX: _valueTypes.degrees,
  rotateY: _valueTypes.degrees,
  rotateZ: _valueTypes.degrees,
  scale: _valueTypes.scale,
  scaleX: _valueTypes.scale,
  scaleY: _valueTypes.scale,
  scaleZ: _valueTypes.scale,
  skewX: _valueTypes.degrees,
  skewY: _valueTypes.degrees,
  distance: _valueTypes.px,
  translateX: _valueTypes.px,
  translateY: _valueTypes.px,
  translateZ: _valueTypes.px,
  perspective: _valueTypes.px,
  opacity: _valueTypes.alpha
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(0);

var camelCache = {};
var dashCache = {};
var prefixes = ['Webkit', 'Moz', 'O', 'ms', ''];
var numPrefixes = prefixes.length;
var testElement = void 0;

/*
  Test style property for prefixed version
  
  @param [string]: Style property
  @return [string]: Cached property name
*/
var testPrefix = function testPrefix(key) {
  testElement = testElement || document.createElement('div');

  for (var i = 0; i < numPrefixes; i++) {
    var prefix = prefixes[i];
    var noPrefix = prefix === '';
    var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);

    if (prefixedPropertyName in testElement.style) {
      camelCache[key] = prefixedPropertyName;
      dashCache[key] = '' + (noPrefix ? '' : '-') + (0, _utils.camelToDash)(prefixedPropertyName);
    }
  }
};

exports.default = function (key, asDashCase) {
  var cache = asDashCase ? dashCache : camelCache;

  if (!cache[key]) {
    testPrefix(key);
  }

  return cache[key];
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _popmotion = __webpack_require__(13);

var _popmotionSpinnable = __webpack_require__(37);

var _popmotionSpinnable2 = _interopRequireDefault(_popmotionSpinnable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var counter = document.querySelector('#a .counter');

var CustomAction = function (_Action) {
	_inherits(CustomAction, _Action);

	function CustomAction() {
		_classCallCheck(this, CustomAction);

		return _possibleConstructorReturn(this, (CustomAction.__proto__ || Object.getPrototypeOf(CustomAction)).apply(this, arguments));
	}

	_createClass(CustomAction, [{
		key: 'update',
		value: function update(current) {
			return current + this.props.increment;
		}
	}]);

	return CustomAction;
}(_popmotion.Action);

var myCustomAction = new CustomAction({
	increment: 10,
	onUpdate: function onUpdate(v) {
		return counter.innerHTML = v;
	}
});

var ball = document.querySelector('.ball');
var ballRenderer = (0, _popmotion.css)(ball);

var ballX = (0, _popmotion.value)(0, function (x) {
	return ballRenderer.set('x', x);
});

ballX.set(150);

(0, _popmotion.tween)({ from: ballX.get(), to: 300 }).output(ballX).start();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
  Detect and load an appropriate clock setting for the environment
*/
var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame ? true : false;

var onNextFrame = void 0;

if (hasRAF) {
  onNextFrame = function onNextFrame(callback) {
    return window.requestAnimationFrame(callback);
  };
} else {
  /*
    requestAnimationFrame polyfill
    
    For IE8/9 Flinstones and non-browser environments
     Taken from Paul Irish. We've stripped out cancelAnimationFrame checks because we don't fox with that
    
    http://paulirish.com/2011/requestanimationframe-for-smart-animating/
    http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
     
    requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
     
    MIT license
  */
  var lastTime = 0;

  onNextFrame = function onNextFrame(callback) {
    var currentTime = new Date().getTime();
    var timeToCall = Math.max(0, 16.7 - (currentTime - lastTime));

    lastTime = currentTime + timeToCall;

    setTimeout(function () {
      return callback(lastTime);
    }, timeToCall);
  };
}

exports.default = onNextFrame;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createRenderStep;
function createRenderStep(startRenderLoop) {
  /**
   * We use two arrays, one for this frame and one to queue for the
   * next frame, reusing each to avoid GC.
   * @type {Array}
   */
  var functionsToRun = [];
  var functionsToRunNextFrame = [];

  return {
    schedule: function schedule(callback) {
      startRenderLoop();
      // If this callback isn't already scheduled to run next frame
      if (functionsToRunNextFrame.indexOf(callback) === -1) {
        functionsToRunNextFrame.push(callback);
      }
    },

    cancel: function cancel(callback) {
      var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
      if (indexOfCallback !== -1) {
        functionsToRunNextFrame.splice(indexOfCallback, 1);
      }
    },

    process: function process() {

      // Clear next frame list
      var _ref = [functionsToRunNextFrame, functionsToRun];
      // Swap this frame and next frame arrays to avoid GC

      functionsToRun = _ref[0];
      functionsToRunNextFrame = _ref[1];
      functionsToRunNextFrame.length = 0;

      // Execute all of this frame's functions
      var numThisFrame = functionsToRun.length;
      for (var i = 0; i < numThisFrame; i++) {
        functionsToRun[i]();
      }
    }
  };
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _tween = __webpack_require__(6);

var _tween2 = _interopRequireDefault(_tween);

var _transformers = __webpack_require__(4);

var _valueTypes = __webpack_require__(5);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

exports.default = function (_ref) {
  var from = _ref.from,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ['from', 'to']);

  return (0, _tween2.default)(_extends({}, props, {
    from: 0,
    to: 1,
    transform: (0, _transformers.pipe)((0, _transformers.blendColor)(from, to), _valueTypes.color.transform)
  }));
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _tween = __webpack_require__(6);

var _tween2 = _interopRequireDefault(_tween);

var _easing = __webpack_require__(9);

var _calc = __webpack_require__(3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CrossFade = function (_Action) {
  _inherits(CrossFade, _Action);

  function CrossFade() {
    _classCallCheck(this, CrossFade);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  CrossFade.prototype.onStart = function onStart() {
    var _props = this.props,
        duration = _props.duration,
        ease = _props.ease,
        fader = _props.fader;

    this.fader = fader || (0, _tween2.default)({
      to: 1,
      duration: duration,
      ease: ease
    }).start();
  };

  CrossFade.prototype.update = function update() {
    var _props2 = this.props,
        from = _props2.from,
        to = _props2.to;

    var balance = this.fader.get();
    var latestFromValue = from.get();
    var latestToValue = to.get();
    return (0, _calc.getValueFromProgress)(latestFromValue, latestToValue, balance);
  };

  return CrossFade;
}(_2.default);

CrossFade.defaultProps = {
  ease: _easing.linear
};

exports.default = function (props) {
  return new CrossFade(props);
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

var _calc = __webpack_require__(3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Physics = function (_Action) {
  _inherits(Physics, _Action);

  function Physics() {
    _classCallCheck(this, Physics);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  Physics.prototype.update = function update() {
    var _props = this.props,
        autoStopSpeed = _props.autoStopSpeed,
        acceleration = _props.acceleration,
        friction = _props.friction,
        velocity = _props.velocity,
        spring = _props.spring,
        to = _props.to;

    var newVelocity = velocity;
    var elapsed = (0, _framesync.timeSinceLastFrame)();

    // Apply acceleration to velocity
    if (acceleration) {
      newVelocity += (0, _calc.speedPerFrame)(acceleration, elapsed);
    }

    // Apply friction to velocity
    if (friction) {
      newVelocity *= Math.pow(1 - friction, elapsed / 100);
    }

    if (spring && to !== undefined) {
      var distanceToTarget = to - this.current;
      newVelocity += distanceToTarget * (0, _calc.speedPerFrame)(spring, elapsed);
    }

    // Apply velocity
    this.current += (0, _calc.speedPerFrame)(newVelocity, elapsed);
    this.props.velocity = newVelocity;

    // Check if simulation is complete
    // We do this here instead of `isActionComplete` as it allows us
    // to clamp during this update
    this.isComplete = autoStopSpeed !== false && (!newVelocity || Math.abs(newVelocity) <= autoStopSpeed);

    if (this.isComplete && spring) {
      this.current = to;
    }

    return this.current;
  };

  Physics.prototype.isActionComplete = function isActionComplete() {
    return this.isComplete;
  };

  return Physics;
}(_2.default);

Physics.defaultProps = {
  acceleration: 0,
  friction: 0,
  velocity: 0,
  autoStopSpeed: 0.001
};

exports.default = function (props) {
  return new Physics(props);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _value = __webpack_require__(12);

var _value2 = _interopRequireDefault(_value);

var _composite = __webpack_require__(10);

var _composite2 = _interopRequireDefault(_composite);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function createPointer(_ref2, _ref) {
  var x = _ref2.x,
      y = _ref2.y;

  var eventToPoints = _ref.eventToPoints,
      moveEvent = _ref.moveEvent,
      props = _objectWithoutProperties(_ref, ['eventToPoints', 'moveEvent']);

  var pointer = (0, _composite2.default)({
    x: (0, _value2.default)(x),
    y: (0, _value2.default)(y)
  }, _extends({
    preventDefault: true
  }, props));

  var updatePointer = function updatePointer(e) {
    if (pointer.getProp('preventDefault')) {
      e.preventDefault();
    }

    var points = eventToPoints(e);
    pointer.x.set(points.x);
    pointer.y.set(points.y);
  };

  pointer.setProps({
    _onStart: function _onStart() {
      return document.documentElement.addEventListener(moveEvent, updatePointer, { passive: !pointer.getProp('preventDefault') });
    },
    _onStop: function _onStop() {
      return document.documentElement.removeEventListener(moveEvent, updatePointer);
    }
  });

  return pointer;
}

var mouseEventToPoint = function mouseEventToPoint(e) {
  return {
    x: e.clientX,
    y: e.clientY
  };
};

var touchEventToPoint = function touchEventToPoint(_ref3) {
  var changedTouches = _ref3.changedTouches;
  return {
    x: changedTouches[0].clientX,
    y: changedTouches[0].clientY
  };
};

var getNativeEvent = function getNativeEvent(e) {
  return e.originalEvent || e.nativeEvent || e;
};

exports.default = function (e, props) {
  var nativeEvent = getNativeEvent(e);
  return nativeEvent.touches ? createPointer(touchEventToPoint(e), _extends({
    moveEvent: 'touchmove',
    eventToPoints: touchEventToPoint
  }, props)) : createPointer(mouseEventToPoint(e), _extends({
    moveEvent: 'mousemove',
    eventToPoints: mouseEventToPoint
  }, props));
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _value = __webpack_require__(12);

var _value2 = _interopRequireDefault(_value);

var _composite = __webpack_require__(10);

var _composite2 = _interopRequireDefault(_composite);

var _parallel = __webpack_require__(11);

var _parallel2 = _interopRequireDefault(_parallel);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function createTouches(initialTouches, _ref) {
  var eventToTouches = _ref.eventToTouches,
      moveEvent = _ref.moveEvent,
      props = _objectWithoutProperties(_ref, ['eventToTouches', 'moveEvent']);

  var touches = (0, _parallel2.default)(mapCoordsToActions(initialTouches), _extends({
    preventDefault: true
  }, props));

  function updateTouches(e) {
    if (props.preventDefault) e.preventDefault();

    var latestTouches = eventToTouches(e);
    updateActionWithTouches(touches, latestTouches);
  }

  touches.setProps({
    _onStart: function _onStart() {
      return document.documentElement.addEventListener(moveEvent, updateTouches);
    },
    _onStop: function _onStop() {
      return document.documentElement.removeEventListener(moveEvent, updateTouches);
    }
  });

  return touches;
}

function mapCoordsToActions(coords) {
  var actions = [];
  for (var i = 0; i < coords.length; i++) {
    var _coords$i = coords[i],
        x = _coords$i.x,
        y = _coords$i.y;

    actions[i] = (0, _composite2.default)({
      x: (0, _value2.default)(x),
      y: (0, _value2.default)(y)
    });
  }
  return actions;
}

function updateActionWithTouches(touches, newTouches) {
  for (var i = 0; i < newTouches.length; i++) {
    var _newTouches$i = newTouches[i],
        x = _newTouches$i.x,
        y = _newTouches$i.y;

    var touchAction = touches.getAction(i);
    if (touchAction !== undefined) {
      touchAction.x.set(x);
      touchAction.y.set(y);
    } else {
      touches.addAction((0, _composite2.default)({
        x: (0, _value2.default)(x),
        y: (0, _value2.default)(y)
      }));
    }
  }
}

var mouseEventToTouches = function mouseEventToTouches(_ref2) {
  var pageX = _ref2.pageX,
      pageY = _ref2.pageY;
  return [{ x: pageX, y: pageY }];
};
var touchEventToTouches = function touchEventToTouches(_ref3) {
  var touches = _ref3.touches;
  return extractCoords(touches);
};

function extractCoords(touches) {
  var coords = [];
  for (var i = 0; i < touches.length; i++) {
    var _touches$i = touches[i],
        clientX = _touches$i.clientX,
        clientY = _touches$i.clientY;

    coords[i] = {
      x: clientX,
      y: clientY
    };
  }
  return coords;
}

var getNativeEvent = function getNativeEvent(e) {
  return e.originalEvent || e.nativeEvent || e;
};

exports.default = function (e, props) {
  var nativeEvent = getNativeEvent(e);
  return nativeEvent.touches ? createTouches(touchEventToTouches(e), _extends({
    moveEvent: 'touchmove',
    eventToTouches: touchEventToTouches
  }, props)) : createTouches(mouseEventToTouches(e), _extends({
    moveEvent: 'mousemove',
    eventToTouches: mouseEventToTouches
  }, props));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _transformers = __webpack_require__(4);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var TrackOffset = function (_Action) {
  _inherits(TrackOffset, _Action);

  function TrackOffset() {
    _classCallCheck(this, TrackOffset);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  TrackOffset.prototype.onStart = function onStart() {
    var action = this.props.action;

    this.applyOffset = (0, _transformers.applyOffset)(action.get(), this.current);
  };

  TrackOffset.prototype.update = function update() {
    var action = this.props.action;

    return this.applyOffset(action.get());
  };

  return TrackOffset;
}(_2.default);

exports.default = function (action, props) {
  return new TrackOffset(_extends({ action: action }, props));
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _chain = __webpack_require__(15);

var _chain2 = _interopRequireDefault(_chain);

var _parallel = __webpack_require__(11);

var _parallel2 = _interopRequireDefault(_parallel);

var _delay = __webpack_require__(16);

var _delay2 = _interopRequireDefault(_delay);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/**
 * Creates a new parallel Action composed of chained
 * delay and actions. Interval can be either a number
 * to multiply by `i` or a function that will be provided `i`
 *
 * Straight cribbed from https://github.com/facebook/react-native/blob/24c72f513e48f0bdc40820b43262328fe2c301d4/Libraries/Animated/src/AnimatedImplementation.js#L2031
 * ^ This function sold a previously-conflicted me on the merit of moving from
 * jQuery-style multi-property animations to single-property.
 * @param  {array} actions
 * @param  {function | number} interval
 * @return {Action}
 */
exports.default = function (actions, interval, onComplete) {
  var intervalIsFunction = (0, _utils.isFunc)(interval);

  return (0, _parallel2.default)(actions.map(function (action, i) {
    var timeToDelay = intervalIsFunction ? interval(i) : i * interval;
    return (0, _chain2.default)([(0, _delay2.default)(timeToDelay), action]);
  }), { onComplete: onComplete });
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _ = __webpack_require__(2);

var _2 = _interopRequireDefault(_);

var _framesync = __webpack_require__(1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /*
    The closed-form damped harmonic oscillating spring.
    Or, spring.
  
    This is a direct port of Adam Miskiewicz's (@skevy) React Animated
    PR #15322 https://github.com/facebook/react-native/pull/15322/
  
    ```
    spring({
      mass: 2,
      damping: 10,
      stiffness: 100,
      to: 100
    }).start();
    ```
  
    Adam Miskiewicz:
    @skevy (twitter.com/skevy, github.com/skevy)
   */

var Spring = function (_Action) {
  _inherits(Spring, _Action);

  function Spring() {
    _classCallCheck(this, Spring);

    return _possibleConstructorReturn(this, _Action.apply(this, arguments));
  }

  Spring.prototype.onStart = function onStart() {
    var _props = this.props,
        velocity = _props.velocity,
        to = _props.to,
        from = _props.from;

    this.t = 0;
    this.initialVelocity = velocity ? velocity / 1000 : 0.0;
    this.isComplete = false;
    this.delta = to - from;
  };

  Spring.prototype.update = function update() {
    var _props2 = this.props,
        stiffness = _props2.stiffness,
        damping = _props2.damping,
        mass = _props2.mass,
        from = _props2.from,
        to = _props2.to,
        restSpeed = _props2.restSpeed,
        restDisplacement = _props2.restDisplacement;
    var delta = this.delta,
        initialVelocity = this.initialVelocity;

    var timeDelta = (0, _framesync.timeSinceLastFrame)() / 1000;
    var t = this.t = this.t + timeDelta;

    var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    var angularFreq = Math.sqrt(stiffness / mass);
    var expoDecay = angularFreq * Math.sqrt(1.0 - dampingRatio * dampingRatio);

    var x0 = 1;
    var oscillation = 0.0;

    // Underdamped
    if (dampingRatio < 1) {
      var envelope = Math.exp(-dampingRatio * angularFreq * t);
      oscillation = envelope * ((initialVelocity + dampingRatio * angularFreq * x0) / expoDecay * Math.sin(expoDecay * t) + x0 * Math.cos(expoDecay * t));
      this.velocity = envelope * (Math.cos(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * x0) - expoDecay * x0 * Math.sin(expoDecay * t)) - dampingRatio * angularFreq * envelope * (Math.sin(expoDecay * t) * (initialVelocity + dampingRatio * angularFreq * x0) / expoDecay + x0 * Math.cos(expoDecay * t));

      // Critically damped
    } else {
      var _envelope = Math.exp(-angularFreq * t);
      oscillation = _envelope * (x0 + (initialVelocity + angularFreq * x0) * t);
      this.velocity = _envelope * (t * initialVelocity * angularFreq - t * x0 * (angularFreq * angularFreq) + initialVelocity);
    }

    var fraction = 1 - oscillation;
    var position = from + fraction * delta;

    // Check if simulation is complete
    // We do this here instead of `isActionComplete` as it allows us
    // to clamp to end during update)
    var isBelowVelocityThreshold = Math.abs(this.velocity) <= restSpeed;
    var isBelowDisplacementThreshold = Math.abs(to - position) <= restDisplacement;
    this.isComplete = isBelowVelocityThreshold && isBelowDisplacementThreshold;

    if (this.isComplete) {
      position = to;
    }

    return position;
  };

  Spring.prototype.isActionComplete = function isActionComplete() {
    return this.isComplete;
  };

  return Spring;
}(_2.default);

Spring.defaultProps = {
  stiffness: 100,
  damping: 10,
  mass: 1.0,
  velocity: 0.0,
  from: 0.0,
  to: 0.0,
  restSpeed: 0.01,
  restDisplacement: 0.01
};

exports.default = function (props) {
  return new Spring(props);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = function (element, props) {
  return new CSSRenderer(_extends({
    element: element,
    enableHardwareAcceleration: true
  }, props));
};

var _ = __webpack_require__(7);

var _2 = _interopRequireDefault(_);

var _render = __webpack_require__(31);

var _render2 = _interopRequireDefault(_render);

var _transformProps = __webpack_require__(8);

var _transformProps2 = _interopRequireDefault(_transformProps);

var _valueTypes = __webpack_require__(17);

var _valueTypes2 = _interopRequireDefault(_valueTypes);

var _prefixer = __webpack_require__(18);

var _prefixer2 = _interopRequireDefault(_prefixer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var CSSRenderer = function (_Renderer) {
  _inherits(CSSRenderer, _Renderer);

  function CSSRenderer() {
    _classCallCheck(this, CSSRenderer);

    return _possibleConstructorReturn(this, _Renderer.apply(this, arguments));
  }

  CSSRenderer.prototype.onRender = function onRender() {
    var _props = this.props,
        element = _props.element,
        enableHardwareAcceleration = _props.enableHardwareAcceleration;

    (0, _render2.default)(element, this.state, this.changedValues, enableHardwareAcceleration);
  };

  CSSRenderer.prototype.onRead = function onRead(key) {
    var valueType = _valueTypes2.default[key];

    if (!_transformProps2.default[key]) {
      var element = this.props.element;

      var domValue = window.getComputedStyle(element, null)[(0, _prefixer2.default)(key)] || 0;
      return valueType && valueType.parse ? valueType.parse(domValue) : domValue;
    } else {
      if (valueType) {
        return valueType.default || 0;
      } else {
        return 0;
      }
    }
  };

  return CSSRenderer;
}(_2.default);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = buildStylePropertyString;

var _transformProps = __webpack_require__(8);

var _transformProps2 = _interopRequireDefault(_transformProps);

var _valueTypes = __webpack_require__(17);

var _valueTypes2 = _interopRequireDefault(_valueTypes);

var _prefixer = __webpack_require__(18);

var _prefixer2 = _interopRequireDefault(_prefixer);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var translate = _transformProps2.default.translate,
    translateX = _transformProps2.default.translateX,
    translateY = _transformProps2.default.translateY,
    translateZ = _transformProps2.default.translateZ,
    scale = _transformProps2.default.scale,
    scaleX = _transformProps2.default.scaleX,
    scaleY = _transformProps2.default.scaleY,
    scaleZ = _transformProps2.default.scaleZ,
    rotate = _transformProps2.default.rotate,
    rotateX = _transformProps2.default.rotateX,
    rotateY = _transformProps2.default.rotateY,
    rotateZ = _transformProps2.default.rotateZ;

var translateMap = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ'
};

var transformPropOrder = [translate, translateX, translateY, translateZ, scale, scaleX, scaleY, scaleZ, rotate, rotateX, rotateY, rotateZ];

function sortTransformProps(a, b) {
  return transformPropOrder.indexOf(a) - transformPropOrder.indexOf(b);
}

function buildStylePropertyString(element, state, changedValues, enableHardwareAcceleration) {
  var propertyString = '';
  var transformString = '';
  var hasTransform = false;
  var transformHasZ = false;

  // First check if there are any changed transform values
  // and if true add all transform values
  var numChangedValues = changedValues.length;
  for (var i = 0; i < numChangedValues; i++) {
    var key = changedValues[i];

    // If this is a transform property, add all other transform props
    // to changedValues and then break
    if (_transformProps2.default[key]) {
      hasTransform = true;

      for (var _key in state) {
        if (_transformProps2.default[_key] && changedValues.indexOf(_key) === -1) {
          changedValues.push(_key);
        }
      }

      break;
    }
  }

  changedValues.sort(sortTransformProps);

  // Now run through each property, and decide which is a plain style props,
  // a transform property and CSS vars and handle accordingly
  var totalNumChangedValues = changedValues.length;
  for (var _i = 0; _i < totalNumChangedValues; _i++) {
    var _key2 = changedValues[_i];
    var value = state[_key2];

    if (translateMap[_key2]) {
      _key2 = translateMap[_key2];
    }

    // If this is a number or object and we have filter, apply filter
    if (_valueTypes2.default[_key2] && ((0, _utils.isNum)(value) || (0, _utils.isObj)(value)) && _valueTypes2.default[_key2].transform) {
      value = _valueTypes2.default[_key2].transform(value);
    }

    // If a transform prop, add to transform string
    if (_transformProps2.default[_key2]) {
      transformString += _key2 + '(' + value + ') ';
      transformHasZ = _key2 === translateMap.z ? true : transformHasZ;

      // Or if a simple CSS property, set
    } else {
      propertyString += ';' + (0, _prefixer2.default)(_key2, true) + ':' + value;
    }
  }

  // If we have transform props, build a transform string
  if (hasTransform) {
    if (!transformHasZ && enableHardwareAcceleration) {
      transformString += translateMap.z + '(0)';
    }

    propertyString += ';' + (0, _prefixer2.default)('transform', true) + ':' + transformString;
  }

  element.style.cssText += propertyString;
}

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = function (element, props) {
  return new SVGRenderer(_extends({
    element: element
  }, props));
};

var _ = __webpack_require__(7);

var _2 = _interopRequireDefault(_);

var _build = __webpack_require__(33);

var _build2 = _interopRequireDefault(_build);

var _transformProps = __webpack_require__(8);

var _transformProps2 = _interopRequireDefault(_transformProps);

var _valueTypes = __webpack_require__(34);

var _valueTypes2 = _interopRequireDefault(_valueTypes);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SVGRenderer = function (_Renderer) {
  _inherits(SVGRenderer, _Renderer);

  function SVGRenderer(props) {
    _classCallCheck(this, SVGRenderer);

    var _this = _possibleConstructorReturn(this, _Renderer.call(this, props));

    var _props$element$getBBo = props.element.getBBox(),
        x = _props$element$getBBo.x,
        y = _props$element$getBBo.y,
        width = _props$element$getBBo.width,
        height = _props$element$getBBo.height;

    _this.elementDimensions = { x: x, y: y, width: width, height: height };
    return _this;
  }

  SVGRenderer.prototype.onRender = function onRender() {
    var element = this.props.element;

    var attrs = (0, _build2.default)(this.state, this.elementDimensions);
    (0, _utils.setDOMAttrs)(element, attrs);
  };

  SVGRenderer.prototype.onRead = function onRead(key) {
    var element = this.props.element;

    if (!_transformProps2.default[key]) {
      return element.getAttribute(key);
    } else {
      var valueType = _valueTypes2.default[key];
      return valueType ? valueType.default : 0;
    }
  };

  return SVGRenderer;
}(_2.default);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = build;

var _utils = __webpack_require__(0);

var _transformProps = __webpack_require__(8);

var _transformProps2 = _interopRequireDefault(_transformProps);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var ZERO_NOT_ZERO = 0.0001;

function build(state, data) {
  var hasTransform = false;
  var props = {};
  var scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
  var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
  var transformOriginX = data.width * ((state.originX || 50) / 100) + data.x;
  var transformOriginY = data.height * ((state.originY || 50) / 100) + data.y;
  var scaleTransformX = -transformOriginX * (scale * 1);
  var scaleTransformY = -transformOriginY * (scaleY * 1);
  var scaleReplaceX = transformOriginX / scale;
  var scaleReplaceY = transformOriginY / scaleY;
  var transform = {
    translate: 'translate(' + state.translateX + ', ' + state.translateY + ') ',
    scale: 'translate(' + scaleTransformX + ', ' + scaleTransformY + ') scale(' + scale + ', ' + scaleY + ') translate(' + scaleReplaceX + ', ' + scaleReplaceY + ') ',
    rotate: 'rotate(' + state.rotate + ', ' + transformOriginX + ', ' + transformOriginY + ') ',
    skewX: 'skewX(' + state.skewX + ') ',
    skewY: 'skewY(' + state.skewY + ') '
  };

  for (var key in state) {
    if (state.hasOwnProperty(key)) {
      if (_transformProps2.default[key]) {
        hasTransform = true;
      } else {
        props[(0, _utils.camelToDash)(key)] = state[key];
      }
    }
  }

  if (hasTransform) {
    props.transform = '';

    for (var _key in transform) {
      if (transform.hasOwnProperty(_key)) {
        var defaultValue = _key === 'scale' ? '1' : '0';
        props.transform += transform[_key].replace(/undefined/g, defaultValue);
      }
    }
  }

  return props;
}

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _valueTypes = __webpack_require__(5);

exports.default = {
  fill: _valueTypes.color,
  stroke: _valueTypes.color,
  scale: _valueTypes.scale,
  scaleX: _valueTypes.scale,
  scaleY: _valueTypes.scale,
  opacity: _valueTypes.alpha,
  fillOpacity: _valueTypes.alpha,
  strokeOpacity: _valueTypes.alpha
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = function (element, props) {
  return new SVGPathRenderer(_extends({
    element: element
  }, props));
};

var _ = __webpack_require__(7);

var _2 = _interopRequireDefault(_);

var _build = __webpack_require__(36);

var _build2 = _interopRequireDefault(_build);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SVGPathRenderer = function (_Renderer) {
  _inherits(SVGPathRenderer, _Renderer);

  function SVGPathRenderer(props) {
    _classCallCheck(this, SVGPathRenderer);

    var _this = _possibleConstructorReturn(this, _Renderer.call(this, props));

    var _props$element$getBBo = props.element.getBBox(),
        x = _props$element$getBBo.x,
        y = _props$element$getBBo.y,
        width = _props$element$getBBo.width,
        height = _props$element$getBBo.height;

    _this.elementDimensions = {
      x: x,
      y: y,
      width: width,
      height: height,
      pathLength: props.element.getTotalLength()
    };
    return _this;
  }

  SVGPathRenderer.prototype.onRender = function onRender() {
    var pathLength = this.elementDimensions.pathLength;
    var element = this.props.element;

    (0, _utils.setDOMAttrs)(element, (0, _build2.default)(this.state, pathLength));
  };

  SVGPathRenderer.prototype.onRead = function onRead(key) {
    return this.props.element.getAttribute(key);
  };

  return SVGPathRenderer;
}(_2.default);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/*
  Convert percentage to pixels

  @param [number]: Percentage of total length
  @param [number]: Total length
*/
var percentToPixels = function percentToPixels(percent, length) {
  return parseFloat(percent) / 100 * length + 'px';
};

exports.default = function (state, length) {
  var styles = {};
  var dashArrayStyles = {
    length: '0',
    spacing: length + 'px'
  };
  var hasDashArray = false;

  for (var key in state) {
    if (state.hasOwnProperty(key)) {
      var value = state[key];

      switch (key) {
        case 'length':
        case 'spacing':
          hasDashArray = true;
          dashArrayStyles[key] = percentToPixels(value, length);
          break;
        case 'offset':
          styles['stroke-dashoffset'] = percentToPixels(-value, length);
          break;
        default:
          styles[key] = value;
      }
    }
  }

  if (hasDashArray) {
    styles['stroke-dasharray'] = dashArrayStyles.length + ' ' + dashArrayStyles.spacing;
  }

  return styles;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = spinnable;

var _popmotion = __webpack_require__(13);

var angle = _popmotion.calc.angle;
function spinnable(node, _ref) {
  var _ref$initialRotation = _ref.initialRotation,
      initialRotation = _ref$initialRotation === undefined ? 0 : _ref$initialRotation,
      _ref$friction = _ref.friction,
      friction = _ref$friction === undefined ? 0.4 : _ref$friction,
      transformSpin = _ref.transformSpin,
      onSpin = _ref.onSpin;

  var renderer = (0, _popmotion.css)(node);
  var nodeRotation = (0, _popmotion.value)(initialRotation, function (v) {
    var current = transformSpin ? transformSpin(v) : v;
    if (onSpin) onSpin(current);
    renderer.set('rotate', current);
  });

  function startTracking(e) {
    e.preventDefault();
    var pointerAngle = (0, _popmotion.pointer)(e, {
      transform: function transform(v) {
        var nodePos = node.getBoundingClientRect();
        var nodeCenter = {
          x: nodePos.left + nodePos.width / 2,
          y: nodePos.top + nodePos.height / 2
        };
        var angleFromCenter = angle(nodeCenter, v);

        return angleFromCenter;
      }
    }).start();

    (0, _popmotion.trackOffset)(pointerAngle, {
      from: nodeRotation.get(),
      onUpdate: nodeRotation,
      onStop: function onStop() {
        return pointerAngle.stop();
      }
    }).start();
  }

  function stopTracking() {
    (0, _popmotion.physics)({
      from: nodeRotation.get(),
      velocity: nodeRotation.getVelocity(),
      friction: friction,
      onUpdate: nodeRotation
    }).start();
  }

  node.addEventListener('mousedown', startTracking);
  node.addEventListener('touchstart', startTracking, { passive: false });
  document.addEventListener('mouseup', stopTracking);
  document.addEventListener('touchend', stopTracking);

  return nodeRotation;
}

/***/ })
/******/ ]);