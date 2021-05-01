(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./frontend/components/quests/heart_animation.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/quests/heart_animation.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var HeartAnimation = /*#__PURE__*/function (_React$Component) {
  _inherits(HeartAnimation, _React$Component);

  var _super = _createSuper(HeartAnimation);

  function HeartAnimation(props) {
    _classCallCheck(this, HeartAnimation);

    return _super.call(this, props);
  }

  _createClass(HeartAnimation, [{
    key: "render",
    value: function render() {
      var isVis = false;
      isVis = this.props.visible;
      var display = isVis ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props["class"]
      }) : null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, display);
    }
  }]);

  return HeartAnimation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (HeartAnimation);

/***/ }),

/***/ "./frontend/components/quests/quest.jsx":
/*!**********************************************!*\
  !*** ./frontend/components/quests/quest.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _heart_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heart_animation */ "./frontend/components/quests/heart_animation.jsx");
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



 // import { deleteQuest } from '../../util/quest_api_utils';

var Quest = /*#__PURE__*/function (_React$Component) {
  _inherits(Quest, _React$Component);

  var _super = _createSuper(Quest);

  function Quest(props) {
    var _this;

    _classCallCheck(this, Quest);

    _this = _super.call(this, props);
    _this.state = {
      author:  false || _this.props.author,
      authorAvatar: _this.props.authorAvatar,
      liked: _this.props.liked,
      visible: false,
      followed:  false || _this.props.followed
    };
    _this.toggleFollowed = _this.toggleFollowed.bind(_assertThisInitialized(_this));
    _this.toggleLiked = _this.toggleLiked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Quest, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // if (!this.props.author) {
      //   this.props.fetchUser(this.props.authorId);
      // }
      this.props.fetchAllLikes(); // this.props.fetchSingleQuest(this.props.quest.id);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.author && !prevProps.author || this.props.author !== prevProps.author) {
        this.setState({
          author: this.props.author
        });
      }

      if (this.props.followed !== prevProps.followed) {
        this.setState({
          followed: this.props.followed
        });
      }

      if (this.props.liked !== prevProps.liked) {
        this.setState({
          liked: this.props.liked
        });
        this.props.fetchSingleQuest(this.props.quest.id);
        this.props.fetchAllLikes();
      }

      if (this.props.quest.id !== prevProps.quest.id) {
        this.setState({
          liked: this.props.liked,
          followed: this.props.followed,
          visible: false
        });
      }
    }
  }, {
    key: "toggleLiked",
    value: function toggleLiked(e) {
      var _this2 = this;

      e.preventDefault();
      var quest = this.props.quest;

      if (this.state.liked) {
        this.props.unlikeQuest(quest.id);
      } else {
        this.props.likeQuest(quest.id);
      }

      this.setState({
        liked: !this.state.liked
      });
      this.setState({
        visible: true
      });
      setTimeout(function () {
        _this2.setState({
          visible: false
        });
      }, 500);
    }
  }, {
    key: "toggleFollowed",
    value: function toggleFollowed() {
      var quest = this.props.quest;

      if (this.state.followed) {
        this.props.unfollowUser(quest.authorId);
      } else {
        this.props.followUser(quest.authorId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          currentUser = _this$props.currentUser,
          quest = _this$props.quest,
          authorId = _this$props.authorId,
          deleteQuest = _this$props.deleteQuest,
          loc = _this$props.loc,
          tags = _this$props.tags,
          noteCount = _this$props.noteCount;
      var _this$state = this.state,
          author = _this$state.author,
          authorAvatar = _this$state.authorAvatar;
      var visibility = this.state.visible;
      var followUser;
      var likedClass;
      var heartAnimation;
      var questHeader;
      var questFooter;
      if (!author) author = '';

      if (this.state.followed) {
        followUser = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: this.toggleFollowed,
          className: "unfollow-button follow-toggle-button"
        }, "Unfollow");
      } else {
        followUser = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: this.toggleFollowed,
          className: "follow-button follow-toggle-button"
        }, "Follow");
      }

      if (this.state.liked) {
        likedClass = 'liked-heart fas fa-heart';
        heartAnimation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_heart_animation__WEBPACK_IMPORTED_MODULE_2__["default"], {
          visible: visibility,
          "class": 'regular-heart fas fa-heart'
        });
        visibility = false;
      } else {
        likedClass = 'unliked-heart far fa-heart';
        heartAnimation = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_heart_animation__WEBPACK_IMPORTED_MODULE_2__["default"], {
          visible: visibility,
          "class": 'broken-heart fas fa-heart-broken'
        });
        visibility = false;
      }

      if (authorId === currentUser.id) {
        questHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "quest-author",
          onClick: function onClick() {
            return _this3.props.openModal('userpage');
          },
          id: this.props.authorId
        }, author.username);
        questFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quest-footer"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quest-footer-left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "note-section"
        }, noteCount, " ", noteCount === 1 ? "Note" : "Notes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quest-footer-right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quest-buttons"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "edit fas fa-edit",
          onClick: function onClick() {
            return _this3.props.openModal("edit-quest-".concat(quest.id));
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "trash fas fa-trash",
          onClick: function onClick() {
            return deleteQuest(quest.id);
          },
          id: quest.id
        }))));
      } else {
        questHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          onClick: function onClick() {
            return _this3.props.openModal('userpage');
          },
          id: this.props.authorId
        }, author.username), followUser);
        questFooter = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quest-footer"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quest-footer-left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "note-section"
        }, noteCount, " ", noteCount === 1 ? "Note" : "Notes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quest-footer-right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quest-buttons"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "like ".concat(likedClass),
          onClick: function onClick(e) {
            return _this3.toggleLiked(e);
          }
        }), heartAnimation)));
      }

      var isQuote = quest.quest_type === 'quote' ? '"' : source = null;
      var source = quest.quest_type === 'quote' ? "\u2014" : isQuote = null;
      var titleSection = null;

      if (quest.title !== '') {
        titleSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "title"
        }, isQuote, quest.title, isQuote);
      }

      var imageSection = null;

      if (quest.imageUrls && quest.quest_type === 'image') {
        imageSection = quest.imageUrls.map(function (imageUrl, idx) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            key: "img-".concat(idx),
            className: "image-video",
            src: imageUrl
          });
        });
      }

      var videoSection = null;

      if (quest.imageUrls && quest.quest_type === 'video') {
        videoSection = quest.imageUrls.map(function (imageUrl, idx) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
            key: "vid-".concat(idx),
            src: imageUrl,
            className: "image-video",
            controls: true
          });
        });
      }

      var audioSection = null;

      if (quest.imageUrls && quest.quest_type === 'audio') {
        audioSection = quest.imageUrls.map(function (imageUrl, idx) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: "audio-".concat(idx),
            className: "audio"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
            className: "audio-controls",
            src: imageUrl,
            controls: true
          }));
        });
      }

      var textSection = null;

      if (quest.text !== '') {
        textSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text"
        }, source, quest.text);
      }

      var tagSection = null;

      if (quest.tag_joins.length > 0) {
        var questTags = quest.tag_joins.map(function (tag_join, idx) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
            to: "/tag/".concat(tag_join.tag.id),
            key: "quest-".concat(quest.id, "-tag-").concat(idx),
            className: "quest-tag",
            "data-tag-join-id": tag_join.id
          }, "#", tag_join.tag.tag_name);
        });
        tagSection = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "quest-tag-container"
        }, questTags);
      }

      var avatar = window.avatar;

      if (author && author.avatar !== 'default') {
        avatar = authorAvatar || author.avatar;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "quest-".concat(quest.id),
        className: "quest-container-".concat(loc)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "avatar-".concat(loc),
        src: avatar,
        onClick: function onClick() {
          return _this3.props.openModal('userpage');
        },
        id: this.props.authorId
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quest"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quest-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "avatar-".concat(loc, "-small"),
        src: avatar,
        onClick: function onClick() {
          return _this3.props.openModal('userpage');
        },
        id: this.props.authorId
      }), questHeader), titleSection, imageSection, audioSection, videoSection, textSection, tagSection, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "quest-footer-container"
      }, questFooter)));
    }
  }]);

  return Quest;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Quest);

