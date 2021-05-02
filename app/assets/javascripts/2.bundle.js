(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./frontend/components/modal/avatar_container.js":
/*!*******************************************************!*\
  !*** ./frontend/components/modal/avatar_container.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _avatar_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./avatar_upload */ "./frontend/components/modal/avatar_upload.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.session.currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_avatar_upload__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/modal/avatar_upload.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/modal/avatar_upload.jsx ***!
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



var AvatarUpload = /*#__PURE__*/function (_React$Component) {
  _inherits(AvatarUpload, _React$Component);

  var _super = _createSuper(AvatarUpload);

  function AvatarUpload(props) {
    var _this;

    _classCallCheck(this, AvatarUpload);

    _this = _super.call(this, props);
    var currentUser = _this.props.currentUser;
    _this.state = {
      currentUser_id: currentUser.id,
      imageUrl: null,
      imageFile: null,
      errors: null,
      allowSubmit: true
    };
    _this.reference = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
    _this.deletePreviewImage = _this.deletePreviewImage.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(AvatarUpload, [{
    key: "handleInput",
    value: function handleInput(type) {
      var _this2 = this;

      return function (e) {
        _this2.setState(_defineProperty({}, type, e.currentTarget.value));
      };
    }
  }, {
    key: "handleUpload",
    value: function handleUpload(e) {
      var _this3 = this;

      var reader = new FileReader();
      var file = e.currentTarget.files[0];

      reader.onloadend = function () {
        return _this3.setState({
          imageUrl: reader.result,
          imageFile: file
        });
      };

      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({
          imageUrl: "",
          imageFile: null
        });
      }
    }
  }, {
    key: "deletePreviewImage",
    value: function deletePreviewImage(idx) {
      var index = idx.idx;
      var imageUrls = this.state.imageUrls.slice();
      var imageFiles = this.state.imageFiles.slice();
      imageUrls.splice(index, 1);
      imageFiles.splice(index, 1);
      if (imageUrls && imageUrls.length === 0) imageUrls = null;
      if (imageFiles && imageFiles.length === 0) imageFiles = null;
      this.setState({
        imageUrl: imageUrl,
        imageFile: imageFile
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var formData = new FormData();

      if (this.state.photoFile) {
        formData.append('post[photo]', this.state.photoFile);
      }

      $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          closeModal = _this$props.closeModal,
          currentUser = _this$props.currentUser;
      var imageFiles = this.state.imageFiles;
      var titleSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "Title",
        className: "input-title",
        onChange: this.handleInput("title")
      });
      var imagePreviews = this.state.imageUrls ? this.state.imageUrls.map(function (imageUrl, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: idx,
          className: "image-preview-box"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "image-preview",
          src: imageUrl
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-times-circle delete-preview",
          onClick: function onClick() {
            return _this4.deletePreviewImage({
              idx: idx
            });
          }
        }));
      }) : null;
      var imageLabel = this.state.imageFiles != null ? "Add more photos" : "Upload Photos!";
      var imageUploadSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-upload-box"
      }, imagePreviews, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "upload-box",
        className: "upload-label-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "camera-icon-text-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "camera-icon fas fa-camera"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, imageLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        accept: "image/*",
        id: "upload-box",
        onChange: this.handleUpload,
        multiple: true
      })));
      var disabled = true;

      if (title != "" || text != "" || imageFiles != null) {
        disabled = false;
      } else {
        disabled = true;
      }

      ;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quest-form-box quest-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quest-form-top-block"
      }, currentUser.username), imageUploadSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quest-form-bottom-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "quest-close",
        onClick: closeModal
      }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        disabled: disabled,
        className: "quest-create",
        onClick: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Create")))));
    }
  }]);

  return AvatarUpload;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AvatarUpload);

/***/ }),

/***/ "./frontend/components/modal/edit_quest_container.js":
/*!***********************************************************!*\
  !*** ./frontend/components/modal/edit_quest_container.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _new_quest_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new_quest_form */ "./frontend/components/modal/new_quest_form.jsx");
