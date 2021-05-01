(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./frontend/components/user/settings.jsx":
/*!***********************************************!*\
  !*** ./frontend/components/user/settings.jsx ***!
  \***********************************************/
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



var Settings = /*#__PURE__*/function (_React$Component) {
  _inherits(Settings, _React$Component);

  var _super = _createSuper(Settings);

  function Settings(props) {
    var _this;

    _classCallCheck(this, Settings);

    _this = _super.call(this, props);
    _this.state = {
      selectedOptions: 'account',
      editingAppearance: false,
      username: _this.props.currentUser.username,
      email: _this.props.currentUser.email,
      oldPassword: '',
      password: '',
      avatarUrl: _this.props.currentUser.avatarUrl || '',
      avatarFile: null,
      guild_name: _this.props.currentUser.guild_name || 'Untitled',
      guild_description: _this.props.currentUser.guild_description || ''
    };
    _this.switchOptions = _this.switchOptions.bind(_assertThisInitialized(_this));
    _this.toggleAttributes = _this.toggleAttributes.bind(_assertThisInitialized(_this));
    _this.toggleAppearance = _this.toggleAppearance.bind(_assertThisInitialized(_this));
    _this.handleInput = _this.handleInput.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleGuildSubmit = _this.handleGuildSubmit.bind(_assertThisInitialized(_this));
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
    _this.resetState = _this.resetState.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Settings, [{
    key: "resetState",
    value: function resetState() {
      this.setState({
        // editingAppearance: false,
        username: this.props.currentUser.username,
        email: this.props.currentUser.email,
        oldPassword: '',
        password: '',
        guild_name: this.props.currentUser.guild_name || 'Untitled',
        guild_description: this.props.currentUser.guild_description || '',
        avatarUrl: this.props.currentUser.avatarUrl || '',
        avatarFile: null
      });
    }
  }, {
    key: "handleUpload",
    value: function handleUpload(e, type) {
      var _this2 = this;

      e.preventDefault();
      var reader = new FileReader();
      var file = e.currentTarget.files[0];

      reader.onloadend = function () {
        return _this2.setState({
          avatarUrl: reader.result,
          avatarFile: file
        });
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({
          avatarUrl: this.props.currentUser.avatarUrl || "",
          avatarFile: null
        });
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(type) {
      var _this3 = this;

      return function (e) {
        _this3.setState(_defineProperty({}, type, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e, type) {
      e.preventDefault();
      var formData = new FormData();
      formData.append('user[id]', this.props.currentUser.id);
      formData.append("user[".concat(type, "]"), this.state[type]);
      formData.append('old_password', this.state.oldPassword);
      this.props.updateUser(formData);
      this.toggleAttributes(e, type);
    }
  }, {
    key: "handleGuildSubmit",
    value: function handleGuildSubmit(e) {
      e.preventDefault();
      var formData = new FormData();
      formData.append('user[id]', this.props.currentUser.id);
      formData.append("user[guild_name]", this.state.guild_name);
      formData.append("user[guild_description]", this.state.guild_description);

      if (this.state.avatarFile) {
        formData.append("user[avatar_image]", this.state.avatarFile);
      }

      formData.append('old_password', this.state.oldPassword);
      this.props.updateUser(formData);
      this.toggleAppearance();
    }
  }, {
    key: "switchOptions",
    value: function switchOptions(choice) {
      this.setState({
        selectedOptions: choice
      });
    }
  }, {
    key: "toggleAppearance",
    value: function toggleAppearance() {
      this.setState({
        editingAppearance: !this.state.editingAppearance // guild_name: this.props.currentUser.guild_name || 'Untitled',
        // guild_description: this.props.currentUser.guild_description || '',

      });
      this.resetState();
    }
  }, {
    key: "toggleAttributes",
    value: function toggleAttributes(e, type) {
      e.preventDefault();
      document.querySelectorAll("[data-attribute-type='".concat(type, "']")).forEach(function (ele) {
        return ele.classList.toggle('hide');
      }); // let resetInput;
      // if (type === 'password') resetInput = '';
      // else {
      //   resetInput = this.props.currentUser[type];
      // }
      // //temporary password clear
      // document.querySelectorAll('.attribute-input .password')
      //   .forEach((ele) => ele.value = '');
      // this.setState({ [type]: resetInput });

      this.resetState();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var currentUser = this.props.currentUser;
      var settingsLeft;

      switch (this.state.selectedOptions) {
        case 'account':
          settingsLeft = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "settings-left"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "left-title"
          }, "Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "settings-left-panel"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "panel-title"
          }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-attribute-type": "email",
            className: "attribute-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "current-attribute"
          }, currentUser.email)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-attribute-type": "email",
            className: "attribute-edit-container hide"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "text",
            className: "attribute-input",
            defaultValue: currentUser.email,
            onChange: this.handleInput('email')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "password",
            className: "attribute-input password",
            placeholder: "Confirm Password",
            value: this.state.oldPassword,
            onChange: this.handleInput('oldPassword')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "attribute-edit-button-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "cancel-button",
            onClick: function onClick(e) {
              return _this4.toggleAttributes(e, 'email');
            }
          }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this4.handleSubmit(e, 'email');
            },
            className: "save-button"
          }, "Save"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-attribute-type": "email",
            className: "edit-button-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "fas fa-feather-alt",
            onClick: function onClick(e) {
              return _this4.toggleAttributes(e, 'email');
            }
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "settings-left-panel"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "panel-title"
          }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-attribute-type": "password",
            className: "attribute-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "current-attribute"
          }, "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-attribute-type": "password",
            className: "attribute-edit-container hide"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "password",
            className: "attribute-input password",
            placeholder: "Confirm Password",
            value: this.state.oldPassword,
            onChange: this.handleInput('oldPassword')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "password",
            className: "attribute-input password",
            placeholder: "New Password",
            value: this.state.password,
            onChange: this.handleInput('password')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "attribute-edit-button-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "cancel-button",
            onClick: function onClick(e) {
              return _this4.toggleAttributes(e, 'password');
            }
          }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this4.handleSubmit(e, 'password');
            },
            className: "save-button"
          }, "Save"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-attribute-type": "password",
            className: "edit-button-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "fas fa-feather-alt",
            onClick: function onClick(e) {
              return _this4.toggleAttributes(e, 'password');
            }
          }))));
          break;

        case 'guild':
          var leftHeader = this.state.editingAppearance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "left-title-section"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "title-username edit"
          }, "Edit Appearance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "edit-appearance-button-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            onClick: this.toggleAppearance,
            className: "cancel-button"
          }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            onClick: this.handleGuildSubmit,
            className: "save-button"
          }, "Save"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "left-title-section"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "title-username"
          }, currentUser.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            onClick: this.toggleAppearance,
            className: "edit-appearance-button"
          }, "Don Your Armor"));
          var guildDetails = this.state.editingAppearance ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "guild-details edit"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "text",
            className: "guildname-input",
            defaultValue: this.state.guild_name,
            onChange: this.handleInput('guild_name')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "text",
            className: "guild-description-input",
            placeholder: "Description",
            defaultValue: this.state.guild_description,
            onChange: this.handleInput('guild_description')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "password",
            className: "guild-description-input",
            placeholder: "Current Password",
            value: this.state.oldPassword,
            onChange: this.handleInput('oldPassword')
          })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "guild-details"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "guildname"
          }, currentUser.guild_name || 'Untitled'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "guild-description"
          }, currentUser.guild_description || ''));
          settingsLeft = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "settings-left ".concat(this.state.editingAppearance ? 'edit' : '')
          }, leftHeader, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "appearance-section ".concat(this.state.editingAppearance ? 'edit' : '')
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "appearance-banner-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "appearance-banner ".concat(this.state.editingAppearance ? '' : 'hide'),
            src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ca7eb999-198d-4058-930a-9c99da62d96f/d5ulvau-a27e97a0-c5b9-491c-9880-d2bac30ac7a5.jpg/v1/fill/w_1065,h_750,q_70,strp/marfling_swamp___le_dernier_bastion_by_skavenzverov_d5ulvau-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMTI4IiwicGF0aCI6IlwvZlwvY2E3ZWI5OTktMTk4ZC00MDU4LTkzMGEtOWM5OWRhNjJkOTZmXC9kNXVsdmF1LWEyN2U5N2EwLWM1YjktNDkxYy05ODgwLWQyYmFjMzBhYzdhNS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8BTJXNKdLu89YM1z78RVdRQl2Ita2VDuPLOjz-XA2Bg"
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "appearance-avatar-container"
          }, this.state.editingAppearance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
            htmlFor: "upload-box",
            className: "avatar-edit-button-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "avatar-edit-button fas fa-feather-alt"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "file",
            accept: "image/*",
            id: "upload-box",
            onChange: function onChange(e) {
              return _this4.handleUpload(e, 'avatar');
            }
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: "appearance-avatar ".concat(this.state.editingAppearance ? 'edit' : ''),
            src: this.state.avatarUrl
          })), guildDetails), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "settings-left-panel"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "panel-title"
          }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-attribute-type": "username",
            className: "attribute-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "current-attribute"
          }, currentUser.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-attribute-type": "username",
            className: "attribute-edit-container hide"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "text",
            className: "attribute-input",
            value: currentUser.username,
            onChange: this.handleInput('username')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
            type: "password",
            className: "attribute-input password",
            placeholder: "Confirm Password",
            value: this.state.oldPassword,
            onChange: this.handleInput('oldPassword')
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "attribute-edit-button-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "cancel-button",
            onClick: function onClick(e) {
              return _this4.toggleAttributes(e, 'username');
            }
          }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            onClick: function onClick(e) {
              return _this4.handleSubmit(e, 'username');
            },
            className: "save-button"
          }, "Save"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            "data-attribute-type": "username",
            className: "edit-button-container"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "fas fa-feather-alt",
            onClick: function onClick(e) {
              return _this4.toggleAttributes(e, 'username');
            }
          }))));
          break;

        default:
          settingsLeft = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-background"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-container"
      }, settingsLeft, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-right-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this4.switchOptions('account');
        },
        className: "settings-right-panel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "Account"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "description"
      }, "Adventurer's Gear")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this4.switchOptions('dashboard');
        },
        className: "settings-right-panel"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title"
      }, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "description"
      }, "Just for Testing"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-right-bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-right-bottom-title"
      }, "Guilds"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this4.switchOptions('guild');
        },
        className: "guild-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: currentUser.avatarUrl,
        className: "guild-container-avatar"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "guild-container-details"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "guild-container-username"
      }, currentUser.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "guild-container-guildname"
      }, currentUser.guild_name || currentUser.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "guild-container-primary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-star"
      })))))));
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./frontend/components/user/settings_container.js":
/*!********************************************************!*\
  !*** ./frontend/components/user/settings_container.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./frontend/components/user/settings.jsx");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.session.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUser: function fetchUser(userId) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUser"])(userId));
    },
    updateUser: function updateUser(user) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["updateUser"])(user));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_settings__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=11.bundle.js.map