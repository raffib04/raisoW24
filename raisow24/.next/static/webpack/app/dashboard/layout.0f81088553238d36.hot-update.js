"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/layout",{

/***/ "(app-pages-browser)/./app/ui/dashboard/nav-links.tsx":
/*!****************************************!*\
  !*** ./app/ui/dashboard/nav-links.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavLinks; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js\");\n/* harmony import */ var _barrel_optimize_names_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=HomeIcon,UserGroupIcon!=!@heroicons/react/24/outline */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/UserGroupIcon.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Map of links to display in the side navigation.\n// Depending on the size of the application, this would be stored in a database.\nconst links = [\n    {\n        name: \"Home\",\n        href: \"/dashboard\",\n        icon: _barrel_optimize_names_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    },\n    {\n        name: \"Profile\",\n        href: \"/dashboard/profile\",\n        icon: _barrel_optimize_names_HomeIcon_UserGroupIcon_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    }\n];\nfunction NavLinks() {\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: links.map((link)=>{\n            const LinkIcon = link.icon;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: link.href,\n                className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3\", {\n                    \"bg-sky-100 text-blue-600\": pathname === link.href\n                }),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LinkIcon, {\n                        className: \"w-6\"\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelbiedron/Desktop/raisoW24/raisow24/app/ui/dashboard/nav-links.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"hidden md:block\",\n                        children: link.name\n                    }, void 0, false, {\n                        fileName: \"/Users/rafaelbiedron/Desktop/raisoW24/raisow24/app/ui/dashboard/nav-links.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, link.name, true, {\n                fileName: \"/Users/rafaelbiedron/Desktop/raisoW24/raisow24/app/ui/dashboard/nav-links.tsx\",\n                lineNumber: 28,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(NavLinks, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname\n    ];\n});\n_c = NavLinks;\nvar _c;\n$RefreshReg$(_c, \"NavLinks\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91aS9kYXNoYm9hcmQvbmF2LWxpbmtzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQU1xQztBQUNSO0FBQ2lCO0FBQ3RCO0FBRXhCLGtEQUFrRDtBQUNsRCxnRkFBZ0Y7QUFDaEYsTUFBTUssUUFBUTtJQUNWO1FBQUVDLE1BQU07UUFBUUMsTUFBTTtRQUFjQyxNQUFNUCxnSEFBUUE7SUFBQztJQUVuRDtRQUFFSyxNQUFNO1FBQVdDLE1BQU07UUFBc0JDLE1BQU1SLGdIQUFhQTtJQUFDO0NBQ3RFO0FBRWMsU0FBU1M7O0lBQ3BCLE1BQU1DLFdBQVdQLDREQUFXQTtJQUU1QixxQkFDSTtrQkFDS0UsTUFBTU0sR0FBRyxDQUFDLENBQUNDO1lBQ1IsTUFBTUMsV0FBV0QsS0FBS0osSUFBSTtZQUMxQixxQkFDSSw4REFBQ04sa0RBQUlBO2dCQUVESyxNQUFNSyxLQUFLTCxJQUFJO2dCQUNmTyxXQUFXVixnREFBSUEsQ0FDWCx3TEFDQTtvQkFDSSw0QkFDSU0sYUFBYUUsS0FBS0wsSUFBSTtnQkFDOUI7O2tDQUdKLDhEQUFDTTt3QkFBU0MsV0FBVTs7Ozs7O2tDQUNwQiw4REFBQ0M7d0JBQUVELFdBQVU7a0NBQW1CRixLQUFLTixJQUFJOzs7Ozs7O2VBWHBDTSxLQUFLTixJQUFJOzs7OztRQWMxQjs7QUFHWjtHQTFCd0JHOztRQUNITix3REFBV0E7OztLQURSTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdWkvZGFzaGJvYXJkL25hdi1saW5rcy50c3g/NTVlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHtcbiAgICBVc2VyR3JvdXBJY29uLFxuICAgIEhvbWVJY29uLFxuICAgIERvY3VtZW50RHVwbGljYXRlSWNvbixcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuXG4vLyBNYXAgb2YgbGlua3MgdG8gZGlzcGxheSBpbiB0aGUgc2lkZSBuYXZpZ2F0aW9uLlxuLy8gRGVwZW5kaW5nIG9uIHRoZSBzaXplIG9mIHRoZSBhcHBsaWNhdGlvbiwgdGhpcyB3b3VsZCBiZSBzdG9yZWQgaW4gYSBkYXRhYmFzZS5cbmNvbnN0IGxpbmtzID0gW1xuICAgIHsgbmFtZTogXCJIb21lXCIsIGhyZWY6IFwiL2Rhc2hib2FyZFwiLCBpY29uOiBIb21lSWNvbiB9LFxuXG4gICAgeyBuYW1lOiBcIlByb2ZpbGVcIiwgaHJlZjogXCIvZGFzaGJvYXJkL3Byb2ZpbGVcIiwgaWNvbjogVXNlckdyb3VwSWNvbiB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TGlua3MoKSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSB1c2VQYXRobmFtZSgpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBMaW5rSWNvbiA9IGxpbmsuaWNvbjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsaW5rLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4IGgtWzQ4cHhdIGdyb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yIHJvdW5kZWQtbWQgYmctZ3JheS01MCBwLTMgdGV4dC1zbSBmb250LW1lZGl1bSBob3ZlcjpiZy1za3ktMTAwIGhvdmVyOnRleHQtYmx1ZS02MDAgbWQ6ZmxleC1ub25lIG1kOmp1c3RpZnktc3RhcnQgbWQ6cC0yIG1kOnB4LTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctc2t5LTEwMCB0ZXh0LWJsdWUtNjAwXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSA9PT0gbGluay5ocmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rSWNvbiBjbGFzc05hbWU9J3ctNicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naGlkZGVuIG1kOmJsb2NrJz57bGluay5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJVc2VyR3JvdXBJY29uIiwiSG9tZUljb24iLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJjbHN4IiwibGlua3MiLCJuYW1lIiwiaHJlZiIsImljb24iLCJOYXZMaW5rcyIsInBhdGhuYW1lIiwibWFwIiwibGluayIsIkxpbmtJY29uIiwiY2xhc3NOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/ui/dashboard/nav-links.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clsx: function() { return /* binding */ clsx; }\n/* harmony export */ });\nfunction r(e){var t,f,n=\"\";if(\"string\"==typeof e||\"number\"==typeof e)n+=e;else if(\"object\"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=\" \"),n+=f);else for(t in e)e[t]&&(n&&(n+=\" \"),n+=t);return n}function clsx(){for(var e,t,f=0,n=\"\";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=\" \"),n+=t);return n}/* harmony default export */ __webpack_exports__[\"default\"] = (clsx);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGNBQWMsYUFBYSwrQ0FBK0MsdURBQXVELFdBQVcsMENBQTBDLHlDQUF5QyxTQUFnQixnQkFBZ0IscUJBQXFCLG1CQUFtQixrREFBa0QsU0FBUywrREFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jbHN4L2Rpc3QvY2xzeC5tanM/Y2MxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiByKGUpe3ZhciB0LGYsbj1cIlwiO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlfHxcIm51bWJlclwiPT10eXBlb2YgZSluKz1lO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpaWYoQXJyYXkuaXNBcnJheShlKSlmb3IodD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0mJihmPXIoZVt0XSkpJiYobiYmKG4rPVwiIFwiKSxuKz1mKTtlbHNlIGZvcih0IGluIGUpZVt0XSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGZ1bmN0aW9uIGNsc3goKXtmb3IodmFyIGUsdCxmPTAsbj1cIlwiO2Y8YXJndW1lbnRzLmxlbmd0aDspKGU9YXJndW1lbnRzW2YrK10pJiYodD1yKGUpKSYmKG4mJihuKz1cIiBcIiksbis9dCk7cmV0dXJuIG59ZXhwb3J0IGRlZmF1bHQgY2xzeDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\n"));

/***/ })

});