/* harmony import */ var _actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/quest_actions */ "./frontend/actions/quest_actions.js");
/* harmony import */ var _actions_tag_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/tag_actions */ "./frontend/actions/tag_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");






var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.session.currentUser,
    tags: Object.values(state.entities.tags),
    type: ownProps.type,
    quest: ownProps.quest,
    task: 'edit'
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    questSubmitAction: function questSubmitAction(quest) {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__["updateQuest"])(quest));
    },
    fetchAllTags: function fetchAllTags() {
      return dispatch(Object(_actions_tag_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllTags"])());
    },
    fetchAllQuests: function fetchAllQuests() {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__["fetchAllQuests"])());
    },
    createTag: function createTag(tag) {
      return dispatch(Object(_actions_tag_actions__WEBPACK_IMPORTED_MODULE_3__["createTag"])(tag));
    },
    addTagToQuest: function addTagToQuest(quests_tag) {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__["addTagToQuest"])(quests_tag));
    },
    removeTagFromQuest: function removeTagFromQuest(tag_join_id) {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__["removeTagFromQuest"])(tag_join_id));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_new_quest_form__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/modal/modal.jsx":
/*!*********************************************!*\
  !*** ./frontend/components/modal/modal.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user_page */ "./frontend/components/modal/user_page.jsx");
/* harmony import */ var _user_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user_menu */ "./frontend/components/modal/user_menu.jsx");
/* harmony import */ var _new_quest_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new_quest_container */ "./frontend/components/modal/new_quest_container.js");
/* harmony import */ var _avatar_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./avatar_container */ "./frontend/components/modal/avatar_container.js");
/* harmony import */ var _new_quest_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new_quest_selector */ "./frontend/components/modal/new_quest_selector.jsx");
/* harmony import */ var _edit_quest_container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit_quest_container */ "./frontend/components/modal/edit_quest_container.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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











var Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    _classCallCheck(this, Modal);

    return _super.call(this, props);
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          modal = _this$props.modal,
          closeModal = _this$props.closeModal,
          openModal2 = _this$props.openModal2,
          quest = _this$props.quest;

      if (!modal) {
        return null;
      }

      var background;
      var container;
      var component;
      var formType;
      var onClickEffect;
      var transparentBackground;

      var userPageClose = function userPageClose(e) {
        e.preventDefault();
        document.querySelector('.user-page-container').classList.add('close');
        window.setTimeout(function () {
          closeModal();
        }, 500);
      };

      if (modal.slice(0, 4) === 'new-') {
        formType = modal.slice(4);
      }

      switch (modal) {
        case 'new-text':
        case 'new-image':
        case 'new-quote':
        case 'new-audio':
        case 'new-video':
          component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_new_quest_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
            type: formType
          });
          background = 'new-quest-background';
          container = 'new-quest-container';
          onClickEffect = closeModal;
          transparentBackground = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "test-background"
          });
          break;

        case 'edit-quest':
          component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_edit_quest_container__WEBPACK_IMPORTED_MODULE_8__["default"], {
            type: quest.quest_type,
            quest: quest
          });
          background = 'new-quest-background';
          container = 'new-quest-container';
          onClickEffect = closeModal;
          transparentBackground = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "test-background"
          });
          break;

        case 'avatar':
          component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_avatar_container__WEBPACK_IMPORTED_MODULE_6__["default"], null);
          background = 'new-avatar-background';
          container = 'new-avatar-container';
          onClickEffect = closeModal;
          break;

        case 'usermenu':
          component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
            openModal2: openModal2,
            closeModal: closeModal
          });
          background = 'user-menu-background';
          container = 'user-menu-container';
          onClickEffect = null;
          break;

        case 'userpage':
          component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_page__WEBPACK_IMPORTED_MODULE_3__["default"], {
            authorId: event.target.id
          });
          background = 'user-page-background';
          container = 'user-page-container';
          onClickEffect = userPageClose;
          break;

        case 'new-quest-selector':
          component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_new_quest_selector__WEBPACK_IMPORTED_MODULE_7__["default"], null);
          background = 'quest-selector-background';
          container = 'quest-selector-container';
          onClickEffect = closeModal;
          break;

        default:
          return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, transparentBackground, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: background,
        onClick: function onClick(e) {
          return onClickEffect(e);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: container,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, component)));
    }
  }]);

  return Modal;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  var modal = state.ui.modal;
  var quest;

  if (modal && modal.startsWith('edit-quest')) {
    modal = state.ui.modal.slice(0, 10);
    var id = parseInt(state.ui.modal.slice(11));
    quest = state.entities.quests[id];
  }

  return {
    quest: quest,
    modal: modal,
    modal2: state.ui.modal2
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])(modal));
    },
    openModal2: function openModal2(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal2"])(modal));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Modal));

/***/ }),

