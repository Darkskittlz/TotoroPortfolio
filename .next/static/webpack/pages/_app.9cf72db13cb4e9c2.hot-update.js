"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/donut.js":
/*!*****************************!*\
  !*** ./components/donut.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Donut = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refBody.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 25.8;\n            // const camera = new THREE.OrthographicCamera(\n            //     -scale,\n            //     scale,\n            //     scale,\n            //     -scale,\n            //     0.01,\n            //     5000\n            // )\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(60, 2, 0.1, 500);\n            camera.position.set(40, 10, 30);\n            camera.lookAt(0, 5, 0);\n            var controls2 = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls2.target.set(0, 5, 0);\n            controls2.update();\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            // const controls = new OrbitControls (camera, renderer.domElement)\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/totoro.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                console.log(\"unmount\");\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return function() {\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"donut\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) /2\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Darkskittlz\\\\Desktop\\\\Coding\\\\Portfolio\\\\darkskittlz-homepage\\\\components\\\\donut.js\",\n            lineNumber: 148,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Darkskittlz\\\\Desktop\\\\Coding\\\\Portfolio\\\\darkskittlz-homepage\\\\components\\\\donut.js\",\n        lineNumber: 137,\n        columnNumber: 9\n    }, _this);\n};\n_s(Donut, \"8aSUegmjHvm3OZ9MtQAWzCHz8XI=\");\n_c = Donut;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Donut);\nvar _c;\n$RefreshReg$(_c, \"Donut\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2xCQyxDQUFDLEVBQUU7QUFBQyxlQUFHO0FBQUUsZUFBRztBQUFFLGVBQUc7U0FBQztRQUNsQm5DLFFBQVEsRUFBQyxVQUFVO2tCQUVoQnRDLE9BQU8sa0JBQ0osOERBQUNYLHFEQUFPO1lBQ05xRixJQUFJLEVBQUMsSUFBSTtZQUNUcEMsUUFBUSxFQUFDLFVBQVU7WUFDbkJxQyxJQUFJLEVBQUMsS0FBSztZQUNWQyxHQUFHLEVBQUMsS0FBSztZQUNUQyxFQUFFLEVBQUMsbUNBQW1DO1lBQ3RDQyxFQUFFLEVBQUMsaUNBQWlDOzs7OztpQkFDcEM7Ozs7O2FBRUosQ0FDVDtDQUNKO0dBcEpLaEYsS0FBSztBQUFMQSxLQUFBQSxLQUFLO0FBc0pYLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZG9udXQuanM/ZWZmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCwgU3Bpbm5lciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXHJcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXHJcbmltcG9ydCB7IGxvYWRHTFRGTW9kZWwgfSBmcm9tICcuLi9saWIvbW9kZWwnXHJcblxyXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpXHJcbn1cclxuXHJcbmNvbnN0IERvbnV0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbcmVuZGVyZXIsIHNldFJlbmRlcmVyXSA9IHVzZVN0YXRlKClcclxuICAgIGNvbnN0IFtfY2FtZXJhLCBzZXRDYW1lcmFdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW3RhcmdldF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxyXG4gICAgY29uc3QgW2luaXRpYWxDYW1lcmFQb3NpdGlvbl0gPSB1c2VTdGF0ZShcclxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcclxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcclxuICAgICAgICAgICAgMTAsXHJcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcclxuICAgICAgICApXHJcbiAgICApXHJcblxyXG4gICAgY29uc3QgW3NjZW5lXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxyXG4gICAgY29uc3QgW19jb250cm9scywgc2V0Q29udHJvbHNdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVdpbmRvd1Jlc2l6ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lciB9ID0gcmVmQm9keTtcclxuICAgICAgICBpZiAoY29udGFpbmVyICYmIHJlbmRlcmVyKSB7XHJcbiAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgIGNvbnN0IHNjSCA9IGNvbnRhaW5lci5jbGllbnRIZWlnaHRcclxuICAgIFxyXG4gICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtyZW5kZXJlcl0pXHJcblxyXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZSBkZXBzICovXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB7IGN1cnJlbnQ6IGNvbnRhaW5lcn0gPSByZWZDb250YWluZXJcclxuICAgICAgICBpZiAoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzY1cgPSBjb250YWluZXIuY2xpZW50V2lkdGhcclxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodCBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xyXG4gICAgICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWUgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUoc2NXLCBzY0gpXHJcbiAgICAgICAgICAgIHJlbmRlcmVyLm91dHB1dEVuY29kaW5nID0gVEhSRUUuc1JHQkVuY29kaW5nXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBzZXRSZW5kZXJlcihyZW5kZXJlcilcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyAyNS44XHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXHJcbiAgICAgICAgICAgIC8vICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgIC8vICAgICBzY2FsZSxcclxuICAgICAgICAgICAgLy8gICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAvLyAgICAgLXNjYWxlLFxyXG4gICAgICAgICAgICAvLyAgICAgMC4wMSxcclxuICAgICAgICAgICAgLy8gICAgIDUwMDBcclxuICAgICAgICAgICAgLy8gKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKFxyXG4gICAgICAgICAgICAgICAgNjAsICAvLyBmb3ZcclxuICAgICAgICAgICAgICAgIDIsICAgLy8gYXNwZWN0XHJcbiAgICAgICAgICAgICAgICAwLjEsIC8vIG5lYXJcclxuICAgICAgICAgICAgICAgIDUwMCwgLy8gZmFyXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uc2V0KDQwLCAxMCwgMzApO1xyXG4gICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQoMCwgNSwgMCk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzMiA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgY29udHJvbHMyLnRhcmdldC5zZXQoMCwgNSwgMCk7XHJcbiAgICAgICAgICAgICAgY29udHJvbHMyLnVwZGF0ZSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcclxuICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4Y2NjY2NjLCAxKVxyXG4gICAgICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KVxyXG5cclxuICAgICAgICAgICAgLy8gY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyAoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxyXG4gICAgICAgICAgICBjb250cm9scy5hdXRvUm90YXRlID0gdHJ1ZVxyXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXQgXHJcbiAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxyXG5cclxuICAgICAgICAgICAgbG9hZEdMVEZNb2RlbChzY2VuZSwgJy90b3Rvcm8uZ2xiJywge1xyXG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93OiBmYWxzZSBcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgcmVxPW51bGwgXHJcbiAgICAgICAgICAgIGxldCBmcmFtZT0gMCBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcclxuXHJcbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGZyYW1lIDw9IDEwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBpbml0aWFsQ2FtZXJhUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZSAvIDEyMCkgKiBNYXRoLlBJICogMjBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSAxMFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gcC54ICogTWF0aC5jb3Mocm90U3BlZWQpICsgcC56ICogTWF0aC5zaW4ocm90U3BlZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZCkgXHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzLnVwZGF0ZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VubW91bnQnKVxyXG4gICAgICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmVxKVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVXaW5kb3dSZXNpemUsIGZhbHNlKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtyZW5kZXJlciwgaGFuZGxlV2luZG93UmVzaXplXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3ggXHJcbiAgICAgICAgICByZWY9e3JlZkNvbnRhaW5lcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImRvbnV0XCJcclxuICAgICAgICAgIG09XCJhdXRvXCJcclxuICAgICAgICAgIGF0PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCcgXX1cclxuICAgICAgICAgIG1iPXtbJy00MHB4JywgJy0xNDBweCcsICctMjAwcHgnIF19XHJcbiAgICAgICAgICB3PXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICAgICAgICBoPXtbMjgwLCA0ODAsIDY0MF19XHJcbiAgICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcclxuICAgICAgICAgICAgICAgIDxTcGlubmVyIFxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwieGxcIiBcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiIFxyXG4gICAgICAgICAgICAgICAgICBsZWZ0PVwiNTAlXCJcclxuICAgICAgICAgICAgICAgICAgdG9wPVwiNTAlXCIgXHJcbiAgICAgICAgICAgICAgICAgIG1sPVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpIC8yXCJcclxuICAgICAgICAgICAgICAgICAgbXQ9XCJjYWxjKDBweCAtIHZhcigtLXNwaW5uZXItc2l6ZSkpXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvbnV0Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiRG9udXQiLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiaGFuZGxlV2luZG93UmVzaXplIiwiY3VycmVudCIsImNvbnRhaW5lciIsInJlZkJvZHkiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsInNldFNpemUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwic2V0IiwibG9va0F0IiwiY29udHJvbHMyIiwidXBkYXRlIiwiY29weSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6IiwicmVuZGVyIiwiY29uc29sZSIsImxvZyIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVmIiwiY2xhc3NOYW1lIiwibSIsImF0IiwibWIiLCJ3IiwiaCIsInNpemUiLCJsZWZ0IiwidG9wIiwibWwiLCJtdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/donut.js\n"));

/***/ })

});