"use strict";
exports.id = 488;
exports.ids = [488];
exports.modules = {

/***/ 4488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports SocialIcons, FooterWrapper, LinkItem, SocialIconsContainer, CompanyContainer, Slogan, SocialContainer, LinkList, LinkColumn, LinkTitle, Icon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



const SocialIcons = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().a)`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
const FooterWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().section)`
  display: flex;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  margin-top: 250px;
  z-index: 1;
  width: 100%;
  justify-items: center;
`;
const LinkItem = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().a)`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;
	z-index: 1;

	&:hover {
		color: #fff;
		left: 6px;
	}
`;
const SocialIconsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
display: flex;
width: 100%;
flex-direction: column;
justify-items: center;
margin-left: 20%;
z-index: 1;

@media only screen and (max-width: 900px) {
	margin-left: 0%;
}
`;
const CompanyContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  	display: flex;
	flex-wrap: wrap;
	margin-left: 38px;
	z-index: 1;
`;
const Slogan = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().p)`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;
	z-index: 1;
`;
const SocialContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
	display: flex;
	align-items: center;
	z-index: 1;
`;
const LinkList = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul)`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
	display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
	z-index: 1;
	padding: 40px 0 28px;
`;
const LinkColumn = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
	z-index: 1;
`;
const LinkTitle = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h4)`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

`;
const Icon = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
	height: 7vh;
`;
function Footer() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FooterWrapper, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SocialIconsContainer, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CompanyContainer, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slogan, {
                        children: "Eat Sleep Code Repeat"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(SocialContainer, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialIcons, {
                            href: "https://discord.gg/kNhV2WPCUP",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                                img: true,
                                src: "/images/discord.png"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialIcons, {
                            href: "https://github.com/Darkskittlz",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillGithub, {
                                size: "3rem"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialIcons, {
                            href: "https://linkedin.com/Jeremydev",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillLinkedin, {
                                size: "3rem"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialIcons, {
                            href: "https://twitter.com/skittles_dark",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_1__.AiFillTwitterCircle, {
                                size: "3rem"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ })

};
;