/***/ "./frontend/components/modal/new_quest_container.js":
/*!**********************************************************!*\
  !*** ./frontend/components/modal/new_quest_container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _new_quest_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new_quest_form */ "./frontend/components/modal/new_quest_form.jsx");
/* harmony import */ var _actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/quest_actions */ "./frontend/actions/quest_actions.js");
/* harmony import */ var _actions_tag_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/tag_actions */ "./frontend/actions/tag_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");






var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.session.currentUser,
    tags: Object.values(state.entities.tags),
    type: ownProps.type,
    task: 'create'
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    questSubmitAction: function questSubmitAction(quest) {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__["createQuest"])(quest));
    },
    fetchAllTags: function fetchAllTags() {
      return dispatch(Object(_actions_tag_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllTags"])());
    },
    fetchAllQuests: function fetchAllQuests() {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__["fetchAllQuests"])());
    },
    createTag: function createTag(tag) {
      return dispatch(Object(_actions_tag_actions__WEBPACK_IMPORTED_MODULE_3__["createTag"])(tag));
    },
    addTagToQuest: function addTagToQuest(quests_tag) {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__["addTagToQuest"])(quests_tag));
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_4__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_new_quest_form__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/modal/new_quest_form.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/modal/new_quest_form.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loading/loading */ "./frontend/components/loading/loading.jsx");
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




