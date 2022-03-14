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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainMenu; }\n/* harmony export */ });\n/* harmony import */ var _components_molecules_LanguageSwitcher_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/molecules/LanguageSwitcher/languages */ \"./src/components/molecules/LanguageSwitcher/languages.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/MainMenuLink/MainMenuLink */ \"./src/components/atoms/MainMenuLink/MainMenuLink.tsx\");\n/* harmony import */ var _atoms_SearchToggle_SearchToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/SearchToggle/SearchToggle */ \"./src/components/atoms/SearchToggle/SearchToggle.tsx\");\n/* harmony import */ var _hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/clickOutside */ \"./src/components/hooks/clickOutside.ts\");\n/* harmony import */ var _molecules_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/LanguageSwitcher/LanguageSwitcher */ \"./src/components/molecules/LanguageSwitcher/LanguageSwitcher.tsx\");\n/* harmony import */ var _molecules_MainMenuItem_MainMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/MainMenuItem/MainMenuItem */ \"./src/components/molecules/MainMenuItem/MainMenuItem.tsx\");\n/* harmony import */ var _molecules_PlusMenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/PlusMenuItem */ \"./src/components/molecules/PlusMenuItem/index.tsx\");\n/* harmony import */ var _molecules_SearchBar_Searchbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/SearchBar/Searchbar */ \"./src/components/molecules/SearchBar/Searchbar.tsx\");\n/* harmony import */ var _MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MainMenu.module.scss */ \"./src/components/organisms/MainMenu/MainMenu.module.scss\");\n/* harmony import */ var _MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mainMenuArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainMenuArray */ \"./src/components/organisms/MainMenu/mainMenuArray.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MainMenu() {\n  _s();\n\n  const [searchbar, setSearchbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const query = router.query;\n  const searchBarRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  const languageListenerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  (0,_hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([searchBarRef], () => {\n    setTimeout(() => {\n      setSearchbar(false);\n    }, 200);\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    document.addEventListener('keydown', e => {\n      if (languageListenerRef.current != null && languageListenerRef.current.contains(e.target)) {\n        return;\n      }\n\n      if (e.code == 'KeyS') {\n        setTimeout(() => {\n          setSearchbar(true);\n        }, 10);\n      }\n    });\n    return () => document.removeEventListener('keydown', e => {\n      if (languageListenerRef.current != null && languageListenerRef.current.contains(e.target)) {\n        return;\n      }\n\n      if (e.code == 'KeyS') {\n        setTimeout(() => {\n          setSearchbar(true);\n        }, 10);\n      }\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    setSearchbar(false);\n  }, [query]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().background)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().left)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),\n    url: \"/\",\n    label: \"TMDB\"\n  }), _mainMenuArray__WEBPACK_IMPORTED_MODULE_10__.menus.map(_ref => {\n    let {\n      label,\n      links\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_MainMenuItem_MainMenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: label,\n      label: label,\n      links: links\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().right)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_PlusMenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    languages: _components_molecules_LanguageSwitcher_languages__WEBPACK_IMPORTED_MODULE_0__.languages,\n    ref: languageListenerRef\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Login\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_SearchToggle_SearchToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onToggle: () => {\n      setSearchbar(!searchbar);\n    }\n  }))))), searchbar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_SearchBar_Searchbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    ref: searchBarRef\n  }));\n}\n\n_s(MainMenu, \"5DQhh/Je8bHgpHWPiJyiFtRFt/c=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = MainMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainMenu\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTWFpbk1lbnUvTWFpbk1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNlLFFBQVQsR0FBb0I7QUFBQTs7QUFDL0IsUUFBTSxDQUFDQyxTQUFELEVBQVlDLFlBQVosSUFBNEJaLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU1hLE1BQU0sR0FBR2pCLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTWtCLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFyQjtBQUVBLFFBQU1DLFlBQVksR0FBR2hCLDZDQUFNLENBQWlCLElBQWpCLENBQTNCO0FBQ0EsUUFBTWlCLG1CQUFtQixHQUFHakIsNkNBQU0sQ0FBaUIsSUFBakIsQ0FBbEM7QUFFQUksRUFBQUEsK0RBQVksQ0FBQyxDQUFDWSxZQUFELENBQUQsRUFBaUIsTUFBTTtBQUMvQkUsSUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDYkwsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNILEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxHQUpXLENBQVo7QUFNQWQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pvQixJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXNDQyxDQUFELElBQXNCO0FBQ3ZELFVBQ0lKLG1CQUFtQixDQUFDSyxPQUFwQixJQUErQixJQUEvQixJQUNDTCxtQkFBbUIsQ0FBQ0ssT0FBckIsQ0FBZ0RDLFFBQWhELENBQXlERixDQUFDLENBQUNHLE1BQTNELENBRkosRUFHRTtBQUNFO0FBQ0g7O0FBQ0QsVUFBSUgsQ0FBQyxDQUFDSSxJQUFGLElBQVUsTUFBZCxFQUFzQjtBQUNsQlAsUUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDYkwsVUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNILFNBRlMsRUFFUCxFQUZPLENBQVY7QUFHSDtBQUNKLEtBWkQ7QUFhQSxXQUFPLE1BQ0hNLFFBQVEsQ0FBQ08sbUJBQVQsQ0FBNkIsU0FBN0IsRUFBeUNMLENBQUQsSUFBc0I7QUFDMUQsVUFDSUosbUJBQW1CLENBQUNLLE9BQXBCLElBQStCLElBQS9CLElBQ0NMLG1CQUFtQixDQUFDSyxPQUFyQixDQUFnREMsUUFBaEQsQ0FBeURGLENBQUMsQ0FBQ0csTUFBM0QsQ0FGSixFQUdFO0FBQ0U7QUFDSDs7QUFDRCxVQUFJSCxDQUFDLENBQUNJLElBQUYsSUFBVSxNQUFkLEVBQXNCO0FBQ2xCUCxRQUFBQSxVQUFVLENBQUMsTUFBTTtBQUNiTCxVQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0gsU0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUdIO0FBQ0osS0FaRCxDQURKO0FBY0gsR0E1QlEsRUE0Qk4sRUE1Qk0sQ0FBVDtBQThCQWQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pjLElBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxHQUZRLEVBRU4sQ0FBQ0UsS0FBRCxDQUZNLENBQVQ7QUFJQSxzQkFDSSx1SUFDSTtBQUFLLGFBQVMsRUFBRU4sMEVBQWlCa0I7QUFBakMsa0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSTtBQUFLLGFBQVMsRUFBRWxCLG9FQUFXbUI7QUFBM0Isa0JBQ0k7QUFBSyxhQUFTLEVBQUVuQixvRUFBV29CO0FBQTNCLGtCQUNJLDJEQUFDLHdFQUFEO0FBQWMsYUFBUyxFQUFFcEIscUVBQXpCO0FBQXVDLE9BQUcsRUFBQyxHQUEzQztBQUErQyxTQUFLLEVBQUM7QUFBckQsSUFESixFQUVLQyxzREFBQSxDQUFVO0FBQUEsUUFBQztBQUFFc0IsTUFBQUEsS0FBRjtBQUFTQyxNQUFBQTtBQUFULEtBQUQ7QUFBQSx3QkFDUCwyREFBQyw0RUFBRDtBQUFjLFNBQUcsRUFBRUQsS0FBbkI7QUFBMEIsV0FBSyxFQUFFQSxLQUFqQztBQUF3QyxXQUFLLEVBQUVDO0FBQS9DLE1BRE87QUFBQSxHQUFWLENBRkwsQ0FESixlQU9JO0FBQUssYUFBUyxFQUFFeEIscUVBQVl5QjtBQUE1QixrQkFDSSwyREFBQywrREFBRCxPQURKLGVBRUksMkRBQUMsb0ZBQUQ7QUFBa0IsYUFBUyxFQUFFdEMsdUZBQTdCO0FBQXdDLE9BQUcsRUFBRXFCO0FBQTdDLElBRkosZUFHSSwyREFBQyx3RUFBRDtBQUFjLFNBQUssRUFBQztBQUFwQixJQUhKLGVBSUksMkRBQUMsd0VBQUQ7QUFDSSxZQUFRLEVBQUUsTUFBTTtBQUNaSixNQUFBQSxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0g7QUFITCxJQUpKLENBUEosQ0FESixDQURKLENBREosRUF1QktBLFNBQVMsaUJBQUksMkRBQUMsc0VBQUQ7QUFBVyxPQUFHLEVBQUVJO0FBQWhCLElBdkJsQixDQURKO0FBMkJIOztHQTNFdUJMO1VBRUxkOzs7S0FGS2MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvb3JnYW5pc21zL01haW5NZW51L01haW5NZW51LnRzeD83OGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhbmd1YWdlcyB9IGZyb20gJ0Bjb21wb25lbnRzL21vbGVjdWxlcy9MYW5ndWFnZVN3aXRjaGVyL2xhbmd1YWdlcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1haW5NZW51TGluayBmcm9tICcuLi8uLi9hdG9tcy9NYWluTWVudUxpbmsvTWFpbk1lbnVMaW5rJztcbmltcG9ydCBTZWFyY2hUb2dnbGUgZnJvbSAnLi4vLi4vYXRvbXMvU2VhcmNoVG9nZ2xlL1NlYXJjaFRvZ2dsZSc7XG5pbXBvcnQgY2xpY2tPdXRzaWRlIGZyb20gJy4uLy4uL2hvb2tzL2NsaWNrT3V0c2lkZSc7XG5pbXBvcnQgTGFuZ3VhZ2VTd2l0Y2hlciBmcm9tICcuLi8uLi9tb2xlY3VsZXMvTGFuZ3VhZ2VTd2l0Y2hlci9MYW5ndWFnZVN3aXRjaGVyJztcbmltcG9ydCBNYWluTWVudUl0ZW0gZnJvbSAnLi4vLi4vbW9sZWN1bGVzL01haW5NZW51SXRlbS9NYWluTWVudUl0ZW0nO1xuaW1wb3J0IFBsdXNNZW51SXRlbSBmcm9tICcuLi8uLi9tb2xlY3VsZXMvUGx1c01lbnVJdGVtJztcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vLi4vbW9sZWN1bGVzL1NlYXJjaEJhci9TZWFyY2hiYXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01haW5NZW51Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IG1lbnVzIH0gZnJvbSAnLi9tYWluTWVudUFycmF5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbk1lbnUoKSB7XG4gICAgY29uc3QgW3NlYXJjaGJhciwgc2V0U2VhcmNoYmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBxdWVyeSA9IHJvdXRlci5xdWVyeTtcblxuICAgIGNvbnN0IHNlYXJjaEJhclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gICAgY29uc3QgbGFuZ3VhZ2VMaXN0ZW5lclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgICBjbGlja091dHNpZGUoW3NlYXJjaEJhclJlZl0sICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTZWFyY2hiYXIoZmFsc2UpO1xuICAgICAgICB9LCAyMDApO1xuICAgIH0pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2VMaXN0ZW5lclJlZi5jdXJyZW50ICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAobGFuZ3VhZ2VMaXN0ZW5lclJlZi5jdXJyZW50IGFzIEhUTUxEaXZFbGVtZW50KS5jb250YWlucyhlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ0tleVMnKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaGJhcih0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2VMaXN0ZW5lclJlZi5jdXJyZW50ICE9IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgKGxhbmd1YWdlTGlzdGVuZXJSZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudCkuY29udGFpbnMoZS50YXJnZXQgYXMgSFRNTERpdkVsZW1lbnQpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnS2V5UycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hiYXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hiYXIoZmFsc2UpO1xuICAgIH0sIFtxdWVyeV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluTWVudUxpbmsgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHVybD0nLycgbGFiZWw9J1RNREInIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnVzLm1hcCgoeyBsYWJlbCwgbGlua3MgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpbk1lbnVJdGVtIGtleT17bGFiZWx9IGxhYmVsPXtsYWJlbH0gbGlua3M9e2xpbmtzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1c01lbnVJdGVtIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhbmd1YWdlU3dpdGNoZXIgbGFuZ3VhZ2VzPXtsYW5ndWFnZXN9IHJlZj17bGFuZ3VhZ2VMaXN0ZW5lclJlZn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpbk1lbnVMaW5rIGxhYmVsPSdMb2dpbicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hiYXIoIXNlYXJjaGJhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3NlYXJjaGJhciAmJiA8U2VhcmNoQmFyIHJlZj17c2VhcmNoQmFyUmVmfSAvPn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJsYW5ndWFnZXMiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTWFpbk1lbnVMaW5rIiwiU2VhcmNoVG9nZ2xlIiwiY2xpY2tPdXRzaWRlIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsIk1haW5NZW51SXRlbSIsIlBsdXNNZW51SXRlbSIsIlNlYXJjaEJhciIsInN0eWxlcyIsIm1lbnVzIiwiTWFpbk1lbnUiLCJzZWFyY2hiYXIiLCJzZXRTZWFyY2hiYXIiLCJyb3V0ZXIiLCJxdWVyeSIsInNlYXJjaEJhclJlZiIsImxhbmd1YWdlTGlzdGVuZXJSZWYiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImNvZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmFja2dyb3VuZCIsIm1haW4iLCJsZWZ0IiwidGl0bGUiLCJtYXAiLCJsYWJlbCIsImxpbmtzIiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/organisms/MainMenu/MainMenu.tsx\n");

/***/ })

});