"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/molecules/MovieItem/MovieItem.tsx":
/*!**********************************************************!*\
  !*** ./src/components/molecules/MovieItem/MovieItem.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TripleDot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TripleDot */ \"./src/components/molecules/TripleDot/index.tsx\");\n/* harmony import */ var _MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MovieItem.module.scss */ \"./src/components/molecules/MovieItem/MovieItem.module.scss\");\n/* harmony import */ var _MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_atoms_ProgressBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/atoms/ProgressBar */ \"./src/components/atoms/ProgressBar/index.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\nconst MovieItem = _ref => {\n  let {\n    id,\n    img,\n    title,\n    release,\n    rating,\n    border\n  } = _ref;\n\n  const returnImage = () => {\n    if (img && img != '') {\n      return `https://image.tmdb.org/t/p/w500/${img}`;\n    }\n\n    return `/notfound.png`;\n  };\n\n  const getTitle = () => {\n    if (title && title.length > 40) {\n      return `${title.slice(0, 40)}...`;\n    }\n\n    return title;\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()((_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().box), border ? (_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().border) : '')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TripleDot__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n    href: `/movie/${id}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"a\", {\n    className: (_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().link)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().imgbox)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n    className: (_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().img),\n    src: returnImage(),\n    alt: \"Movie poster\",\n    width: \"280\",\n    height: \"450\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().rating)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_atoms_ProgressBar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    rating: rating\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: (_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().textbox)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h3\", {\n    className: (_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title)\n  }, getTitle()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", {\n    className: (_MovieItem_module_scss__WEBPACK_IMPORTED_MODULE_6___default().release)\n  }, release)))));\n};\n\n_c = MovieItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovieItem);\n\nvar _c;\n\n$RefreshReg$(_c, \"MovieItem\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvTW92aWVJdGVtL01vdmllSXRlbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLE1BQU1PLFNBQVMsR0FBRyxRQUF3RDtBQUFBLE1BQXZEO0FBQUVDLElBQUFBLEVBQUY7QUFBTUMsSUFBQUEsR0FBTjtBQUFXQyxJQUFBQSxLQUFYO0FBQWtCQyxJQUFBQSxPQUFsQjtBQUEyQkMsSUFBQUEsTUFBM0I7QUFBbUNDLElBQUFBO0FBQW5DLEdBQXVEOztBQUN0RSxRQUFNQyxXQUFXLEdBQUcsTUFBTTtBQUN0QixRQUFJTCxHQUFHLElBQUlBLEdBQUcsSUFBSSxFQUFsQixFQUFzQjtBQUNsQixhQUFRLG1DQUFrQ0EsR0FBSSxFQUE5QztBQUNIOztBQUNELFdBQVEsZUFBUjtBQUNILEdBTEQ7O0FBT0EsUUFBTU0sUUFBUSxHQUFHLE1BQU07QUFDbkIsUUFBSUwsS0FBSyxJQUFJQSxLQUFLLENBQUNNLE1BQU4sR0FBZSxFQUE1QixFQUFnQztBQUM1QixhQUFRLEdBQUVOLEtBQUssQ0FBQ08sS0FBTixDQUFZLENBQVosRUFBZSxFQUFmLENBQW1CLEtBQTdCO0FBQ0g7O0FBQ0QsV0FBT1AsS0FBUDtBQUNILEdBTEQ7O0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVWLGlEQUFVLENBQUNJLG1FQUFELEVBQWFTLE1BQU0sR0FBR1Qsc0VBQUgsR0FBbUIsRUFBdEM7QUFBMUIsa0JBQ0ksMkRBQUMsa0RBQUQsT0FESixlQUVJLDJEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFHLFVBQVNJLEVBQUc7QUFBekIsa0JBQ0k7QUFBRyxhQUFTLEVBQUVKLG9FQUFXZTtBQUF6QixrQkFDSTtBQUFLLGFBQVMsRUFBRWYsc0VBQWFnQjtBQUE3QixrQkFDSSwyREFBQyxtREFBRDtBQUFPLGFBQVMsRUFBRWhCLG1FQUFsQjtBQUE4QixPQUFHLEVBQUVVLFdBQVcsRUFBOUM7QUFBa0QsT0FBRyxFQUFDLGNBQXREO0FBQXFFLFNBQUssRUFBQyxLQUEzRTtBQUFpRixVQUFNLEVBQUM7QUFBeEYsSUFESixlQUVJO0FBQUssYUFBUyxFQUFFVixzRUFBYVE7QUFBN0Isa0JBQ0ksMkRBQUMscUVBQUQ7QUFBYSxVQUFNLEVBQUVBO0FBQXJCLElBREosQ0FGSixDQURKLGVBT0k7QUFBSyxhQUFTLEVBQUVSLHVFQUFjaUI7QUFBOUIsa0JBQ0k7QUFBSSxhQUFTLEVBQUVqQixxRUFBWU07QUFBM0IsS0FBOEJLLFFBQVEsRUFBdEMsQ0FESixlQUVJO0FBQUcsYUFBUyxFQUFFWCx1RUFBY087QUFBNUIsS0FBK0JBLE9BQS9CLENBRkosQ0FQSixDQURKLENBRkosQ0FESjtBQW1CSCxDQWpDRDs7S0FBTUo7QUFrQ04sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL01vdmllSXRlbS9Nb3ZpZUl0ZW0udHN4P2MzMmIiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFRyaXBsZURvdCBmcm9tICcuLi9UcmlwbGVEb3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vdmllSXRlbS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnQGNvbXBvbmVudHMvYXRvbXMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBpbWc6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIHJlbGVhc2U6IHN0cmluZztcbiAgICByYXRpbmc6IG51bWJlcjtcbiAgICBib3JkZXI/OiBib29sZWFuO1xufVxuXG5jb25zdCBNb3ZpZUl0ZW0gPSAoeyBpZCwgaW1nLCB0aXRsZSwgcmVsZWFzZSwgcmF0aW5nLCBib3JkZXIgfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCByZXR1cm5JbWFnZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGltZyAmJiBpbWcgIT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzUwMC8ke2ltZ31gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgL25vdGZvdW5kLnBuZ2A7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xuICAgICAgICBpZiAodGl0bGUgJiYgdGl0bGUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgICAgIHJldHVybiBgJHt0aXRsZS5zbGljZSgwLCA0MCl9Li4uYDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYm94LCBib3JkZXIgPyBzdHlsZXMuYm9yZGVyIDogJycpfT5cbiAgICAgICAgICAgIDxUcmlwbGVEb3QgLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbW92aWUvJHtpZH1gfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWdib3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmltZ30gc3JjPXtyZXR1cm5JbWFnZSgpfSBhbHQ9J01vdmllIHBvc3Rlcicgd2lkdGg9JzI4MCcgaGVpZ2h0PSc0NTAnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJhdGluZ30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzQmFyIHJhdGluZz17cmF0aW5nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRib3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Z2V0VGl0bGUoKX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucmVsZWFzZX0+e3JlbGVhc2V9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgTW92aWVJdGVtO1xuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJSZWFjdCIsIkxpbmsiLCJUcmlwbGVEb3QiLCJzdHlsZXMiLCJQcm9ncmVzc0JhciIsIkltYWdlIiwiTW92aWVJdGVtIiwiaWQiLCJpbWciLCJ0aXRsZSIsInJlbGVhc2UiLCJyYXRpbmciLCJib3JkZXIiLCJyZXR1cm5JbWFnZSIsImdldFRpdGxlIiwibGVuZ3RoIiwic2xpY2UiLCJib3giLCJsaW5rIiwiaW1nYm94IiwidGV4dGJveCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/MovieItem/MovieItem.tsx\n");

/***/ })

});