var NewQuestForm = /*#__PURE__*/function (_React$Component) {
  _inherits(NewQuestForm, _React$Component);

  var _super = _createSuper(NewQuestForm);

  function NewQuestForm(props) {
    var _this;

    _classCallCheck(this, NewQuestForm);

    _this = _super.call(this, props);
    var _this$props = _this.props,
        type = _this$props.type,
        currentUser = _this$props.currentUser,
        quest = _this$props.quest;
    _this.state = {
      currentUser_id: currentUser.id,
      id: quest ? quest.id : null,
      type: type,
      title: quest ? quest.title : '',
      text: quest ? quest.text : '',
      tags: quest ? quest.tag_joins.map(function (tag_join) {
        return tag_join.tag.tag_name;
      }) : [],
      oldImageUrls: quest ? quest.imageUrls : null,
      imageUrls: null,
      imageFiles: null,
      errors: null,
      allowSubmit: false,
      loading: false
    }; // this.reference = React.createRef();

    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    _this.handleUpload = _this.handleUpload.bind(_assertThisInitialized(_this));
    _this.deletePreviewImage = _this.deletePreviewImage.bind(_assertThisInitialized(_this));
    _this.createTag = _this.createTag.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NewQuestForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchAllTags();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.fetchAllQuests().then(function () {});
    }
  }, {
    key: "deleteTag",
    value: function deleteTag(e) {
      var tagToDelete = e.target.innerHTML.slice(1);
      console.log(tagToDelete);
      var index = this.state.tags.indexOf(tagToDelete);
      var newTagArray = this.state.tags.slice(0, index).concat(this.state.tags.slice(index + 1, this.state.tags.length));
      this.setState({
        tags: newTagArray
      });

      if (this.props.task === 'edit') {
        this.props.quest.tag_joins.forEach(function (tag_join) {
          if (tag_join.tag.tag_name === tagToDelete) {
            that.setState({
              allowSubmit: false
            });
            that.props.removeTagFromQuest(tag_join.id).then(function () {
              that.setState({
                allowSubmit: true
              });
            });
          }
        });
      }

      e.target.remove();
    }
  }, {
    key: "createTag",
    value: function createTag(e) {
      var that = this;

      if (e.key === 'Enter' && e.target.value !== '') {
        var tag = e.target.value.toLowerCase();
        if (tag[0] === '#') tag = tag.slice(1);

        if (this.state.tags.indexOf(tag) === -1) {
          this.setState({
            tags: this.state.tags.concat([tag])
          });

          if (this.props.task === 'edit') {
            console.log('HIT');
            this.setState({
              allowSubmit: true
            });
          } // console.log(e.target);
          // const newDiv = document.createElement('div');
          // newDiv.classList.add('enteredTag');
          // newDiv.innerHTML = `#${tag}`;
          // newDiv.addEventListener('click', (e) => {
          //   const tagToDelete = e.target.innerHTML.slice(1);
          //   const index = this.state.tags.indexOf(tagToDelete);
          //   const newTagArray = this.state.tags
          //     .slice(0, index)
          //     .concat(this.state.tags.slice(index + 1, this.state.tags.length));
          //   this.setState({ tags: newTagArray });
          //   e.target.remove();
          // });
          // e.target.parentElement.insertBefore(newDiv, e.target);

        }

        e.target.value = null;
      } else if (e.key === 'Backspace' && this.state.tags.length > 0 && e.target.value === '') {
        var lastEle = this.state.tags.length - 1;
        var tagToDelete = this.state.tags[lastEle];
        this.setState({
          tags: this.state.tags.slice(0, lastEle)
        });

        if (this.props.task === 'edit') {
          this.props.quest.tag_joins.forEach(function (tag_join) {
            if (tag_join.tag.tag_name === tagToDelete) {
              that.setState({
                allowSubmit: false
              });
              that.props.removeTagFromQuest(tag_join.id).then(function () {
                that.setState({
                  allowSubmit: true
                });
              });
            }
          });
        }
      }
    }
  }, {
    key: "handleInput",
    value: function handleInput(type) {
      var _this2 = this;

      if (type !== 'tags') {
        return function (e) {
          _this2.setState(_defineProperty({}, type, e.currentTarget.value));
        };
      }
    }
  }, {
    key: "handleUpload",
    value: function handleUpload(e) {
      var that = this;
      var fileArr = [];
      var urlArr = [];

      if (this.state.imageFiles !== null) {
        fileArr = fileArr.concat(this.state.imageFiles);
        urlArr = urlArr.concat(this.state.imageUrls);
      }

      var uploadedImages = e.currentTarget.files;

      var _loop = function _loop(i) {
        var file = uploadedImages[i];
        var fileReader = new FileReader();

        fileReader.onloadend = function () {
          fileArr = fileArr.concat(file);
          urlArr = urlArr.concat(fileReader.result);
          that.setState({
            imageFiles: fileArr,
            imageUrls: urlArr
          });
        };

        if (file) fileReader.readAsDataURL(file);
      };

      for (var i = 0; i < uploadedImages.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "deletePreviewImage",
    value: function deletePreviewImage(idx) {
      var index = idx.idx;
      var imageUrls = this.state.imageUrls.slice();
      var imageFiles = this.state.imageFiles.slice();
      imageUrls.splice(index, 1);
      imageFiles.splice(index, 1);
      if (imageUrls && imageUrls.length === 0) imageUrls = null;
      if (imageFiles && imageFiles.length === 0) imageFiles = null;
      this.setState({
        imageUrls: imageUrls,
        imageFiles: imageFiles
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var _this3 = this;

      var that = this;
      var tagInput = document.getElementById('tagInput');

      if (this.state.title !== '' || this.state.text !== '' || this.state.imageFiles !== null || this.state.allowSubmit) {
        this.setState({
          allowSubmit: true
        });
      }

      if (tagInput.value !== '') {
        var tag = [tagInput.value];
        this.setState({
          tags: this.state.tags.concat(tag)
        });
        var newDiv = document.createElement('div');
        newDiv.classList.add('enteredTag');
        newDiv.innerHTML = "#".concat(tagInput.value);
        tagInput.parentElement.insertBefore(newDiv, tagInput);
        tagInput.value = null;
      }

      if (this.state.allowSubmit) {
        e.preventDefault();
        this.setState({
          allowSubmit: false
        });
        var formData = new FormData(); // changed

        var imageFiles = this.state.imageFiles;
        var id = this.state.id;
        if (id) formData.append('quest[id]', id);
        formData.append('quest[title]', this.state.title);

        if (imageFiles) {
          imageFiles.forEach(function (image, idx) {
            formData.append('quest[images][]', imageFiles[idx]);
          });
        }

        formData.append('quest[text]', this.state.text);
        formData.append('quest[quest_type]', this.state.type);
        this.props.questSubmitAction(formData).then(function (questData) {
          var questId = questData.quest.id;
          var tags = that.state.tags;
          var existingTags = that.props.task === 'edit' ? that.props.quest.tag_joins.map(function (tag_join) {
            return tag_join.tag.tag_name;
          }) : [];

          if (tags) {
            var _loop2 = function _loop2(x) {
              var tagExists = false;
              var inputTag = tags[x];
              var newTag = inputTag[0] === '#' ? inputTag.slice(1) : inputTag;
              if (existingTags.includes(newTag)) return "continue";

              for (var y = 0; y < that.props.tags.length; y++) {
                var existingTag = that.props.tags[y];

                if (existingTag.tag_name === newTag) {
                  var questTagForm = new FormData();
                  questTagForm.append('tag_join[taggable_id]', questId);
                  questTagForm.append('tag_join[taggable_type]', 'Quest');
                  questTagForm.append('tag_join[tag_id]', existingTag.id);
                  var order = x + 1;
                  questTagForm.append('tag_join[order]', order);

                  _this3.props.addTagToQuest(questTagForm);

                  tagExists = true;
                  break;
                }
              }

              if (!tagExists) {
                var tagFormData = new FormData();
                tagFormData.append('tag[tag_name]', newTag);

                _this3.props.createTag(tagFormData).then(function (tagData) {
                  var createdTagId = tagData.tag.id;
                  var questTagForm = new FormData();
                  questTagForm.append('tag_join[taggable_id]', questId);
                  questTagForm.append('tag_join[taggable_type]', 'Quest');
                  questTagForm.append('tag_join[tag_id]', createdTagId);
                  var order = x + 1;
                  questTagForm.append('tag_join[order]', order);

                  _this3.props.addTagToQuest(questTagForm).then(function () {
                    _this3.setState({
                      loading: true
                    });
                  });
                });
              }
            };

            for (var x = 0; x < tags.length; x++) {
              var _ret = _loop2(x);

              if (_ret === "continue") continue;
            }
          }

          _this3.props.closeModal();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          closeModal = _this$props2.closeModal,
          currentUser = _this$props2.currentUser,
          type = _this$props2.type,
          task = _this$props2.task;
      var _this$state = this.state,
          title = _this$state.title,
          text = _this$state.text,
          imageFiles = _this$state.imageFiles;
      var placeholderText;

      if (this.state.loading) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_loading_loading__WEBPACK_IMPORTED_MODULE_1__["default"], {
          background: 'explore-container'
        });
      }

      switch (type) {
        case 'text':
          placeholderText = 'Your text here';
          break;

        case 'image':
          placeholderText = 'Add a caption';
          break;

        case 'quote':
          placeholderText = ' - Source';
          break;

        case 'audio':
          placeholderText = 'Add a description';
          break;

        case 'video':
          placeholderText = 'Add a caption';
          break;

        default:
          placeholderText = '';
          break;
      }

      var titleSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        value: title,
        placeholder: "Title",
        className: "input-title",
        onChange: this.handleInput('title')
      });
      var oldImagePreviews = this.state.oldImageUrls ? this.state.oldImageUrls.map(function (imageUrl, idx) {
        switch (type) {
          case 'image':
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: "old-img-".concat(idx),
              className: "image-preview-box"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
              className: "image-preview",
              src: imageUrl
            }));

          case 'video':
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: "old-vid-".concat(idx),
              className: "image-preview-box"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
              controls: true,
              className: "image-preview",
              src: imageUrl
            }));

          case 'audio':
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: "old-aud-".concat(idx),
              className: "image-preview-box"
            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
              controls: true,
              src: imageUrl
            }, "Your browser does not support this player"));

          default:
            return null;
        }
      }) : null;
      var newImagePreviews = this.state.imageUrls ? this.state.imageUrls.map(function (imageUrl, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: "new-img-".concat(idx),
          className: "image-preview-box"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "image-preview",
          src: imageUrl
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-times-circle delete-preview",
          onClick: function onClick() {
            return _this4.deletePreviewImage({
              idx: idx
            });
          }
        }));
      }) : null;
      var imagePreviews = oldImagePreviews ? oldImagePreviews.concat(newImagePreviews) : newImagePreviews;
      var imageLabel = this.state.imageFiles !== null || this.state.oldImagesFiles !== null ? 'Add more photos' : 'Upload Photos!';
      var imageUploadSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-upload-box"
      }, imagePreviews, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "upload-box",
        className: "upload-label-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "camera-icon-text-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "camera-icon fas fa-camera"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, imageLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        accept: "image/*",
        id: "upload-box",
        value: "",
        onChange: this.handleUpload,
        multiple: true
      }))); // UPDATE VIDEO AND AUDIO WITH CASES

      var newVideoPreviews = this.state.imageUrls // if
      ? this.state.imageUrls.map(function (imageUrl, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: idx,
          className: "image-preview-box"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
          controls: true,
          className: "image-preview",
          src: imageUrl
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-times-circle delete-preview",
          onClick: function onClick() {
            return _this4.deletePreviewImage({
              idx: idx
            });
          }
        }));
      }) : null;
      var videoPreviews = oldImagePreviews ? oldImagePreviews.concat(newVideoPreviews) : newVideoPreviews;
      var videoLabel = 'Upload Video!';
      var videoUploadSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-upload-box"
      }, videoPreviews, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "upload-box",
        className: "upload-label-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "camera-icon-text-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "camera-icon fas fa-video"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, videoLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        accept: "video/*",
        id: "upload-box",
        onChange: this.handleUpload
      })));
      var newAudioPreviews = this.state.imageUrls // if
      ? this.state.imageUrls.map(function (imageUrl, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: idx,
          className: "image-preview-box"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
          controls: true,
          src: imageUrl
        }, "Your browser does not support this player"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "fas fa-times-circle delete-preview",
          onClick: function onClick() {
            return _this4.deletePreviewImage({
              idx: idx
            });
          }
        }));
      }) : null;
      var audioPreviews = oldImagePreviews ? oldImagePreviews.concat(newAudioPreviews) : newAudioPreviews;
      var audioLabel = 'Upload Music!';
      var audioUploadSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-upload-box"
      }, audioPreviews, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "upload-box",
        className: "upload-label-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "camera-icon-text-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "camera-icon fas fa-headphones"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, audioLabel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "file",
        accept: "audio/*",
        id: "upload-box",
        onChange: this.handleUpload
      })));
      var quoteSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        placeholder: "\"Quote\"",
        className: "input-quote",
        onChange: this.handleInput('title')
      });
      var textSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        cols: "30",
        rows: "4",
        value: text,
        placeholder: placeholderText,
        className: "input-body",
        elastic: "true",
        onChange: this.handleInput('text')
      });
      var tagSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tag-section",
        onClick: function onClick() {
          document.getElementById('tagInput').focus();
          return false;
        }
      }, this.state.tags.map(function (tag, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: function onClick(e) {
            return _this4.deleteTag(e);
          },
          key: idx,
          className: "enteredTag"
        }, "#".concat(tag));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        id: "tagInput",
        type: "text",
        placeholder: "#add tags",
        className: "tag-input-body",
        elastic: "true",
        onChange: this.handleInput('tags'),
        onKeyDown: function onKeyDown(e) {
          return _this4.createTag(e);
        }
      }));
      var formBlock;

      switch (this.state.type) {
        case 'text':
          formBlock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "formData"
          }, titleSection, textSection, tagSection);
          break;

        case 'image':
          formBlock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "formData"
          }, imageUploadSection, textSection, tagSection);
          break;

        case 'quote':
          formBlock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "formData"
          }, quoteSection, textSection, tagSection);
          break;

        case 'audio':
          formBlock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "formData"
          }, audioUploadSection, textSection, tagSection);
          break;

        case 'video':
          formBlock = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "formData"
          }, videoUploadSection, textSection, tagSection);
          break;
      }

      var disabled = true;

      if (title !== '' || text !== '' || imageFiles !== null || this.state.allowSubmit) {
        disabled = false;
      }

      var submitText;
      if (task === 'edit') submitText = 'Update';else submitText = 'Create';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quest-form-box quest-box"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quest-form-top-block"
      }, currentUser.username), formBlock, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quest-form-bottom-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "quest-close",
        onClick: closeModal
      }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        disabled: disabled,
        className: "quest-create",
        onClick: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, submitText)))));
    }
  }]);

  return NewQuestForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NewQuestForm);

