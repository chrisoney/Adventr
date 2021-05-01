(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./frontend/components/pages/follows/follows_list.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/pages/follows/follows_list.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar_guild_recs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sidebar/guild_recs */ "./frontend/components/sidebar/guild_recs.jsx");
/* harmony import */ var _quests_quest_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../quests/quest_container */ "./frontend/components/quests/quest_container.js");
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





var FollowsList = /*#__PURE__*/function (_React$Component) {
  _inherits(FollowsList, _React$Component);

  var _super = _createSuper(FollowsList);

  function FollowsList(props) {
    var _this;

    _classCallCheck(this, FollowsList);

    _this = _super.call(this, props);
    _this.toggleFollowed = _this.toggleFollowed.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(FollowsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchAllUsers();
      this.props.fetchAllQuests();
      this.props.fetchAllFollows();
    } // componentDidUpdate(prevProps) {
    //   if (this.props.follows.length !== prevProps.follows.length) {
    //     this.setState({ follows: this.props.follows });
    //   }
    // }

  }, {
    key: "toggleFollowed",
    value: function toggleFollowed(e, followed, userId) {
      e.preventDefault();

      if (followed) {
        this.props.unfollowUser(userId);
      } else {
        this.props.followUser(userId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var that = this;
      var _this$props = this.props,
          currentUser = _this$props.currentUser,
          quests = _this$props.quests,
          follows = _this$props.follows,
          users = _this$props.users;
      var followedUsers = [];
      var randomQuest;
      var followIds = follows.map(function (follow) {
        return follow.user_id;
      });

      for (var x = 0; x < quests.length; x++) {
        var quest = quests[x];

        if (quest.user_id !== currentUser.id) {
          randomQuest = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_quests_quest_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
            quest: quest,
            loc: 'dash-random'
          });
        }
      }

      var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

      function latestQuest(user) {
        var updatedDates = user.quests.map(function (quest) {
          return quest.updated_at;
        }).sort().reverse();
        if (updatedDates.length === 0) return 'This guild has no posts';else {
          var latest = updatedDates[0];
          var year = latest.slice(0, 4);
          var monthNum = parseInt(latest.slice(5, 7), 10);
          var month = months[monthNum - 1];
          var day = parseInt(latest.slice(8, 10), 10);
          return "".concat(month, " ").concat(day, " ").concat(year);
        }
      }

      function createUserContainer(user) {
        var latestDate = latestQuest(user);
        var notFollowed = !followIds.includes(user.id);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: user.id,
          className: "followed-user-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "followed-user-left"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: user.avatarUrl || user.avatar,
          className: "followed-user-avatar"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "followed-user-details"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "followed-user-username"
        }, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "followed-user-latest"
        }, "Updated ", latestDate))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "followed-user-right"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "follow-button-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: function onClick(e) {
            return that.toggleFollowed(e, !notFollowed, user.id);
          },
          className: "follow-button"
        }, notFollowed ? 'Follow' : 'Unfollow'))));
      }

      for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (currentUser.followed_users.includes(user.id)) {
          followedUsers.push(createUserContainer(user));
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard-left"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "dash-title-following"
      }, followedUsers.length, " Following")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "followed-users-list-container"
      }, followedUsers)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dashboard-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_sidebar_guild_recs__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "suggested-recommendation"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "suggested-title"
      }, "Sanctioned Job"), randomQuest)));
    }
  }]);

  return FollowsList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (FollowsList);

/***/ }),

/***/ "./frontend/components/pages/follows/follows_list_container.js":
/*!*********************************************************************!*\
  !*** ./frontend/components/pages/follows/follows_list_container.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _follows_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follows_list */ "./frontend/components/pages/follows/follows_list.jsx");
/* harmony import */ var _actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/quest_actions */ "./frontend/actions/quest_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/follow_actions */ "./frontend/actions/follow_actions.js");






