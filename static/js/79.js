/*!
 * byui前端敏捷开发平台 : vue-element-admin-beautiful
 *  copyright:1204505056@qq.com 
 *  author: chuzhixin <1204505056@qq.com> 
 *  participants: liyanna,songmeiyu,lizhenguo
 *  time: 2020-3-29 13:8:21
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[79],{

/***/ "./src/api/tree.js":
/*!*************************!*\
  !*** ./src/api/tree.js ***!
  \*************************/
/*! exports provided: getTreeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTreeList", function() { return getTreeList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./src/utils/request.js");

function getTreeList(data) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/tree/list",
    method: "post",
    data: data
  });
}

/***/ })

}]);
//# sourceMappingURL=79.js.map