/***/ }),

/***/ "./frontend/components/modal/new_quest_selector.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/modal/new_quest_selector.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





var NewQuestSelector = /*#__PURE__*/function (_React$Component) {
  _inherits(NewQuestSelector, _React$Component);

  var _super = _createSuper(NewQuestSelector);

  function NewQuestSelector(props) {
    var _this;

    _classCallCheck(this, NewQuestSelector);

    _this = _super.call(this, props);
    _this.toggleAnimation = _this.toggleAnimation.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NewQuestSelector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.querySelector('body').style.position = 'fixed';
      setTimeout(function () {
        if (document.querySelector('.quest-selector-container')) {
          document.querySelector('.quest-selector-container').classList.add('animation-on');
          document.querySelector('.selector-cancel-button').classList.add('animation-on', 'visible');
        }
      }, 3000);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.querySelector('body').style.position = 'relative';
    }
  }, {
    key: "toggleAnimation",
    value: function toggleAnimation() {
      document.querySelector('.quest-selector-container').classList.toggle('animation-on');
      document.querySelector('.selector-cancel-button').classList.toggle('animation-on');
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.props.openModal('new-text');
        },
        className: "option-container selector-text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-font"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.props.openModal('new-image');
        },
        className: "option-container selector-image"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-camera"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.props.openModal('new-quote');
        },
        className: "option-container selector-quote"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-quote-right"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.props.openModal('new-audio');
        },
        className: "option-container selector-audio"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-music"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.props.openModal('new-video');
        },
        className: "option-container selector-video"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-video"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.toggleAnimation,
        className: "selector-cancel-button"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Toggle"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Animation")));
    }
  }]);

  return NewQuestSelector;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])(modal));
    } // closeModal: () => dispatch(closeModal()),

  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NewQuestSelector));

