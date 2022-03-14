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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainMenu; }\n/* harmony export */ });\n/* harmony import */ var _components_molecules_LanguageSwitcher_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @components/molecules/LanguageSwitcher/languages */ \"./src/components/molecules/LanguageSwitcher/languages.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../atoms/MainMenuLink/MainMenuLink */ \"./src/components/atoms/MainMenuLink/MainMenuLink.tsx\");\n/* harmony import */ var _atoms_SearchToggle_SearchToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../atoms/SearchToggle/SearchToggle */ \"./src/components/atoms/SearchToggle/SearchToggle.tsx\");\n/* harmony import */ var _hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/clickOutside */ \"./src/components/hooks/clickOutside.ts\");\n/* harmony import */ var _molecules_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../molecules/LanguageSwitcher/LanguageSwitcher */ \"./src/components/molecules/LanguageSwitcher/LanguageSwitcher.tsx\");\n/* harmony import */ var _molecules_MainMenuItem_MainMenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../molecules/MainMenuItem/MainMenuItem */ \"./src/components/molecules/MainMenuItem/MainMenuItem.tsx\");\n/* harmony import */ var _molecules_PlusMenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../molecules/PlusMenuItem */ \"./src/components/molecules/PlusMenuItem/index.tsx\");\n/* harmony import */ var _molecules_SearchBar_Searchbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../molecules/SearchBar/Searchbar */ \"./src/components/molecules/SearchBar/Searchbar.tsx\");\n/* harmony import */ var _MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./MainMenu.module.scss */ \"./src/components/organisms/MainMenu/MainMenu.module.scss\");\n/* harmony import */ var _MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mainMenuArray__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mainMenuArray */ \"./src/components/organisms/MainMenu/mainMenuArray.ts\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction MainMenu() {\n  _s();\n\n  const [searchbar, setSearchbar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const query = router.query;\n  const searchBarRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  const languageListenerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  (0,_hooks_clickOutside__WEBPACK_IMPORTED_MODULE_5__[\"default\"])([searchBarRef], () => {\n    setTimeout(() => {\n      setSearchbar(false);\n    }, 200);\n  });\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    document.addEventListener('keydown', e => {\n      if ((languageListenerRef.current != null && languageListenerRef.current).contains(e.target)) {\n        return;\n      }\n\n      if (e.code == 'KeyS') {\n        setTimeout(() => {\n          setSearchbar(true);\n        }, 10);\n      }\n    });\n    return () => document.removeEventListener('keydown', e => {\n      if (languageListenerRef.current.contains(e.target)) {\n        return;\n      }\n\n      if (e.code == 'KeyS') {\n        setTimeout(() => {\n          setSearchbar(true);\n        }, 10);\n      }\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    setSearchbar(false);\n    return () => setSearchbar(true);\n  }, [query]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().background)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().main)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().left)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),\n    url: \"/\",\n    label: \"TMDB\"\n  }), _mainMenuArray__WEBPACK_IMPORTED_MODULE_10__.menus.map(_ref => {\n    let {\n      label,\n      links\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_MainMenuItem_MainMenuItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      key: label,\n      label: label,\n      links: links\n    });\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", {\n    className: (_MainMenu_module_scss__WEBPACK_IMPORTED_MODULE_11___default().right)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_PlusMenuItem__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_LanguageSwitcher_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    languages: _components_molecules_LanguageSwitcher_languages__WEBPACK_IMPORTED_MODULE_0__.languages,\n    ref: languageListenerRef\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_MainMenuLink_MainMenuLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    label: \"Login\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_atoms_SearchToggle_SearchToggle__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    onToggle: () => {\n      setSearchbar(!searchbar);\n    }\n  }))))), searchbar && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_molecules_SearchBar_Searchbar__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n    ref: searchBarRef\n  }));\n}\n\n_s(MainMenu, \"5DQhh/Je8bHgpHWPiJyiFtRFt/c=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = MainMenu;\n\nvar _c;\n\n$RefreshReg$(_c, \"MainMenu\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTWFpbk1lbnUvTWFpbk1lbnUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNlLFFBQVQsR0FBb0I7QUFBQTs7QUFDL0IsUUFBTSxDQUFDQyxTQUFELEVBQVlDLFlBQVosSUFBNEJaLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU1hLE1BQU0sR0FBR2pCLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTWtCLEtBQUssR0FBR0QsTUFBTSxDQUFDQyxLQUFyQjtBQUVBLFFBQU1DLFlBQVksR0FBR2hCLDZDQUFNLENBQWlCLElBQWpCLENBQTNCO0FBQ0EsUUFBTWlCLG1CQUFtQixHQUFHakIsNkNBQU0sQ0FBaUIsSUFBakIsQ0FBbEM7QUFFQUksRUFBQUEsK0RBQVksQ0FBQyxDQUFDWSxZQUFELENBQUQsRUFBaUIsTUFBTTtBQUMvQkUsSUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDYkwsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNILEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxHQUpXLENBQVo7QUFNQWQsRUFBQUEsZ0RBQVMsQ0FBQyxNQUFNO0FBQ1pvQixJQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLFNBQTFCLEVBQXNDQyxDQUFELElBQXNCO0FBQ3ZELFVBQ0ksQ0FBQ0osbUJBQW1CLENBQUNLLE9BQXBCLElBQStCLElBQS9CLElBQXdDTCxtQkFBbUIsQ0FBQ0ssT0FBN0QsRUFBeUZDLFFBQXpGLENBQ0lGLENBQUMsQ0FBQ0csTUFETixDQURKLEVBSUU7QUFDRTtBQUNIOztBQUNELFVBQUlILENBQUMsQ0FBQ0ksSUFBRixJQUFVLE1BQWQsRUFBc0I7QUFDbEJQLFFBQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQ2JMLFVBQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDSCxTQUZTLEVBRVAsRUFGTyxDQUFWO0FBR0g7QUFDSixLQWJEO0FBY0EsV0FBTyxNQUNITSxRQUFRLENBQUNPLG1CQUFULENBQTZCLFNBQTdCLEVBQXlDTCxDQUFELElBQXNCO0FBQzFELFVBQ01KLG1CQUFtQixDQUFDSyxPQUF0QixDQUFrREMsUUFBbEQsQ0FDSUYsQ0FBQyxDQUFDRyxNQUROLENBREosRUFJRTtBQUNFO0FBQ0g7O0FBQ0QsVUFBSUgsQ0FBQyxDQUFDSSxJQUFGLElBQVUsTUFBZCxFQUFzQjtBQUNsQlAsUUFBQUEsVUFBVSxDQUFDLE1BQU07QUFDYkwsVUFBQUEsWUFBWSxDQUFDLElBQUQsQ0FBWjtBQUNILFNBRlMsRUFFUCxFQUZPLENBQVY7QUFHSDtBQUNKLEtBYkQsQ0FESjtBQWVILEdBOUJRLEVBOEJOLEVBOUJNLENBQVQ7QUFnQ0FkLEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNaYyxJQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0EsV0FBTyxNQUFNQSxZQUFZLENBQUMsSUFBRCxDQUF6QjtBQUNILEdBSFEsRUFHTixDQUFDRSxLQUFELENBSE0sQ0FBVDtBQUtBLHNCQUNJLHVJQUNJO0FBQUssYUFBUyxFQUFFTiwwRUFBaUJrQjtBQUFqQyxrQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQUssYUFBUyxFQUFFbEIsb0VBQVdtQjtBQUEzQixrQkFDSTtBQUFLLGFBQVMsRUFBRW5CLG9FQUFXb0I7QUFBM0Isa0JBQ0ksMkRBQUMsd0VBQUQ7QUFBYyxhQUFTLEVBQUVwQixxRUFBekI7QUFBdUMsT0FBRyxFQUFDLEdBQTNDO0FBQStDLFNBQUssRUFBQztBQUFyRCxJQURKLEVBRUtDLHNEQUFBLENBQVU7QUFBQSxRQUFDO0FBQUVzQixNQUFBQSxLQUFGO0FBQVNDLE1BQUFBO0FBQVQsS0FBRDtBQUFBLHdCQUNQLDJEQUFDLDRFQUFEO0FBQWMsU0FBRyxFQUFFRCxLQUFuQjtBQUEwQixXQUFLLEVBQUVBLEtBQWpDO0FBQXdDLFdBQUssRUFBRUM7QUFBL0MsTUFETztBQUFBLEdBQVYsQ0FGTCxDQURKLGVBT0k7QUFBSyxhQUFTLEVBQUV4QixxRUFBWXlCO0FBQTVCLGtCQUNJLDJEQUFDLCtEQUFELE9BREosZUFFSSwyREFBQyxvRkFBRDtBQUFrQixhQUFTLEVBQUV0Qyx1RkFBN0I7QUFBd0MsT0FBRyxFQUFFcUI7QUFBN0MsSUFGSixlQUdJLDJEQUFDLHdFQUFEO0FBQWMsU0FBSyxFQUFDO0FBQXBCLElBSEosZUFJSSwyREFBQyx3RUFBRDtBQUNJLFlBQVEsRUFBRSxNQUFNO0FBQ1pKLE1BQUFBLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDSDtBQUhMLElBSkosQ0FQSixDQURKLENBREosQ0FESixFQXVCS0EsU0FBUyxpQkFBSSwyREFBQyxzRUFBRDtBQUFXLE9BQUcsRUFBRUk7QUFBaEIsSUF2QmxCLENBREo7QUEyQkg7O0dBOUV1Qkw7VUFFTGQ7OztLQUZLYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXMvTWFpbk1lbnUvTWFpbk1lbnUudHN4Pzc4ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGFuZ3VhZ2VzIH0gZnJvbSAnQGNvbXBvbmVudHMvbW9sZWN1bGVzL0xhbmd1YWdlU3dpdGNoZXIvbGFuZ3VhZ2VzJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTWFpbk1lbnVMaW5rIGZyb20gJy4uLy4uL2F0b21zL01haW5NZW51TGluay9NYWluTWVudUxpbmsnO1xuaW1wb3J0IFNlYXJjaFRvZ2dsZSBmcm9tICcuLi8uLi9hdG9tcy9TZWFyY2hUb2dnbGUvU2VhcmNoVG9nZ2xlJztcbmltcG9ydCBjbGlja091dHNpZGUgZnJvbSAnLi4vLi4vaG9va3MvY2xpY2tPdXRzaWRlJztcbmltcG9ydCBMYW5ndWFnZVN3aXRjaGVyIGZyb20gJy4uLy4uL21vbGVjdWxlcy9MYW5ndWFnZVN3aXRjaGVyL0xhbmd1YWdlU3dpdGNoZXInO1xuaW1wb3J0IE1haW5NZW51SXRlbSBmcm9tICcuLi8uLi9tb2xlY3VsZXMvTWFpbk1lbnVJdGVtL01haW5NZW51SXRlbSc7XG5pbXBvcnQgUGx1c01lbnVJdGVtIGZyb20gJy4uLy4uL21vbGVjdWxlcy9QbHVzTWVudUl0ZW0nO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi8uLi9tb2xlY3VsZXMvU2VhcmNoQmFyL1NlYXJjaGJhcic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFpbk1lbnUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgbWVudXMgfSBmcm9tICcuL21haW5NZW51QXJyYXknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTWVudSgpIHtcbiAgICBjb25zdCBbc2VhcmNoYmFyLCBzZXRTZWFyY2hiYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gcm91dGVyLnF1ZXJ5O1xuXG4gICAgY29uc3Qgc2VhcmNoQmFyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBsYW5ndWFnZUxpc3RlbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAgIGNsaWNrT3V0c2lkZShbc2VhcmNoQmFyUmVmXSwgKCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFNlYXJjaGJhcihmYWxzZSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAobGFuZ3VhZ2VMaXN0ZW5lclJlZi5jdXJyZW50ICE9IG51bGwgJiYgKGxhbmd1YWdlTGlzdGVuZXJSZWYuY3VycmVudCBhcyBIVE1MRGl2RWxlbWVudCkpLmNvbnRhaW5zKFxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09ICdLZXlTJykge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWFyY2hiYXIodHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICgobGFuZ3VhZ2VMaXN0ZW5lclJlZi5jdXJyZW50IGFzIEhUTUxEaXZFbGVtZW50KSkuY29udGFpbnMoXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlLmNvZGUgPT0gJ0tleVMnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoYmFyKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfSwgW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0U2VhcmNoYmFyKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHNldFNlYXJjaGJhcih0cnVlKTtcbiAgICB9LCBbcXVlcnldKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpbk1lbnVMaW5rIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSB1cmw9Jy8nIGxhYmVsPSdUTURCJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttZW51cy5tYXAoKHsgbGFiZWwsIGxpbmtzIH0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5NZW51SXRlbSBrZXk9e2xhYmVsfSBsYWJlbD17bGFiZWx9IGxpbmtzPXtsaW5rc30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBsdXNNZW51SXRlbSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYW5ndWFnZVN3aXRjaGVyIGxhbmd1YWdlcz17bGFuZ3VhZ2VzfSByZWY9e2xhbmd1YWdlTGlzdGVuZXJSZWZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5NZW51TGluayBsYWJlbD0nTG9naW4nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaFRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VhcmNoYmFyKCFzZWFyY2hiYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzZWFyY2hiYXIgJiYgPFNlYXJjaEJhciByZWY9e3NlYXJjaEJhclJlZn0gLz59XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsibGFuZ3VhZ2VzIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIk1haW5NZW51TGluayIsIlNlYXJjaFRvZ2dsZSIsImNsaWNrT3V0c2lkZSIsIkxhbmd1YWdlU3dpdGNoZXIiLCJNYWluTWVudUl0ZW0iLCJQbHVzTWVudUl0ZW0iLCJTZWFyY2hCYXIiLCJzdHlsZXMiLCJtZW51cyIsIk1haW5NZW51Iiwic2VhcmNoYmFyIiwic2V0U2VhcmNoYmFyIiwicm91dGVyIiwicXVlcnkiLCJzZWFyY2hCYXJSZWYiLCJsYW5ndWFnZUxpc3RlbmVyUmVmIiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJjb2RlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJhY2tncm91bmQiLCJtYWluIiwibGVmdCIsInRpdGxlIiwibWFwIiwibGFiZWwiLCJsaW5rcyIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/organisms/MainMenu/MainMenu.tsx\n");

/***/ })

});