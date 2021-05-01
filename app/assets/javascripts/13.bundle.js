(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./frontend/components/explore/explore_container.js":
/*!**********************************************************!*\
  !*** ./frontend/components/explore/explore_container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _explore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore */ "./frontend/components/explore/explore.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _actions_quest_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/quest_actions */ "./frontend/actions/quest_actions.js");
/* harmony import */ var _actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/follow_actions */ "./frontend/actions/follow_actions.js");
/* harmony import */ var _actions_like_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/like_actions */ "./frontend/actions/like_actions.js");
/* harmony import */ var _actions_tag_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/tag_actions */ "./frontend/actions/tag_actions.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");









var mapStateToProps = function mapStateToProps(state) {
  return {
    page: 'explore',
    currentUser: state.session.currentUser,
    quests: Object.values(state.entities.quests),
    follows: Object.values(state.entities.follows),
    tags: Object.values(state.entities.tags),
    users: Object.values(state.entities.users)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    openModal: function openModal(modal) {
      return dispatch(Object(_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__["openModal"])(modal));
    },
    fetchAllQuests: function fetchAllQuests() {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllQuests"])());
    },
    fetchAllFollows: function fetchAllFollows() {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["fetchAllFollows"])());
    },
    fetchAllLikes: function fetchAllLikes() {
      return dispatch(Object(_actions_like_actions__WEBPACK_IMPORTED_MODULE_5__["fetchAllLikes"])());
    },
    fetchAllTags: function fetchAllTags() {
      return dispatch(Object(_actions_tag_actions__WEBPACK_IMPORTED_MODULE_6__["fetchAllTags"])());
    },
    fetchAllUsers: function fetchAllUsers() {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__["fetchAllUsers"])());
    },
    addTagToUser: function addTagToUser(tagJoin) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__["addTagToUser"])(tagJoin));
    },
    removeTagFromUser: function removeTagFromUser(tagJoinId) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_7__["removeTagFromUser"])(tagJoinId));
    },
    followUser: function followUser(userId) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["followUser"])(userId));
    },
    unfollowUser: function unfollowUser(userId) {
      return dispatch(Object(_actions_follow_actions__WEBPACK_IMPORTED_MODULE_4__["unfollowUser"])(userId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_explore__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=13.bundle.js.map