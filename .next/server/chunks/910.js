"use strict";
exports.id = 910;
exports.ids = [910];
exports.modules = {

/***/ 4910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardContainer": () => (/* binding */ CardContainer),
/* harmony export */   "Grid2Container": () => (/* binding */ Grid2Container),
/* harmony export */   "ImageContainer": () => (/* binding */ ImageContainer),
/* harmony export */   "SkillBadge": () => (/* binding */ SkillBadge),
/* harmony export */   "SkillBadgeContainer": () => (/* binding */ SkillBadgeContainer),
/* harmony export */   "SkillText": () => (/* binding */ SkillText),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const SkillBadgeContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 20%;
  display: flex;
  align-items: center;
  z-index: 1;
  margin-bottom: 25px
`;
const SkillBadgeAnimation = styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes`
  0% { box-shadow: 0 0 10px #09EE9A; } 
  30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
  50% { box-shadow: 0 0 20px #09DEEE;  } 
  70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
  100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`;
const SkillBadge = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  height: 4.4rem;
  animation-name: ${SkillBadgeAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  border-radius: 50px;
  transition: all 0.5s ease;
  padding: 10px;
  margin-left: -10px;
  &:hover{
    transform: scale(1.2);
  }
`;
const ImageContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  text-align: center;
  background-color: black;   
  width: 80%;
  padding: 20px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
const Grid2Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
display: grid;
grid-template-columns: repeat(6, 1fr);
padding: 1rem;
place-items: center;
column-gap: 4rem;
row-gap: 2rem;

`;
const SkillText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  max-width: 800px;
  margin-top: 20px;
  display: flex; 
  justify-content: center;
  align-content: end;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.8);
`;
const CardContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  text-align: center;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.9);
  margin-bottom: 15px;
  backdrop-filter: blur(15px);
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardContainer);


/***/ })

};
;