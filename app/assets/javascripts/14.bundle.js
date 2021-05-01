(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./frontend/components/explore/tag_container.js":
/*!******************************************************!*\
  !*** ./frontend/components/explore/tag_container.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _explore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore */ "./frontend/components/explore/explore.jsx");
/* harmony import */ var _actions_tag_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/tag_actions */ "./frontend/actions/tag_actions.js");
/* harmony import */ var _actions_quest_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/quest_actions */ "./frontend/actions/quest_actions.js");





var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    page: 'tag',
    currentUser: state.session.currentUser,
    tag: state.entities.tags[ownProps.match.params.tagId],
    quests: Object.values(state.entities.quests),
    tags: Object.values(state.entities.tags)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchAllTags: function fetchAllTags() {
      return dispatch(Object(_actions_tag_actions__WEBPACK_IMPORTED_MODULE_2__["fetchAllTags"])());
    },
    fetchAllQuests: function fetchAllQuests() {
      return dispatch(Object(_actions_quest_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllQuests"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_explore__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ })

}]);
//# sourceMappingURL=14.bundle.js.map