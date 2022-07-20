"use strict";
exports.id = 426;
exports.ids = [426];
exports.modules = {

/***/ 8658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_particle_backgrounds__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5858);
/* harmony import */ var react_particle_backgrounds__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particle_backgrounds__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);




const LogoContainer = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
    position: fixed;

    img {
        height: 400px;
        display: flex;
        margin-top: 200px;

        @media screen and (max-width:800px) {
            margin-top: 150px;
            margin-left: 35px;
        }
    }
`;
const ParticleComponent = function() {
    const settings = {
        background: {
            color: {
                value: "#000000"
            }
        },
        canvas: {
            canvasFillSpace: true,
            useBouncyWalls: true
        },
        particle: {
            particleCount: 200,
            color: "#A501EB",
            minSize: 2,
            maxSize: 15
        },
        velocity: {
            directionAngle: 0,
            directionAngleVariance: 360,
            minSpeed: 0.2,
            maxSpeed: 1
        },
        opacity: {
            minOpacity: 0,
            maxOpacity: 0.5,
            opacityTransitionTime: 7000
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_particle_backgrounds__WEBPACK_IMPORTED_MODULE_2___default()), {
            style: {
                backgroundColor: "black",
                width: "100%",
                zIndex: "0"
            },
            settings: settings
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParticleComponent);


/***/ })

};
;