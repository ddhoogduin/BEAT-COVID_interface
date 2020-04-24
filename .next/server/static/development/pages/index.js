module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/dashboard.jsx":
/*!**********************************!*\
  !*** ./components/dashboard.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ddhoogduin/programs/BEAT-COVID_interface/components/dashboard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Dashboard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
      wrapped: true,
      ui: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, "Matthew"), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: `date example`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, "Joined in 2015")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, "r Matthew is a musician living in Nashville.")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
      extra: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      name: "user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }), "22 Friends")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/counterActions */ "./redux/actions/counterActions.js");
/* harmony import */ var _components_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboard */ "./components/dashboard.jsx");
var _jsxFileName = "/home/ddhoogduin/programs/BEAT-COVID_interface/pages/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class DashboardContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  static getInitialProps({
    store
  }) {}

  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(_components_dashboard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    });
  }

}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["incrementCounter"],
  decrementCounter: _redux_actions_counterActions__WEBPACK_IMPORTED_MODULE_2__["decrementCounter"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(DashboardContainer));

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: incrementCounter, decrementCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCounter", function() { return incrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCounter", function() { return decrementCounter; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./redux/constants.js");

const incrementCounter = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_COUNTER"]
});
const decrementCounter = () => ({
  type: _constants__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_COUNTER"]
});

/***/ }),

/***/ "./redux/constants.js":
/*!****************************!*\
  !*** ./redux/constants.js ***!
  \****************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ddhoogduin/programs/BEAT-COVID_interface/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map