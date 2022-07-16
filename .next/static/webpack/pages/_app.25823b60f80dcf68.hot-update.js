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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction easeOutCirc(x) {\n    return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\nvar Donut = function() {\n    _s();\n    var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), loading = ref[0], setLoading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), renderer = ref1[0], setRenderer = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _camera = ref2[0], setCamera = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)), target = ref3[0];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))), initialCameraPosition = ref4[0];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()), scene = ref5[0];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), _controls = ref6[0], setControls = ref6[1];\n    var handleWindowResize = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        var container = refBody.current;\n        if (container && renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            renderer.setSize(scW, scH);\n        }\n    }, [\n        renderer\n    ]);\n    /* eslint-disable react-hooks/exhaustive deps */ (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var container = refContainer.current;\n        if (container && !renderer) {\n            var scW = container.clientWidth;\n            var scH = container.clientHeight;\n            var renderer1 = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n                antialias: true,\n                alpha: true\n            });\n            renderer1.setPixelRatio(window.devicePixelRatio);\n            renderer1.setSize(scW, scH);\n            renderer1.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n            container.appendChild(renderer1.domElement);\n            setRenderer(renderer1);\n            var scale = scH * 0.005 + 25.8;\n            // const camera = new THREE.OrthographicCamera(\n            //     -scale,\n            //     scale,\n            //     scale,\n            //     -scale,\n            //     0.01,\n            //     5000\n            // )\n            var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 1000);\n            scene.add(camera);\n            camera.position.copy(initialCameraPosition);\n            camera.lookAt(target);\n            setCamera(camera);\n            var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n            scene.add(ambientLight);\n            var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_2__.OrbitControls(camera, renderer1.domElement);\n            controls.autoRotate = true;\n            controls.target = target;\n            setControls(controls);\n            (0,_lib_model__WEBPACK_IMPORTED_MODULE_3__.loadGLTFModel)(scene, \"/totoro.glb\", {\n                receiveShadow: false,\n                castShadow: false\n            }).then(function() {\n                animate();\n                setLoading(false);\n            });\n            var req = null;\n            var frame = 0;\n            var animate = function() {\n                req = requestAnimationFrame(animate);\n                frame = frame <= 100 ? frame + 1 : frame;\n                if (frame <= 100) {\n                    var p = initialCameraPosition;\n                    var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n                    camera.position.y = 10;\n                    camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n                    camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n                    camera.lookAt(target);\n                } else {\n                    controls.update();\n                }\n                renderer1.render(scene, camera);\n            };\n            return function() {\n                console.log(\"unmount\");\n                cancelAnimationFrame(req);\n                renderer1.dispose();\n            };\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        window.addEventListener(\"resize\", handleWindowResize, false);\n        return function() {\n            window.removeEventListener(\"resize\", handleWindowResize, false);\n        };\n    }, [\n        renderer,\n        handleWindowResize\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        ref: refContainer,\n        className: \"donut\",\n        m: \"auto\",\n        at: [\n            \"-20px\",\n            \"-60px\",\n            \"-120px\"\n        ],\n        mb: [\n            \"-40px\",\n            \"-140px\",\n            \"-200px\"\n        ],\n        w: [\n            280,\n            480,\n            640\n        ],\n        h: [\n            280,\n            480,\n            640\n        ],\n        position: \"relative\",\n        children: loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n            size: \"xl\",\n            position: \"absolute\",\n            left: \"50%\",\n            top: \"50%\",\n            ml: \"calc(0px - var(--spinner-size) /2\",\n            mt: \"calc(0px - var(--spinner-size))\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Darkskittlz\\\\Desktop\\\\Coding\\\\Portfolio\\\\darkskittlz-homepage\\\\components\\\\donut.js\",\n            lineNumber: 138,\n            columnNumber: 17\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Darkskittlz\\\\Desktop\\\\Coding\\\\Portfolio\\\\darkskittlz-homepage\\\\components\\\\donut.js\",\n        lineNumber: 127,\n        columnNumber: 9\n    }, _this);\n};\n_s(Donut, \"8aSUegmjHvm3OZ9MtQAWzCHz8XI=\");\n_c = Donut;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Donut);\nvar _c;\n$RefreshReg$(_c, \"Donut\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUMsVUFBVTtZQUNuQmtDLElBQUksRUFBQyxLQUFLO1lBQ1ZDLEdBQUcsRUFBQyxLQUFLO1lBQ1RDLEVBQUUsRUFBQyxtQ0FBbUM7WUFDdENDLEVBQUUsRUFBQyxpQ0FBaUM7Ozs7O2lCQUNwQzs7Ozs7YUFFSixDQUNUO0NBQ0o7R0ExSUtoRixLQUFLO0FBQUxBLEtBQUFBLEtBQUs7QUE0SVgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kb251dC5qcz9lZmY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXHJcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcclxuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gJy4uL2xpYi9tb2RlbCdcclxuXHJcbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpIHtcclxuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcclxufVxyXG5cclxuY29uc3QgRG9udXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtyZW5kZXJlciwgc2V0UmVuZGVyZXJdID0gdXNlU3RhdGUoKVxyXG4gICAgY29uc3QgW19jYW1lcmEsIHNldENhbWVyYV0gPSB1c2VTdGF0ZSgpXHJcbiAgICBjb25zdCBbdGFyZ2V0XSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCkpXHJcbiAgICBjb25zdCBbaW5pdGlhbENhbWVyYVBvc2l0aW9uXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKFxyXG4gICAgICAgICAgICAyMCAqIE1hdGguc2luKDAuMiAqIE1hdGguUEkpLFxyXG4gICAgICAgICAgICAxMCxcclxuICAgICAgICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxyXG4gICAgICAgIClcclxuICAgIClcclxuXHJcbiAgICBjb25zdCBbc2NlbmVdID0gdXNlU3RhdGUobmV3IFRIUkVFLlNjZW5lKCkpXHJcbiAgICBjb25zdCBbX2NvbnRyb2xzLCBzZXRDb250cm9sc10gPSB1c2VTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlV2luZG93UmVzaXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZCb2R5O1xyXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgcmVuZGVyZXIpIHtcclxuICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxyXG4gICAgXHJcbiAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVywgc2NIKVxyXG4gICAgICAgIH1cclxuICAgICAgfSwgW3JlbmRlcmVyXSlcclxuXHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9leGhhdXN0aXZlIGRlcHMgKi9cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyfSA9IHJlZkNvbnRhaW5lclxyXG4gICAgICAgIGlmIChjb250YWluZXIgJiYgIXJlbmRlcmVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxyXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0IFxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZSBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0UGl4ZWxSYXRpbyh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbylcclxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csIHNjSClcclxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcclxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpXHJcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDI1LjhcclxuICAgICAgICAgICAgLy8gY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcclxuICAgICAgICAgICAgLy8gICAgIC1zY2FsZSxcclxuICAgICAgICAgICAgLy8gICAgIHNjYWxlLFxyXG4gICAgICAgICAgICAvLyAgICAgc2NhbGUsXHJcbiAgICAgICAgICAgIC8vICAgICAtc2NhbGUsXHJcbiAgICAgICAgICAgIC8vICAgICAwLjAxLFxyXG4gICAgICAgICAgICAvLyAgICAgNTAwMFxyXG4gICAgICAgICAgICAvLyApXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCB3aWR0aCAvIC0gMiwgd2lkdGggLyAyLCBoZWlnaHQgLyAyLCBoZWlnaHQgLyAtIDIsIDEsIDEwMDAgKTtcclxuICAgICAgICAgICAgc2NlbmUuYWRkKCBjYW1lcmEgKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXHJcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICBzZXRDYW1lcmEoY2FtZXJhKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywgMSlcclxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMgKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcclxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcclxuICAgICAgICAgICAgY29udHJvbHMudGFyZ2V0ID0gdGFyZ2V0IFxyXG4gICAgICAgICAgICBzZXRDb250cm9scyhjb250cm9scylcclxuXHJcbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcvdG90b3JvLmdsYicsIHtcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVTaGFkb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2UgXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgpXHJcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlcT1udWxsIFxyXG4gICAgICAgICAgICBsZXQgZnJhbWU9IDAgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXHJcblxyXG4gICAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZSA8PSAxMDAgPyBmcmFtZSArIDEgOiBmcmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihmcmFtZSA8PSAxMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm90U3BlZWQgPSAtZWFzZU91dENpcmMoZnJhbWUgLyAxMjApICogTWF0aC5QSSAqIDIwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcclxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gcC56ICogTWF0aC5jb3Mocm90U3BlZWQpIC0gcC54ICogTWF0aC5zaW4ocm90U3BlZWQpIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9scy51cGRhdGUoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1bm1vdW50JylcclxuICAgICAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJlcSlcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRpc3Bvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlV2luZG93UmVzaXplLCBmYWxzZSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbcmVuZGVyZXIsIGhhbmRsZVdpbmRvd1Jlc2l6ZV0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Qm94IFxyXG4gICAgICAgICAgcmVmPXtyZWZDb250YWluZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJkb251dFwiXHJcbiAgICAgICAgICBtPVwiYXV0b1wiXHJcbiAgICAgICAgICBhdD17WyctMjBweCcsICctNjBweCcsICctMTIwcHgnIF19XHJcbiAgICAgICAgICBtYj17WyctNDBweCcsICctMTQwcHgnLCAnLTIwMHB4JyBdfVxyXG4gICAgICAgICAgdz17WzI4MCwgNDgwLCA2NDBdfVxyXG4gICAgICAgICAgaD17WzI4MCwgNDgwLCA2NDBdfVxyXG4gICAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBcclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cInhsXCIgXHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIiBcclxuICAgICAgICAgICAgICAgICAgbGVmdD1cIjUwJVwiXHJcbiAgICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiIFxyXG4gICAgICAgICAgICAgICAgICBtbD1cImNhbGMoMHB4IC0gdmFyKC0tc3Bpbm5lci1zaXplKSAvMlwiXHJcbiAgICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLSB2YXIoLS1zcGlubmVyLXNpemUpKVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb251dCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIkRvbnV0IiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlZlY3RvcjMiLCJ0YXJnZXQiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImhhbmRsZVdpbmRvd1Jlc2l6ZSIsImN1cnJlbnQiLCJjb250YWluZXIiLCJyZWZCb2R5Iiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJzZXRTaXplIiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwid2lkdGgiLCJoZWlnaHQiLCJhZGQiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJjb250cm9scyIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiIsInVwZGF0ZSIsInJlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImRpc3Bvc2UiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlZiIsImNsYXNzTmFtZSIsIm0iLCJhdCIsIm1iIiwidyIsImgiLCJzaXplIiwibGVmdCIsInRvcCIsIm1sIiwibXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/donut.js\n"));

/***/ })

});