/***/ }),

/***/ "./frontend/components/modal/user_menu.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/modal/user_menu.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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







var UserMenu = /*#__PURE__*/function (_React$Component) {
  _inherits(UserMenu, _React$Component);

  var _super = _createSuper(UserMenu);

  function UserMenu(props) {
    var _this;

    _classCallCheck(this, UserMenu);

    _this = _super.call(this, props);
    _this.state = {
      currentUser: _this.props.currentUser,
      imageUrl: null,
      imageFile: null
    };
    _this.reference = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.logoutUser = _this.logoutUser.bind(_assertThisInitialized(_this)); // this.handleUpload = this.handleUpload.bind(this);

    return _this;
  }

  _createClass(UserMenu, [{
    key: "logoutUser",
    value: function logoutUser() {
      this.props.logout();
      this.props.closeModal();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentUser = _this$props.currentUser,
          closeModal = _this$props.closeModal,
          openModal2 = _this$props.openModal2;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-menu-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "user-menu-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: currentUser.avatarUrl || currentUser.avatar // onClick={() => {
        //   closeModal();
        //   openModal2('avatar');
        // }}

      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-menu-username"
      }, currentUser.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-menu-top-buttons"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "link",
        onClick: this.logoutUser
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-sign-out-alt"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Logout"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-container",
        onClick: closeModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/dashboard",
        className: "link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-home"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Dashboard"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-container",
        onClick: closeModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/explore",
        className: "link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-compass"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Explore"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-container",
        onClick: closeModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/likes",
        className: "link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-heart"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Likes"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-container",
        onClick: closeModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/follows",
        className: "link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-user-friends"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Follows"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-container",
        onClick: closeModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/settings",
        className: "link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-cogs"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Settings"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "menu-container",
        onClick: closeModal
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: "/about",
        className: "link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "fas fa-question-circle"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "About")))));
    }
  }]);

  return UserMenu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var currentUser = state.session.currentUser;
  return {
    currentUser: currentUser
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      return dispatch(Object(_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__["logout"])());
    },
    openModal: function openModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["openModal"])());
    },
    closeModal: function closeModal() {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(UserMenu));

