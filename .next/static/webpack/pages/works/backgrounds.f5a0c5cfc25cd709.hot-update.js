"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/works/backgrounds",{

/***/ "./components/layouts/article.js":
/*!***************************************!*\
  !*** ./components/layouts/article.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../grid-item */ \"./components/grid-item.js\");\nvar _this = undefined;\n\n\n\n\nvar variants = {\n    hidden: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    },\n    enter: {\n        opacity: 1,\n        x: 0,\n        y: 0\n    },\n    exit: {\n        opacity: 0,\n        x: 0,\n        y: 20\n    }\n};\nvar Layout = function(param) {\n    var children = param.children, title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.article, {\n        initial: \"hidden\",\n        animate: \"enter\",\n        exit: \"exit\",\n        variants: variants,\n        transition: {\n            duration: 0.4,\n            type: \"easInOut\"\n        },\n        style: {\n            position: \"relative\",\n            height: \"100%\",\n            marginBottom: \"39px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: [\n                            title,\n                            \" - Darkskittlz \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Darkskittlz\\\\Desktop\\\\Coding\\\\Portfolio\\\\darkskittlz-homepage\\\\components\\\\layouts\\\\article.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darkskittlz\\\\Desktop\\\\Coding\\\\Portfolio\\\\darkskittlz-homepage\\\\components\\\\layouts\\\\article.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this),\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_grid_item__WEBPACK_IMPORTED_MODULE_2__.GridItemStyle, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Darkskittlz\\\\Desktop\\\\Coding\\\\Portfolio\\\\darkskittlz-homepage\\\\components\\\\layouts\\\\article.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Darkskittlz\\\\Desktop\\\\Coding\\\\Portfolio\\\\darkskittlz-homepage\\\\components\\\\layouts\\\\article.js\",\n        lineNumber: 14,\n        columnNumber: 3\n    }, _this);\n};\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dHMvYXJ0aWNsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQXNDO0FBQ1Y7QUFDZ0I7QUFJNUMsSUFBTUcsUUFBUSxHQUFHO0lBQ2JDLE1BQU0sRUFBRTtRQUFFQyxPQUFPLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFFQyxDQUFDLEVBQUUsRUFBRTtLQUFFO0lBQ25DQyxLQUFLLEVBQUU7UUFBRUgsT0FBTyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7UUFBRUMsQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUNqQ0UsSUFBSSxFQUFFO1FBQUVKLE9BQU8sRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxDQUFDO1FBQUVDLENBQUMsRUFBRSxFQUFFO0tBQUU7Q0FDcEM7QUFFRCxJQUFNRyxNQUFNLEdBQUc7UUFBR0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLEtBQUssU0FBTEEsS0FBSzt5QkFDL0IsOERBQUNaLHlEQUFjO1FBQ2ZjLE9BQU8sRUFBQyxRQUFRO1FBQ2hCQyxPQUFPLEVBQUMsT0FBTztRQUNmTixJQUFJLEVBQUMsTUFBTTtRQUNYTixRQUFRLEVBQUVBLFFBQVE7UUFDbEJhLFVBQVUsRUFBRTtZQUFDQyxRQUFRLEVBQUUsR0FBRztZQUFFQyxJQUFJLEVBQUUsVUFBVTtTQUFDO1FBQzdDQyxLQUFLLEVBQUU7WUFBQ0MsUUFBUSxFQUFFLFVBQVU7WUFBRUMsTUFBTSxFQUFFLE1BQU07WUFBRUMsWUFBWSxFQUFFLE1BQU07U0FBQztrQkFHL0Q7O2dCQUNHVixLQUFLLGtCQUNKLDhEQUFDWCxrREFBSTs4QkFDQyw0RUFBQ1csT0FBSzs7NEJBQUVBLEtBQUs7NEJBQUMsaUJBQWU7Ozs7Ozs2QkFBUTs7Ozs7eUJBQ2xDO2dCQUVWRCxRQUFROzhCQUNULDhEQUFDVCxxREFBYTs7Ozt5QkFBRzs7d0JBQ2hCOzs7OzthQUNZO0NBQ3BCO0FBcEJLUSxLQUFBQSxNQUFNO0FBc0JaLCtEQUFlQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0cy9hcnRpY2xlLmpzP2VmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyBHcmlkSXRlbVN0eWxlIH0gZnJvbSAnLi4vZ3JpZC1pdGVtJ1xyXG5cclxuXHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAyMCB9LFxyXG4gICAgZW50ZXI6IHsgb3BhY2l0eTogMSwgeDogMCwgeTogMCB9LFxyXG4gICAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAwLCB5OiAyMCB9XHJcbn1cclxuXHJcbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSB9KSA9PiAoXHJcbiAgPG1vdGlvbi5hcnRpY2xlXHJcbiAgaW5pdGlhbD1cImhpZGRlblwiXHJcbiAgYW5pbWF0ZT1cImVudGVyXCJcclxuICBleGl0PVwiZXhpdFwiXHJcbiAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gIHRyYW5zaXRpb249e3tkdXJhdGlvbjogMC40LCB0eXBlOiAnZWFzSW5PdXQnfX1cclxuICBzdHlsZT17e3Bvc2l0aW9uOiAncmVsYXRpdmUnLCBoZWlnaHQ6IFwiMTAwJVwiLCBtYXJnaW5Cb3R0b206IFwiMzlweFwifX1cclxuICA+XHJcbiAgXHJcbiAgICAgIDw+XHJcbiAgICAgICAge3RpdGxlICYmIChcclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX0gLSBEYXJrc2tpdHRseiA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPEdyaWRJdGVtU3R5bGUgLz5cclxuICAgICAgPC8+XHJcbiAgICA8L21vdGlvbi5hcnRpY2xlPlxyXG4pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXSwibmFtZXMiOlsibW90aW9uIiwiSGVhZCIsIkdyaWRJdGVtU3R5bGUiLCJ2YXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ4IiwieSIsImVudGVyIiwiZXhpdCIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJhcnRpY2xlIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJ0eXBlIiwic3R5bGUiLCJwb3NpdGlvbiIsImhlaWdodCIsIm1hcmdpbkJvdHRvbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layouts/article.js\n"));

/***/ })

});