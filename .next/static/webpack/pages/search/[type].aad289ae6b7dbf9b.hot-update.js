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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SearchPersonItem; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_personnotfound_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/personnotfound.png */ \"./src/assets/personnotfound.png\");\n/* harmony import */ var _SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchPersonItem.module.scss */ \"./src/components/molecules/SearchPersonItem/SearchPersonItem.module.scss\");\n/* harmony import */ var _SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction SearchPersonItem(_ref) {\n  let {\n    name,\n    known_for,\n    movie,\n    img\n  } = _ref;\n\n  function returnImage() {\n    if (img) return `https://image.tmdb.org/t/p/w500/${img}`;\n    return _assets_personnotfound_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default().item)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", {\n    className: (_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default().img),\n    src: returnImage(),\n    alt: \"Profile pic\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: (_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: (_SearchPersonItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default().name)\n  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, known_for, \" \\u2022 \", movie)));\n}\n_c = SearchPersonItem;\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchPersonItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvU2VhcmNoUGVyc29uSXRlbS9TZWFyY2hQZXJzb25JdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFTZSxTQUFTRyxnQkFBVCxPQUFrRTtBQUFBLE1BQXhDO0FBQUVDLElBQUFBLElBQUY7QUFBUUMsSUFBQUEsU0FBUjtBQUFtQkMsSUFBQUEsS0FBbkI7QUFBMEJDLElBQUFBO0FBQTFCLEdBQXdDOztBQUMvRSxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCLFFBQUlELEdBQUosRUFBUyxPQUFRLG1DQUFrQ0EsR0FBSSxFQUE5QztBQUNULFdBQU9OLGtFQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDJFQUFXTztBQUEzQixrQkFDRTtBQUFLLGFBQVMsRUFBRVAsMEVBQWhCO0FBQTRCLE9BQUcsRUFBRU0sV0FBVyxFQUE1QztBQUFnRCxPQUFHLEVBQUM7QUFBcEQsSUFERixlQUVFO0FBQUssYUFBUyxFQUFFTiw4RUFBY1E7QUFBOUIsa0JBQ0U7QUFBSSxhQUFTLEVBQUVSLDJFQUFXRTtBQUExQixLQUE2QkEsSUFBN0IsQ0FERixlQUVFLHNFQUNHQyxTQURILGNBQ2lCQyxLQURqQixDQUZGLENBRkYsQ0FERjtBQVdEO0tBakJ1QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL1NlYXJjaFBlcnNvbkl0ZW0vU2VhcmNoUGVyc29uSXRlbS50c3g/MjYyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbm90Zm91bmQgZnJvbSBcIi4uLy4uLy4uL2Fzc2V0cy9wZXJzb25ub3Rmb3VuZC5wbmdcIlxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9TZWFyY2hQZXJzb25JdGVtLm1vZHVsZS5zY3NzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIG5hbWU6IHN0cmluZyxcbiAga25vd25fZm9yOiBzdHJpbmcsXG4gIG1vdmllOiBzdHJpbmcsXG4gIGltZzogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hQZXJzb25JdGVtKHsgbmFtZSwga25vd25fZm9yLCBtb3ZpZSwgaW1nIH06IFByb3BzKSB7XG4gIGZ1bmN0aW9uIHJldHVybkltYWdlKCkge1xuICAgIGlmIChpbWcpIHJldHVybiBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke2ltZ31gO1xuICAgIHJldHVybiBub3Rmb3VuZDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9e3JldHVybkltYWdlKCl9IGFsdD1cIlByb2ZpbGUgcGljXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57bmFtZX08L2gzPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7a25vd25fZm9yfSDigKIge21vdmllfVxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm5vdGZvdW5kIiwic3R5bGVzIiwiU2VhcmNoUGVyc29uSXRlbSIsIm5hbWUiLCJrbm93bl9mb3IiLCJtb3ZpZSIsImltZyIsInJldHVybkltYWdlIiwiaXRlbSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/molecules/SearchPersonItem/SearchPersonItem.tsx\n");

/***/ })

});