/***/ }),

/***/ "./frontend/components/quests/quest_container.js":
/*!*******************************************************!*\
  !*** ./frontend/components/quests/quest_container.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _quest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quest */ "./frontend/components/quests/quest.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _actions_like_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/like_actions */ "./frontend/actions/like_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/follow_actions */ "./frontend/actions/follow_actions.js");
/* harmony import */ var _actions_quest_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/quest_actions */ "./frontend/actions/quest_actions.js");


 // import { fetchUser } from '../../actions/user_actions';






var mapStateToProps = function mapStateToProps(state, ownProps) {
  var liked = false;
  var followed = false;
  Object.values(state.entities.likes).forEach(function (like) {
    if (like.quest_id === ownProps.quest.id && like.user_id === state.session.currentUser.id) {
      liked = true;
    }
  });
  Object.values(state.entities.follows).forEach(function (follow) {
    if (follow.user_id === ownProps.quest.user_id && follow.follower_id === state.session.currentUser.id) {
      followed = true;
    }

    ;
  });
  var authorId = ownProps.quest.author.id;
  return {
    currentUser: state.session.currentUser,
    authorId: authorId,
    // author: state.entities.users[authorId],
    author: ownProps.quest.author,
    authorAvatar: ownProps.quest.authorAvatar || null,
    quest: ownProps.quest,
    tags_joins: ownProps.quest.tag_joins,
    liked: liked,
    followed: followed,
    noteCount: ownProps.quest.likes
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__["openModal"])(modal));
    },
    likeQuest: function likeQuest(questId) {
      return dispatch(Object(_actions_like_actions__WEBPACK_IMPORTED_MODULE_4__["likeQuest"])(questId));
    },
    unlikeQuest: function unlikeQuest(questId) {
      return dispatch(Object(_actions_like_actions__WEBPACK_IMPORTED_MODULE_4__["unlikeQuest"])(questId));
    },
    fetchAllLikes: function fetchAllLikes() {
      return dispatch(Object(_actions_like_actions__WEBPACK_IMPORTED_MODULE_4__["fetchAllLikes"])());
    },
    followUser: function followUser(userId) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_5__["followUser"])(userId));
    },
    unfollowUser: function unfollowUser(userId) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_5__["unfollowUser"])(userId));
    },
    deleteQuest: function deleteQuest(questId) {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_6__["deleteQuest"])(questId));
    },
    fetchSingleQuest: function fetchSingleQuest(questId) {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_6__["fetchSingleQuest"])(questId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_quest__WEBPACK_IMPORTED_MODULE_2__["default"])));

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map