/***/ }),

/***/ "./frontend/components/modal/user_page.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/modal/user_page.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _quests_quest_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quests/quest_container */ "./frontend/components/quests/quest_container.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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






var UserPage = /*#__PURE__*/function (_React$Component) {
  _inherits(UserPage, _React$Component);

  var _super = _createSuper(UserPage);

  function UserPage(props) {
    var _this;

    _classCallCheck(this, UserPage);

    _this = _super.call(this, props);
    _this.state = {
      user:  false || _this.props.user
    };
    return _this;
  }

  _createClass(UserPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.user) {
        this.props.fetchUser(this.props.userId).then(this.setState({
          user: this.props.user
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.props.user) {
        return null;
      }

      var quests = this.props.quests;
      var myQuests = [];
      var authorId = this.props.authorId;
      quests.forEach(function (quest) {
        if (quest.authorId === parseInt(authorId)) {
          myQuests.push(quest);
        }
      });
      var avatar = this.props.user.avatarUrl || this.props.user.avatar;
      var sortedQuests = myQuests.reverse();
      var showQuests = sortedQuests.map(function (quest, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_quests_quest_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: idx,
          quest: quest,
          loc: "userpage"
        });
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-page-top"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: avatar
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-page-username"
      }, this.props.user.username)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, showQuests));
    }
  }]);

  return UserPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var userId = ownProps.authorId;
  return {
    userId: userId,
    quests: Object.values(state.entities.quests),
    user: state.entities.users[userId]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUser: function fetchUser(userId) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["fetchUser"])(userId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(UserPage));

/***/ })

}]);
//# sourceMappingURL=2.bundle.js.map