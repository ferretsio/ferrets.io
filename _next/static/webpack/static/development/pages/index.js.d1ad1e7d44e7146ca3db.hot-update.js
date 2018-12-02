webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Components/Pages/When.js":
/*!**************************************!*\
  !*** ./src/Components/Pages/When.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return When; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_css_When_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/css/When.css */ "./static/css/When.css");
/* harmony import */ var _static_css_When_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_css_When_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/pskanade/ferretsio/ferretsio_dev/src/Components/Pages/When.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var AnimatedCard = function AnimatedCard(_ref) {
  var position = _ref.position,
      animation = _ref.animation,
      digit = _ref.digit;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _static_css_When_css__WEBPACK_IMPORTED_MODULE_1___default.a.flipCard,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: position,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: animation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, digit))));
};

var When =
/*#__PURE__*/
function (_Component) {
  _inherits(When, _Component);

  function When() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, When);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(When)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true
    });

    return _this;
  }

  _createClass(When, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.updateTime();
      }, 50);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: "updateTime",
    value: function updateTime() {
      // get new date
      var time = new Date(); // set time units

      var hours = time.getHours();
      var minutes = time.getMinutes();
      var seconds = time.getSeconds(); // on hour chanage, update hours and shuffle state

      if (hours !== this.state.hours) {
        var hoursShuffle = !this.state.hoursShuffle;
        this.setState({
          hours: hours,
          hoursShuffle: hoursShuffle
        });
      } // on minute chanage, update minutes and shuffle state


      if (minutes !== this.state.minutes) {
        var minutesShuffle = !this.state.minutesShuffle;
        this.setState({
          minutes: minutes,
          minutesShuffle: minutesShuffle
        });
      } // on second chanage, update seconds and shuffle state


      if (seconds !== this.state.seconds) {
        var secondsShuffle = !this.state.secondsShuffle;
        this.setState({
          seconds: seconds,
          secondsShuffle: secondsShuffle
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      // state object destructuring
      var _this$state = this.state,
          hours = _this$state.hours,
          minutes = _this$state.minutes,
          seconds = _this$state.seconds,
          hoursShuffle = _this$state.hoursShuffle,
          minutesShuffle = _this$state.minutesShuffle,
          secondsShuffle = _this$state.secondsShuffle;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _static_css_When_css__WEBPACK_IMPORTED_MODULE_1___default.a.when,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _static_css_When_css__WEBPACK_IMPORTED_MODULE_1___default.a.flipClock,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlipUnitContainer, {
        unit: "hours",
        digit: hours,
        shuffle: hoursShuffle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlipUnitContainer, {
        unit: "minutes",
        digit: minutes,
        shuffle: minutesShuffle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FlipUnitContainer, {
        unit: "seconds",
        digit: seconds,
        shuffle: secondsShuffle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })));
    }
  }]);

  return When;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.d1ad1e7d44e7146ca3db.hot-update.js.map