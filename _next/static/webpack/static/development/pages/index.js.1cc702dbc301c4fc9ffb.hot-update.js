webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/Components/Layouts/Portal.js":
/*!******************************************!*\
  !*** ./src/Components/Layouts/Portal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Portal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/pskanade/ferretsio/ferretsio_dev/src/Components/Layouts/Portal.js";

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



var transitions = "fly up";

var Portal =
/*#__PURE__*/
function (_Component) {
  _inherits(Portal, _Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      animation: transitions,
      duration: 500,
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e, _ref) {
      var name = _ref.name,
          value = _ref.value;
      return _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      return _this.setState({
        open: !_this.state.open
      });
    });

    return _this;
  }

  _createClass(Portal, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          duration = _this$state.duration,
          open = _this$state.open;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        columns: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"].Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Input, {
        label: "Duration: ".concat(duration, "ms "),
        min: 100,
        max: 2000,
        name: "duration",
        onChange: this.handleChange,
        step: 100,
        type: "range",
        value: duration,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Form"].Button, {
        content: open ? "Close Portal" : "Open Portal",
        negative: open,
        positive: !open,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["TransitionablePortal"], {
        open: open,
        transition: {
          transitions: transitions,
          duration: duration
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
        style: {
          left: "40%",
          position: "fixed",
          top: "50%",
          zIndex: 1000
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "This is a controlled portal"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Portals have tons of great callback functions to hook into."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "To close, simply click the close button or click away")))));
    }
  }]);

  return Portal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.1cc702dbc301c4fc9ffb.hot-update.js.map