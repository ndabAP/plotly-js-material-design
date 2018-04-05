(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("plotly-js-material-design", [], factory);
	else if(typeof exports === 'object')
		exports["plotly-js-material-design"] = factory();
	else
		root["plotly-js-material-design"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _layout = __webpack_require__(1);

Object.defineProperty(exports, 'layout', {
  enumerable: true,
  get: function get() {
    return _layout.layout;
  }
});

var _scatter = __webpack_require__(2);

Object.defineProperty(exports, 'scatter', {
  enumerable: true,
  get: function get() {
    return _scatter.scatter;
  }
});

var _bar = __webpack_require__(3);

Object.defineProperty(exports, 'bar', {
  enumerable: true,
  get: function get() {
    return _bar.bar;
  }
});

var _pie = __webpack_require__(4);

Object.defineProperty(exports, 'pie', {
  enumerable: true,
  get: function get() {
    return _pie.pie;
  }
});

var _histogram = __webpack_require__(5);

Object.defineProperty(exports, 'histogram', {
  enumerable: true,
  get: function get() {
    return _histogram.histogram;
  }
});

var _histogram2d = __webpack_require__(6);

Object.defineProperty(exports, 'histogram2d', {
  enumerable: true,
  get: function get() {
    return _histogram2d.histogram2d;
  }
});

var _violin = __webpack_require__(7);

Object.defineProperty(exports, 'violin', {
  enumerable: true,
  get: function get() {
    return _violin.violin;
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var layout = exports.layout = {
  font: {
    family: 'Roboto, sans-serif'
  },

  colorway: ['#4285F4', '#DB4437', '#F4B400', '#3F51B5', '#E91E63', '#9C27B0', '#673AB7', '#F44336', '#2196F3', '#03A9F4', '#00BCD4', '#009688'],

  xaxis: {
    rangeslider: {
      visible: false,
      borderwidth: 0
    },

    zerolinecolor: '#9E9E9E',

    gridcolor: '#E0E0E0',

    titlefont: {
      color: '#424242',
      size: 12
    },

    tickfont: {
      color: '#757575',
      size: 12
    },

    showgrid: false
  },

  yaxis: {
    zerolinecolor: '#9E9E9E',

    gridcolor: '#E0E0E0',

    titlefont: {
      color: '#424242',
      size: 12
    },

    tickfont: {
      color: '#757575',
      size: 12
    }
  },

  bargroupgap: 0.01,

  legend: {
    font: {
      size: 16
    }
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var scatter = exports.scatter = {
  lines: {
    line: {
      width: 2
    }
  },

  markers: {}
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bar = exports.bar = {};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pie = exports.pie = {
  hole: 0.5,
  textfont: {
    color: '#fff'
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var histogram = exports.histogram = {};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var histogram2d = exports.histogram2d = {
  colorscale: [['0', '#4285F4'], ['1', '#DB4437']],
  colorbar: {
    len: 1,
    outlinewidth: 0
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var violin = exports.violin = {
  line: {
    width: 0
  }
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=library.js.map