(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./frontend/components/session/signup_form.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/session/signup_form.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var SignupForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SignupForm, _React$Component);

  var _super = _createSuper(SignupForm);

  function SignupForm(props) {
    var _this;

    _classCallCheck(this, SignupForm);

    _this = _super.call(this, props);
    _this.state = {
      username: "",
      email: "",
      password: "",
      errors: null
    };
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.demoLogin = _this.demoLogin.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SignupForm, [{
    key: "demoLogin",
    value: function demoLogin(e) {
      var _this2 = this;

      e.preventDefault();
      var demo = {
        username: "fake-user",
        email: "fakeuser@fake.com",
        password: "hunter12"
      };
      this.props.login(demo).then(function () {
        return _this2.props.history.push("/dashboard");
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.clearSessionErrors();
    }
  }, {
    key: "handleInput",
    value: function handleInput(type) {
      var _this3 = this;

      return function (e) {
        _this3.setState(_defineProperty({}, type, e.target.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this4 = this;

      e.preventDefault();
      var that = this;

      if (this.state.email === "") {
        this.setState({
          errors: "Don't forget your email address!"
        });
      } else if (this.state.password === "") {
        this.setState({
          errors: "You forgot to enter your password!"
        });
      } else {
        this.props.signup(this.state).then(function () {
          return _this4.props.history.push("/dashboard");
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var errors = null;

      if (this.props.errors.length > 0) {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
          className: "errors"
        }, this.props.errors.map(function (error, idx) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: "error ".concat(idx)
          }, error);
        }));
      }

      if (this.state.errors) {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "errors"
        }, this.state.errors);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "splash"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "splash-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "app-name"
      }, "adventr"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        id: "username",
        value: this.state.username,
        onChange: this.handleInput("username"),
        placeholder: "Username"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "email",
        required: true,
        id: "email",
        value: this.state.email,
        onChange: this.handleInput("email"),
        placeholder: "Email"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        id: "password",
        value: this.state.password,
        onChange: this.handleInput("password"),
        placeholder: "Password"
      }), errors, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "signup",
        onClick: this.handleSubmit
      }, "Sign Up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "demo-user",
        onClick: this.demoLogin
      }, "Demo User")));
    }
  }]);

  return SignupForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./frontend/components/session/signup_form_container.js":
/*!**************************************************************!*\
  !*** ./frontend/components/session/signup_form_container.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _signup_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup_form */ "./frontend/components/session/signup_form.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  var errors = state.errors.session;
  return {
    errors: errors
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signup: function signup(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__["signup"])(user));
    },
    login: function login(user) {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__["login"])(user));
    },
    clearSessionErrors: function clearSessionErrors() {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__["clearSessionErrors"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_signup_form__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=9.bundle.js.map