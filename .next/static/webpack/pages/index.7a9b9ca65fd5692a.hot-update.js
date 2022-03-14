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

/***/ "./src/components/organisms/MainMenu/MainMenu.tsx":
/*!********************************************************!*\
  !*** ./src/components/organisms/MainMenu/MainMenu.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainMenu; }\n/* harmony export */ });\n/* harmony import */ var _components_molecules_LanguageSwitcher_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/molecules/LanguageSwitcher/languages */ \"./src/components/molecules/LanguageSwitcher/languages.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/MainMenuLink/MainMenuLink */ \"./src/components/atoms/MainMenuLink/MainMenuLink.tsx\");\n/* harmony import */ var _atoms_SearchToggle_SearchToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/SearchToggle/SearchToggle */ \"./src/components/atoms/SearchToggle/SearchToggle.tsx\");\n/* harmony import */ var _hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/clickOutside */ \"./src/components/hooks/clickOutside.ts\");\n/* harmony import */ var _molecules_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/LanguageSwitcher/LanguageSwitcher */ \"./src/components/molecules/LanguageSwitcher/LanguageSwitcher.tsx\");\n/* harmony import */ var _molecules_MainMenuItem_MainMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/MainMenuItem/MainMenuItem */ \"./src/components/molecules/MainMenuItem/MainMenuItem.tsx\");\n/* harmony import */ var _molecules_PlusMenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/PlusMenuItem */ \"./src/components/molecules/PlusMenuItem/index.tsx\");\n/* harmony import */ var _molecules_SearchBar_Searchbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/SearchBar/Searchbar */ \"./src/components/molecules/SearchBar/Searchbar.tsx\");\n/* harmony import */ var _MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MainMenu.module.scss */ \"./src/components/organisms/MainMenu/MainMenu.module.scss\");\n/* harmony import */ var _MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mainMenuArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainMenuArray */ \"./src/components/organisms/MainMenu/mainMenuArray.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MainMenu() {\n  _s();\n\n  const [searchbar, setSearchbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const query = router.query;\n  const searchBarRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  const languageListenerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  (0,_hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([searchBarRef], () => {\n    setTimeout(() => {\n      setSearchbar(false);\n    }, 200);\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    document.addEventListener('keydown', e => {\n      console.log();\n\n      if (languageListenerRef.current.contains(e.target)) {\n        return;\n      }\n\n      if (e.code == 'KeyS') {\n        setTimeout(() => {\n          setSearchbar(true);\n        }, 10);\n      }\n    });\n    return () => document.removeEventListener('keydown', e => {\n      if (languageListenerRef.current.contains(e.target)) {\n        return;\n      }\n\n      if (e.code == 'KeyS') {\n        setTimeout(() => {\n          setSearchbar(true);\n        }, 10);\n      }\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    setSearchbar(false);\n    return () => setSearchbar(true);\n  }, [query]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().background)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().left)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),\n    url: \"/\",\n    label: \"TMDB\"\n  }), _mainMenuArray__WEBPACK_IMPORTED_MODULE_10__.menus.map(_ref => {\n    let {\n      label,\n      links\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_MainMenuItem_MainMenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: label,\n      label: label,\n      links: links\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().right)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_PlusMenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    languages: _components_molecules_LanguageSwitcher_languages__WEBPACK_IMPORTED_MODULE_0__.languages,\n    ref: languageListenerRef\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Login\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_SearchToggle_SearchToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onToggle: () => {\n      setSearchbar(!searchbar);\n    }\n  }))))), searchbar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_SearchBar_Searchbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    ref: searchBarRef\n  }));\n}\n\n_s(MainMenu, \"5DQhh/Je8bHgpHWPiJyiFtRFt/c=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = MainMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainMenu\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTWFpbk1lbnUvTWFpbk1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNlLFFBQVQsR0FBb0I7QUFBQTs7QUFDL0IsUUFBTSxDQUFDQyxTQUFELEVBQVlDLFlBQVosSUFBNEJaLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU1hLE1BQU0sR0FBR2pCLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTWtCLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFyQjtBQUVBLFFBQU1DLFlBQVksR0FBR2hCLDZDQUFNLENBQWlCLElBQWpCLENBQTNCO0FBQ0EsUUFBTWlCLG1CQUFtQixHQUFHakIsNkNBQU0sQ0FBaUIsSUFBakIsQ0FBbEM7QUFFQUksRUFBQUEsK0RBQVksQ0FBQyxDQUFDWSxZQUFELENBQUQsRUFBaUIsTUFBTTtBQUMvQkUsSUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDYkwsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNILEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxHQUpXLENBQVo7QUFNQWQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pvQixJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXNDQyxDQUFELElBQXNCO0FBQ3ZEQyxNQUFBQSxPQUFPLENBQUNDLEdBQVI7O0FBQ0EsVUFDTU4sbUJBQW1CLENBQUNPLE9BQXRCLENBQWtEQyxRQUFsRCxDQUNJSixDQUFDLENBQUNLLE1BRE4sQ0FESixFQUlFO0FBQ0U7QUFDSDs7QUFDRCxVQUFJTCxDQUFDLENBQUNNLElBQUYsSUFBVSxNQUFkLEVBQXNCO0FBQ2xCVCxRQUFBQSxVQUFVLENBQUMsTUFBTTtBQUNiTCxVQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0gsU0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUdIO0FBQ0osS0FkRDtBQWVBLFdBQU8sTUFDSE0sUUFBUSxDQUFDUyxtQkFBVCxDQUE2QixTQUE3QixFQUF5Q1AsQ0FBRCxJQUFzQjtBQUMxRCxVQUNNSixtQkFBbUIsQ0FBQ08sT0FBdEIsQ0FBa0RDLFFBQWxELENBQ0lKLENBQUMsQ0FBQ0ssTUFETixDQURKLEVBSUU7QUFDRTtBQUNIOztBQUNELFVBQUlMLENBQUMsQ0FBQ00sSUFBRixJQUFVLE1BQWQsRUFBc0I7QUFDbEJULFFBQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQ2JMLFVBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxTQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0g7QUFDSixLQWJELENBREo7QUFlSCxHQS9CUSxFQStCTixFQS9CTSxDQUFUO0FBaUNBZCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDWmMsSUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBLFdBQU8sTUFBTUEsWUFBWSxDQUFDLElBQUQsQ0FBekI7QUFDSCxHQUhRLEVBR04sQ0FBQ0UsS0FBRCxDQUhNLENBQVQ7QUFLQSxzQkFDSSx1SUFDSTtBQUFLLGFBQVMsRUFBRU4sMEVBQWlCb0I7QUFBakMsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBRXBCLG9FQUFXcUI7QUFBM0Isa0JBQ0k7QUFBSyxhQUFTLEVBQUVyQixvRUFBV3NCO0FBQTNCLGtCQUNJLDJEQUFDLHdFQUFEO0FBQWMsYUFBUyxFQUFFdEIscUVBQXpCO0FBQXVDLE9BQUcsRUFBQyxHQUEzQztBQUErQyxTQUFLLEVBQUM7QUFBckQsSUFESixFQUVLQyxzREFBQSxDQUFVO0FBQUEsUUFBQztBQUFFd0IsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULEtBQUQ7QUFBQSx3QkFDUCwyREFBQyw0RUFBRDtBQUFjLFNBQUcsRUFBRUQsS0FBbkI7QUFBMEIsV0FBSyxFQUFFQSxLQUFqQztBQUF3QyxXQUFLLEVBQUVDO0FBQS9DLE1BRE87QUFBQSxHQUFWLENBRkwsQ0FESixlQU9JO0FBQUssYUFBUyxFQUFFMUIscUVBQVkyQjtBQUE1QixrQkFDSSwyREFBQywrREFBRCxPQURKLGVBRUksMkRBQUMsb0ZBQUQ7QUFBa0IsYUFBUyxFQUFFeEMsdUZBQTdCO0FBQXdDLE9BQUcsRUFBRXFCO0FBQTdDLElBRkosZUFHSSwyREFBQyx3RUFBRDtBQUFjLFNBQUssRUFBQztBQUFwQixJQUhKLGVBSUksMkRBQUMsd0VBQUQ7QUFDSSxZQUFRLEVBQUUsTUFBTTtBQUNaSixNQUFBQSxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0g7QUFITCxJQUpKLENBUEosQ0FESixDQURKLENBREosRUF1QktBLFNBQVMsaUJBQUksMkRBQUMsc0VBQUQ7QUFBVyxPQUFHLEVBQUVJO0FBQWhCLElBdkJsQixDQURKO0FBMkJIOztHQS9FdUJMO1VBRUxkOzs7S0FGS2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL01haW5NZW51L01haW5NZW51LnRzeD83OGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJ0Bjb21wb25lbnRzL21vbGVjdWxlcy9MYW5ndWFnZVN3aXRjaGVyL2xhbmd1YWdlcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5NZW51TGluayBmcm9tICcuLi8uLi9hdG9tcy9NYWluTWVudUxpbmsvTWFpbk1lbnVMaW5rJztcbmltcG9ydCBTZWFyY2hUb2dnbGUgZnJvbSAnLi4vLi4vYXRvbXMvU2VhcmNoVG9nZ2xlL1NlYXJjaFRvZ2dsZSc7XG5pbXBvcnQgY2xpY2tPdXRzaWRlIGZyb20gJy4uLy4uL2hvb2tzL2NsaWNrT3V0c2lkZSc7XG5pbXBvcnQgTGFuZ3VhZ2VTd2l0Y2hlciBmcm9tICcuLi8uLi9tb2xlY3VsZXMvTGFuZ3VhZ2VTd2l0Y2hlci9MYW5ndWFnZVN3aXRjaGVyJztcbmltcG9ydCBNYWluTWVudUl0ZW0gZnJvbSAnLi4vLi4vbW9sZWN1bGVzL01haW5NZW51SXRlbS9NYWluTWVudUl0ZW0nO1xuaW1wb3J0IFBsdXNNZW51SXRlbSBmcm9tICcuLi8uLi9tb2xlY3VsZXMvUGx1c01lbnVJdGVtJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vLi4vbW9sZWN1bGVzL1NlYXJjaEJhci9TZWFyY2hiYXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01haW5NZW51Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IG1lbnVzIH0gZnJvbSAnLi9tYWluTWVudUFycmF5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbk1lbnUoKSB7XG4gICAgY29uc3QgW3NlYXJjaGJhciwgc2V0U2VhcmNoYmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IHNlYXJjaEJhclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgbGFuZ3VhZ2VMaXN0ZW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgICBjbGlja091dHNpZGUoW3NlYXJjaEJhclJlZl0sICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWFyY2hiYXIoZmFsc2UpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygpXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKChsYW5ndWFnZUxpc3RlbmVyUmVmLmN1cnJlbnQgYXMgSFRNTERpdkVsZW1lbnQpKS5jb250YWlucyhcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnS2V5UycpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoYmFyKHRydWUpO1xuICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoKSA9PlxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoKGxhbmd1YWdlTGlzdGVuZXJSZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudCkpLmNvbnRhaW5zKFxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlID09ICdLZXlTJykge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaGJhcih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaGJhcihmYWxzZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiBzZXRTZWFyY2hiYXIodHJ1ZSk7XG4gICAgfSwgW3F1ZXJ5XSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5NZW51TGluayBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gdXJsPScvJyBsYWJlbD0nVE1EQicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVudXMubWFwKCh7IGxhYmVsLCBsaW5rcyB9KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluTWVudUl0ZW0ga2V5PXtsYWJlbH0gbGFiZWw9e2xhYmVsfSBsaW5rcz17bGlua3N9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbHVzTWVudUl0ZW0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFuZ3VhZ2VTd2l0Y2hlciBsYW5ndWFnZXM9e2xhbmd1YWdlc30gcmVmPXtsYW5ndWFnZUxpc3RlbmVyUmVmfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluTWVudUxpbmsgbGFiZWw9J0xvZ2luJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2hUb2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Ub2dnbGU9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaGJhcighc2VhcmNoYmFyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7c2VhcmNoYmFyICYmIDxTZWFyY2hCYXIgcmVmPXtzZWFyY2hCYXJSZWZ9IC8+fVxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbImxhbmd1YWdlcyIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJNYWluTWVudUxpbmsiLCJTZWFyY2hUb2dnbGUiLCJjbGlja091dHNpZGUiLCJMYW5ndWFnZVN3aXRjaGVyIiwiTWFpbk1lbnVJdGVtIiwiUGx1c01lbnVJdGVtIiwiU2VhcmNoQmFyIiwic3R5bGVzIiwibWVudXMiLCJNYWluTWVudSIsInNlYXJjaGJhciIsInNldFNlYXJjaGJhciIsInJvdXRlciIsInF1ZXJ5Iiwic2VhcmNoQmFyUmVmIiwibGFuZ3VhZ2VMaXN0ZW5lclJlZiIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImNvZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmFja2dyb3VuZCIsIm1haW4iLCJsZWZ0IiwidGl0bGUiLCJtYXAiLCJsYWJlbCIsImxpbmtzIiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/organisms/MainMenu/MainMenu.tsx\n");

/***/ })

});