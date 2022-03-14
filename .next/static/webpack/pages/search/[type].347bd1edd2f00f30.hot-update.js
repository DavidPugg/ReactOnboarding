"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search/[type]",{

/***/ "./src/components/molecules/SearchPersonItem/SearchPersonItem.tsx":
/*!************************************************************************!*\
  !*** ./src/components/molecules/SearchPersonItem/SearchPersonItem.tsx ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchPersonItem; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_personnotfound_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/personnotfound.png */ \"./src/assets/personnotfound.png\");\n/* harmony import */ var _SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchPersonItem.module.scss */ \"./src/components/molecules/SearchPersonItem/SearchPersonItem.module.scss\");\n/* harmony import */ var _SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SearchPersonItem(_ref) {\n  let {\n    name,\n    known_for,\n    movie,\n    img\n  } = _ref;\n\n  function returnImage() {\n    if (img) return `https://image.tmdb.org/t/p/w500/${img}`;\n    return _assets_personnotfound_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image, {\n    className: (_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default().img),\n    src: returnImage(),\n    alt: \"Movie poster\",\n    width: \"120\",\n    height: \"180\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: (_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name)\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, known_for, \" \\u2022 \", movie)));\n}\n_c = SearchPersonItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchPersonItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU2VhcmNoUGVyc29uSXRlbS9TZWFyY2hQZXJzb25JdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTZSxTQUFTRyxnQkFBVCxPQUFrRTtBQUFBLE1BQXhDO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUEsU0FBUjtBQUFtQkMsSUFBQUEsS0FBbkI7QUFBMEJDLElBQUFBO0FBQTFCLEdBQXdDOztBQUMvRSxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCLFFBQUlELEdBQUosRUFBUyxPQUFRLG1DQUFrQ0EsR0FBSSxFQUE5QztBQUNULFdBQU9OLHNFQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDJFQUFXUTtBQUEzQixrQkFDWSwyREFBQyxLQUFEO0FBQU8sYUFBUyxFQUFFUiwwRUFBbEI7QUFBOEIsT0FBRyxFQUFFTSxXQUFXLEVBQTlDO0FBQWtELE9BQUcsRUFBQyxjQUF0RDtBQUFxRSxTQUFLLEVBQUMsS0FBM0U7QUFBaUYsVUFBTSxFQUFDO0FBQXhGLElBRFosZUFFRTtBQUFLLGFBQVMsRUFBRU4sOEVBQWNTO0FBQTlCLGtCQUNFO0FBQUksYUFBUyxFQUFFVCwyRUFBV0U7QUFBMUIsS0FBNkJBLElBQTdCLENBREYsZUFFRSxzRUFDR0MsU0FESCxjQUNpQkMsS0FEakIsQ0FGRixDQUZGLENBREY7QUFXRDtLQWpCdUJIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9TZWFyY2hQZXJzb25JdGVtL1NlYXJjaFBlcnNvbkl0ZW0udHN4PzI2MmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG5vdGZvdW5kIGZyb20gXCIuLi8uLi8uLi9hc3NldHMvcGVyc29ubm90Zm91bmQucG5nXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vU2VhcmNoUGVyc29uSXRlbS5tb2R1bGUuc2Nzc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGtub3duX2Zvcjogc3RyaW5nLFxuICBtb3ZpZTogc3RyaW5nLFxuICBpbWc6IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUGVyc29uSXRlbSh7IG5hbWUsIGtub3duX2ZvciwgbW92aWUsIGltZyB9OiBQcm9wcykge1xuICBmdW5jdGlvbiByZXR1cm5JbWFnZSgpIHtcbiAgICBpZiAoaW1nKSByZXR1cm4gYGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvJHtpbWd9YDtcbiAgICByZXR1cm4gbm90Zm91bmQuc3JjO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9e3N0eWxlcy5pbWd9IHNyYz17cmV0dXJuSW1hZ2UoKX0gYWx0PSdNb3ZpZSBwb3N0ZXInIHdpZHRoPScxMjAnIGhlaWdodD0nMTgwJyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PntuYW1lfTwvaDM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtrbm93bl9mb3J9IOKAoiB7bW92aWV9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0Iiwibm90Zm91bmQiLCJzdHlsZXMiLCJTZWFyY2hQZXJzb25JdGVtIiwibmFtZSIsImtub3duX2ZvciIsIm1vdmllIiwiaW1nIiwicmV0dXJuSW1hZ2UiLCJzcmMiLCJpdGVtIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/SearchPersonItem/SearchPersonItem.tsx\n");

/***/ })

});