var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.session.currentUser,
    quests: Object.values(state.entities.quests),
    follows: Object.values(state.entities.follows),
    users: Object.values(state.entities.users)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchAllQuests: function fetchAllQuests() {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_2__["fetchAllQuests"])());
    },
    fetchAllFollows: function fetchAllFollows() {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["fetchAllFollows"])());
    },
    fetchAllUsers: function fetchAllUsers() {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllUsers"])());
    },
    followUser: function followUser(userId) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["followUser"])(userId));
    },
    unfollowUser: function unfollowUser(userId) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["unfollowUser"])(userId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_follows_list__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/sidebar/guild_recs.jsx":
/*!****************************************************!*\
  !*** ./frontend/components/sidebar/guild_recs.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/follow_actions */ "./frontend/actions/follow_actions.js");
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








var GuildRecs = /*#__PURE__*/function (_React$Component) {
  _inherits(GuildRecs, _React$Component);

  var _super = _createSuper(GuildRecs);

  function GuildRecs(props) {
    var _this;

    _classCallCheck(this, GuildRecs);

    _this = _super.call(this, props);
    _this.state = {
      startRecs: 0
    };
    _this.toggleFollowed = _this.toggleFollowed.bind(_assertThisInitialized(_this));
    _this.cycleGuilds = _this.cycleGuilds.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GuildRecs, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchAllUsers();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.follows.length != prevProps.follows.length) {
        this.props.fetchAllFollows();
      }
    }
  }, {
    key: "toggleFollowed",
    value: function toggleFollowed(e, followed, userId) {
      e.preventDefault();

      if (followed) {
        this.props.unfollowUser(userId);
      } else {
        this.props.followUser(userId);
      }
    }
  }, {
    key: "cycleGuilds",
    value: function cycleGuilds() {
      var nextIdx;

      if (this.state.startRecs + 4 > this.props.users.length - 1) {
        nextIdx = 0;
      } else {
        nextIdx = this.state.startRecs + 4;
      }

      this.setState({
        startRecs: nextIdx
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          currentUser = _this$props.currentUser,
          currentLocation = _this$props.currentLocation,
          follows = _this$props.follows,
          users = _this$props.users;
      var followRecs = [];
      var followIds = follows.map(function (follow) {
        return follow.user_id;
      });

      var followRecCreate = function followRecCreate(user) {
        var notFollowed = !followIds.includes(user.id);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          className: "suggested-guild-content-container",
          key: user.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "user-attributes"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: user.avatarUrl || user.avatar,
          className: "guild-rec-avatar"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "guild-rec-details"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "guild-rec-username"
        }, user.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "guild-rec-guildname"
        }, user.guild_name || user.username))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "follow-rec-button-container"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          onClick: function onClick(e) {
            return _this2.toggleFollowed(e, !notFollowed, user.id);
          },
          className: "".concat(notFollowed ? 'un' : '', "follow-button follow-rec-button")
        }, notFollowed ? 'Follow' : 'Unfollow')));
      };

      for (var i = 0; i < users.length; i++) {
        var user = users[i];

        if (user.id !== currentUser.id && !followIds.includes(user.id)) {
          var newFollowRec = followRecCreate(user);
          followRecs.push(newFollowRec);
        }
      }

      if (currentLocation !== '/dashboard') {
        var startIdx = this.state.startRecs;
        followRecs = followRecs.slice(startIdx, startIdx + 4);
      } else {
        followRecs = followRecs.slice(0, 4);
      }

      var title = currentLocation !== '/dashboard' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "suggested-guilds-title"
      }, "Suggested Guilds") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "suggested-guilds-title"
      }, "Check out these guilds");
      var bottomButton = currentLocation !== '/dashboard' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "suggested-guilds-button",
        onClick: this.cycleGuilds
      }, "Show More Guilds") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/explore",
        className: "suggested-guilds-explore-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "explore-text"
      }, "Explore all of Adventr"));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "suggested-guilds"
      }, title, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "suggested-guilds-container"
      }, followRecs), bottomButton);
    }
  }]);

  return GuildRecs;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.session.currentUser,
    currentLocation: ownProps.location.pathname,
    follows: Object.values(state.entities.follows),
    users: Object.values(state.entities.users)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchAllUsers: function fetchAllUsers() {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllUsers"])());
    },
    fetchAllFollows: function fetchAllFollows() {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["fetchAllFollows"])());
    },
    followUser: function followUser(userId) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["followUser"])(userId));
    },
    unfollowUser: function unfollowUser(userId) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["unfollowUser"])(userId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(GuildRecs)));

/***/ })

}]);
//# sourceMappingURL=6.bundle.js.map