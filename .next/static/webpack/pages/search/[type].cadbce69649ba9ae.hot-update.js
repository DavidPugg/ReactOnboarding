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

/***/ "./src/components/organisms/MainMenu/MainMenu.tsx":
/*!********************************************************!*\
  !*** ./src/components/organisms/MainMenu/MainMenu.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainMenu; }\n/* harmony export */ });\n/* harmony import */ var _components_molecules_LanguageSwitcher_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/molecules/LanguageSwitcher/languages */ \"./src/components/molecules/LanguageSwitcher/languages.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/MainMenuLink/MainMenuLink */ \"./src/components/atoms/MainMenuLink/MainMenuLink.tsx\");\n/* harmony import */ var _atoms_SearchToggle_SearchToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/SearchToggle/SearchToggle */ \"./src/components/atoms/SearchToggle/SearchToggle.tsx\");\n/* harmony import */ var _hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/clickOutside */ \"./src/components/hooks/clickOutside.ts\");\n/* harmony import */ var _molecules_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/LanguageSwitcher/LanguageSwitcher */ \"./src/components/molecules/LanguageSwitcher/LanguageSwitcher.tsx\");\n/* harmony import */ var _molecules_MainMenuItem_MainMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/MainMenuItem/MainMenuItem */ \"./src/components/molecules/MainMenuItem/MainMenuItem.tsx\");\n/* harmony import */ var _molecules_PlusMenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/PlusMenuItem */ \"./src/components/molecules/PlusMenuItem/index.tsx\");\n/* harmony import */ var _molecules_SearchBar_Searchbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/SearchBar/Searchbar */ \"./src/components/molecules/SearchBar/Searchbar.tsx\");\n/* harmony import */ var _MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MainMenu.module.scss */ \"./src/components/organisms/MainMenu/MainMenu.module.scss\");\n/* harmony import */ var _MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mainMenuArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainMenuArray */ \"./src/components/organisms/MainMenu/mainMenuArray.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MainMenu() {\n  _s();\n\n  const [searchbar, setSearchbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const query = router.query;\n  const searchBarRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  const languageListenerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  (0,_hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([searchBarRef], () => {\n    setTimeout(() => {\n      setSearchbar(false);\n    }, 200);\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    document.addEventListener('keydown', e => {\n      if ((languageListenerRef.current != null(languageListenerRef.current)).contains(e.target)) {\n        return;\n      }\n\n      if (e.code == 'KeyS') {\n        setTimeout(() => {\n          setSearchbar(true);\n        }, 10);\n      }\n    });\n    return () => document.removeEventListener('keydown', e => {\n      if (languageListenerRef.current.contains(e.target)) {\n        return;\n      }\n\n      if (e.code == 'KeyS') {\n        setTimeout(() => {\n          setSearchbar(true);\n        }, 10);\n      }\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    setSearchbar(false);\n    return () => setSearchbar(true);\n  }, [query]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().background)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().left)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),\n    url: \"/\",\n    label: \"TMDB\"\n  }), _mainMenuArray__WEBPACK_IMPORTED_MODULE_10__.menus.map(_ref => {\n    let {\n      label,\n      links\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_MainMenuItem_MainMenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: label,\n      label: label,\n      links: links\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().right)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_PlusMenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    languages: _components_molecules_LanguageSwitcher_languages__WEBPACK_IMPORTED_MODULE_0__.languages,\n    ref: languageListenerRef\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Login\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_SearchToggle_SearchToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onToggle: () => {\n      setSearchbar(!searchbar);\n    }\n  }))))), searchbar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_SearchBar_Searchbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    ref: searchBarRef\n  }));\n}\n\n_s(MainMenu, \"5DQhh/Je8bHgpHWPiJyiFtRFt/c=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = MainMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainMenu\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTWFpbk1lbnUvTWFpbk1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNlLFFBQVQsR0FBb0I7QUFBQTs7QUFDL0IsUUFBTSxDQUFDQyxTQUFELEVBQVlDLFlBQVosSUFBNEJaLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU1hLE1BQU0sR0FBR2pCLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTWtCLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFyQjtBQUVBLFFBQU1DLFlBQVksR0FBR2hCLDZDQUFNLENBQWlCLElBQWpCLENBQTNCO0FBQ0EsUUFBTWlCLG1CQUFtQixHQUFHakIsNkNBQU0sQ0FBaUIsSUFBakIsQ0FBbEM7QUFFQUksRUFBQUEsK0RBQVksQ0FBQyxDQUFDWSxZQUFELENBQUQsRUFBaUIsTUFBTTtBQUMvQkUsSUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDYkwsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNILEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxHQUpXLENBQVo7QUFNQWQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pvQixJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXNDQyxDQUFELElBQXNCO0FBQ3ZELFVBQ0ksQ0FBQ0osbUJBQW1CLENBQUNLLE9BQXBCLElBQStCLEtBQU1MLG1CQUFtQixDQUFDSyxPQUExQixDQUFoQyxFQUFzRkMsUUFBdEYsQ0FDSUYsQ0FBQyxDQUFDRyxNQUROLENBREosRUFJRTtBQUNFO0FBQ0g7O0FBQ0QsVUFBSUgsQ0FBQyxDQUFDSSxJQUFGLElBQVUsTUFBZCxFQUFzQjtBQUNsQlAsUUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDYkwsVUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNILFNBRlMsRUFFUCxFQUZPLENBQVY7QUFHSDtBQUNKLEtBYkQ7QUFjQSxXQUFPLE1BQ0hNLFFBQVEsQ0FBQ08sbUJBQVQsQ0FBNkIsU0FBN0IsRUFBeUNMLENBQUQsSUFBc0I7QUFDMUQsVUFDTUosbUJBQW1CLENBQUNLLE9BQXRCLENBQWtEQyxRQUFsRCxDQUNJRixDQUFDLENBQUNHLE1BRE4sQ0FESixFQUlFO0FBQ0U7QUFDSDs7QUFDRCxVQUFJSCxDQUFDLENBQUNJLElBQUYsSUFBVSxNQUFkLEVBQXNCO0FBQ2xCUCxRQUFBQSxVQUFVLENBQUMsTUFBTTtBQUNiTCxVQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0gsU0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUdIO0FBQ0osS0FiRCxDQURKO0FBZUgsR0E5QlEsRUE4Qk4sRUE5Qk0sQ0FBVDtBQWdDQWQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pjLElBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7QUFDQSxXQUFPLE1BQU1BLFlBQVksQ0FBQyxJQUFELENBQXpCO0FBQ0gsR0FIUSxFQUdOLENBQUNFLEtBQUQsQ0FITSxDQUFUO0FBS0Esc0JBQ0ksdUlBQ0k7QUFBSyxhQUFTLEVBQUVOLDBFQUFpQmtCO0FBQWpDLGtCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFBSyxhQUFTLEVBQUVsQixvRUFBV21CO0FBQTNCLGtCQUNJO0FBQUssYUFBUyxFQUFFbkIsb0VBQVdvQjtBQUEzQixrQkFDSSwyREFBQyx3RUFBRDtBQUFjLGFBQVMsRUFBRXBCLHFFQUF6QjtBQUF1QyxPQUFHLEVBQUMsR0FBM0M7QUFBK0MsU0FBSyxFQUFDO0FBQXJELElBREosRUFFS0Msc0RBQUEsQ0FBVTtBQUFBLFFBQUM7QUFBRXNCLE1BQUFBLEtBQUY7QUFBU0MsTUFBQUE7QUFBVCxLQUFEO0FBQUEsd0JBQ1AsMkRBQUMsNEVBQUQ7QUFBYyxTQUFHLEVBQUVELEtBQW5CO0FBQTBCLFdBQUssRUFBRUEsS0FBakM7QUFBd0MsV0FBSyxFQUFFQztBQUEvQyxNQURPO0FBQUEsR0FBVixDQUZMLENBREosZUFPSTtBQUFLLGFBQVMsRUFBRXhCLHFFQUFZeUI7QUFBNUIsa0JBQ0ksMkRBQUMsK0RBQUQsT0FESixlQUVJLDJEQUFDLG9GQUFEO0FBQWtCLGFBQVMsRUFBRXRDLHVGQUE3QjtBQUF3QyxPQUFHLEVBQUVxQjtBQUE3QyxJQUZKLGVBR0ksMkRBQUMsd0VBQUQ7QUFBYyxTQUFLLEVBQUM7QUFBcEIsSUFISixlQUlJLDJEQUFDLHdFQUFEO0FBQ0ksWUFBUSxFQUFFLE1BQU07QUFDWkosTUFBQUEsWUFBWSxDQUFDLENBQUNELFNBQUYsQ0FBWjtBQUNIO0FBSEwsSUFKSixDQVBKLENBREosQ0FESixDQURKLEVBdUJLQSxTQUFTLGlCQUFJLDJEQUFDLHNFQUFEO0FBQVcsT0FBRyxFQUFFSTtBQUFoQixJQXZCbEIsQ0FESjtBQTJCSDs7R0E5RXVCTDtVQUVMZDs7O0tBRktjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL29yZ2FuaXNtcy9NYWluTWVudS9NYWluTWVudS50c3g/NzhkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYW5ndWFnZXMgfSBmcm9tICdAY29tcG9uZW50cy9tb2xlY3VsZXMvTGFuZ3VhZ2VTd2l0Y2hlci9sYW5ndWFnZXMnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNYWluTWVudUxpbmsgZnJvbSAnLi4vLi4vYXRvbXMvTWFpbk1lbnVMaW5rL01haW5NZW51TGluayc7XG5pbXBvcnQgU2VhcmNoVG9nZ2xlIGZyb20gJy4uLy4uL2F0b21zL1NlYXJjaFRvZ2dsZS9TZWFyY2hUb2dnbGUnO1xuaW1wb3J0IGNsaWNrT3V0c2lkZSBmcm9tICcuLi8uLi9ob29rcy9jbGlja091dHNpZGUnO1xuaW1wb3J0IExhbmd1YWdlU3dpdGNoZXIgZnJvbSAnLi4vLi4vbW9sZWN1bGVzL0xhbmd1YWdlU3dpdGNoZXIvTGFuZ3VhZ2VTd2l0Y2hlcic7XG5pbXBvcnQgTWFpbk1lbnVJdGVtIGZyb20gJy4uLy4uL21vbGVjdWxlcy9NYWluTWVudUl0ZW0vTWFpbk1lbnVJdGVtJztcbmltcG9ydCBQbHVzTWVudUl0ZW0gZnJvbSAnLi4vLi4vbW9sZWN1bGVzL1BsdXNNZW51SXRlbSc7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gJy4uLy4uL21vbGVjdWxlcy9TZWFyY2hCYXIvU2VhcmNoYmFyJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NYWluTWVudS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBtZW51cyB9IGZyb20gJy4vbWFpbk1lbnVBcnJheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW5NZW51KCkge1xuICAgIGNvbnN0IFtzZWFyY2hiYXIsIHNldFNlYXJjaGJhcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgcXVlcnkgPSByb3V0ZXIucXVlcnk7XG5cbiAgICBjb25zdCBzZWFyY2hCYXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICAgIGNvbnN0IGxhbmd1YWdlTGlzdGVuZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gICAgY2xpY2tPdXRzaWRlKFtzZWFyY2hCYXJSZWZdLCAoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U2VhcmNoYmFyKGZhbHNlKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9KTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIChsYW5ndWFnZUxpc3RlbmVyUmVmLmN1cnJlbnQgIT0gbnVsbCAobGFuZ3VhZ2VMaXN0ZW5lclJlZi5jdXJyZW50IGFzIEhUTUxEaXZFbGVtZW50KSkuY29udGFpbnMoXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50LFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ0tleVMnKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFNlYXJjaGJhcih0cnVlKTtcbiAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKCkgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKChsYW5ndWFnZUxpc3RlbmVyUmVmLmN1cnJlbnQgYXMgSFRNTERpdkVsZW1lbnQpKS5jb250YWlucyhcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0IGFzIEhUTUxEaXZFbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSA9PSAnS2V5UycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hiYXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRTZWFyY2hiYXIoZmFsc2UpO1xuICAgICAgICByZXR1cm4gKCkgPT4gc2V0U2VhcmNoYmFyKHRydWUpO1xuICAgIH0sIFtxdWVyeV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNYWluTWVudUxpbmsgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHVybD0nLycgbGFiZWw9J1RNREInIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbnVzLm1hcCgoeyBsYWJlbCwgbGlua3MgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpbk1lbnVJdGVtIGtleT17bGFiZWx9IGxhYmVsPXtsYWJlbH0gbGlua3M9e2xpbmtzfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGx1c01lbnVJdGVtIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhbmd1YWdlU3dpdGNoZXIgbGFuZ3VhZ2VzPXtsYW5ndWFnZXN9IHJlZj17bGFuZ3VhZ2VMaXN0ZW5lclJlZn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpbk1lbnVMaW5rIGxhYmVsPSdMb2dpbicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoVG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hiYXIoIXNlYXJjaGJhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3NlYXJjaGJhciAmJiA8U2VhcmNoQmFyIHJlZj17c2VhcmNoQmFyUmVmfSAvPn1cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJsYW5ndWFnZXMiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiTWFpbk1lbnVMaW5rIiwiU2VhcmNoVG9nZ2xlIiwiY2xpY2tPdXRzaWRlIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsIk1haW5NZW51SXRlbSIsIlBsdXNNZW51SXRlbSIsIlNlYXJjaEJhciIsInN0eWxlcyIsIm1lbnVzIiwiTWFpbk1lbnUiLCJzZWFyY2hiYXIiLCJzZXRTZWFyY2hiYXIiLCJyb3V0ZXIiLCJxdWVyeSIsInNlYXJjaEJhclJlZiIsImxhbmd1YWdlTGlzdGVuZXJSZWYiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImNvZGUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmFja2dyb3VuZCIsIm1haW4iLCJsZWZ0IiwidGl0bGUiLCJtYXAiLCJsYWJlbCIsImxpbmtzIiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/organisms/MainMenu/MainMenu.tsx\n");

/***/ })

});