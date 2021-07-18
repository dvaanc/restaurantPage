/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
const content = document.querySelector(".content")
const homePage = (() => {

const header = () => {
  const header = document.createElement("header");
    header.innerHTML = 
    `<h1>iLuvBoba</h1>
    <nav class="nav">
      <ul>
        <li id="home">Home</li>
        <li>//</li>
        <li id="menu">Menu</li>
        <li>//</li>
        <li id="contact">Contact</li>
      </ul>
    </nav>
    `;

  content.appendChild(header);
};

const img = () => {
  const img = document.createElement("img");
    img.src="images/banner-index.jpg"
    content.appendChild(img);
}

const main = () => {
  const main = document.createElement("main");
    main.classList.add('about-us');
    main.innerHTML = 
    `
    <h4><strong>ABOUT</strong></h4>
    <h1>iLuvBoba</h1>
    <p>iLuvBoba is Australia's newest and most innovative bubble tea outlet. <br>Our delicious selection of iced teas are shaking up the game like never before.</p>
    <h4>OUR PROMISE</h4>
    <p>You Deserve Better Beverages</p>
    <p>We are a committed to not only provide the best beverage experience but also quality. Our teas are sourced from directly from Taiwan and we brew it fresh daily. </p>
    <p>We make your drinks when you order it and in front of you. </p>
    <p>And we are constantly searching for better quality ingredients and fresh new tastes that we can bring to you.</p>
    `;
    content.appendChild(main);
}

const footer = () => {
  const footer = document.createElement("footer");
    footer.innerHTML = 
    `
    <p>Copyright © 2021. Web Design by dvaanc.</p>
    `;
    content.appendChild(footer);
}

return { header, img, main, footer };
})();



/***/ }),

/***/ "./src/loadPage.js":
/*!*************************!*\
  !*** ./src/loadPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");


const loadPage = () => {
  _home__WEBPACK_IMPORTED_MODULE_0__.homePage.header();
  _home__WEBPACK_IMPORTED_MODULE_0__.homePage.img();
  _home__WEBPACK_IMPORTED_MODULE_0__.homePage.main();
  _home__WEBPACK_IMPORTED_MODULE_0__.homePage.footer();
};




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const contentDiv = document.querySelector(".content");
const menu = () => {
  const menu = document.createElement("main");
    menu.classList.add("menu");
    menu.innerHTML = 
    `
      <h1>Menu</h1>
      <h4>Flavoured Milk Tea</h4>
      <ul>
        <li>Almond Milk Tea</li>
        <li>Longan & Red Date Milk Tea</li>
        <li>Black Sesame Milk Tea</li>
        <li>Lychee Milk Tea</li>
        <li>Caramel Milk Tea</li>
        <li>Mango Milk Tea</li>
        <li>Chocolate Milk Tea<br>(white)/dark/mocha)</li>
        <li>Matcha Milk Tea</li>
        <li>Coconut Milk Tea</li>
        <li>Strawberry Milk Tea</li>
        <li>Coffee Milk Tea</li>
        <li>Taro Red / Green Milk Tea</li>
        <li>Ginger Milk Tea</li>
        <li>Toffee Coffee Milk Tea</li>
        <li>Honeydew Milk Tea</li>
        <li>Watermelon Milk Tea</li>
      </ul>
      <h4>Milk Tea</h4>
      <ul>
        <li>Brown Sugar Milk Tea</li>
        <li>Japanese Rice Milk Tea</li>
        <li>Earl Grey Milk Tea</li>
        <li>Jasmine Green Milk Tea</li>
        <li>Oolong Milk Tea</li>
        <li>Premium Milk Tea</li>
      </ul>
      <h4>Fruity Tea</h4>
      <ul>
        <li>Grape</li>
        <li>Lychee</li>
        <li>Grapefruit</li>
        <li>Mango</li>
        <li>Apple</li>
        <li>Passionfruit</li>
        <li>Peach</li>
        <li>Lemon Aloe</li>
        <li>Strawberry</li>
      </ul>
      <h4>Smoothie</h4>
      <ul>
        <li>Berry Boost<br>(strawberry, blueberry, raspberry, apple juice, ice cream & fruit jelly)</li>
        <li>Banana <br>(banana, fresh yoghurt, ice cream & egg pudding)</li>
        <li>Cloud<br>(mango, coconut, matcha, ice cream & mango pop)</li>
        <li>Strawberry Yoghurt<br>(strawberry, fresh yoghurt, ice cream & strawberry pop ball)</li>
        <li>Cookie & Cream<br>(orea,m&m, white chocolate, ice cream & pearls)</li>
        <li>Sweet Love<br>(taro, banana, coconut, ice cream & red bean)</li>
        <li>Mango Passion<br>(mango, passionfruit, ice cream & mango jelly)</li>
      </ul>
    `;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPage */ "./src/loadPage.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





const app = (function () {
  (0,_loadPage__WEBPACK_IMPORTED_MODULE_0__.loadPage)();
  const homeNav = document.querySelector("#home");
  const menuNav = document.querySelector("#menu");
  const contactNav = document.querySelector("#contact");

  homeNav.addEventListener("click", () => {
    
  });
  menuNav.addEventListener("click", replaceMain((0,_menu__WEBPACK_IMPORTED_MODULE_1__.menu)()))

  contactNav.addEventListener("click", () => {
    
  });

  const replaceMain = (func) => {
    let getMain = document.getElementsByTagName("main");
    getMain.parentNode.replaceChild(func, getMain)
  }
  
 
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50UGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRQYWdlLy4vc3JjL2xvYWRQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRQYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudFBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudFBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRQYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudFBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50UGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRO0FBQ1IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RGlDOztBQUVsQztBQUNBLEVBQUUsa0RBQWU7QUFDakIsRUFBRSwrQ0FBWTtBQUNkLEVBQUUsZ0RBQWE7QUFDZixFQUFFLGtEQUFlO0FBQ2pCOztBQUVvQjs7Ozs7Ozs7Ozs7Ozs7O0FDVHBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDMURBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05zQztBQUNSOzs7O0FBSTlCO0FBQ0EsRUFBRSxtREFBUTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0gsZ0RBQWdELDJDQUFJOztBQUVwRDs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDLEkiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIilcbmNvbnN0IGhvbWVQYWdlID0gKCgpID0+IHtcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci5pbm5lckhUTUwgPSBcbiAgICBgPGgxPmlMdXZCb2JhPC9oMT5cbiAgICA8bmF2IGNsYXNzPVwibmF2XCI+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaSBpZD1cImhvbWVcIj5Ib21lPC9saT5cbiAgICAgICAgPGxpPi8vPC9saT5cbiAgICAgICAgPGxpIGlkPVwibWVudVwiPk1lbnU8L2xpPlxuICAgICAgICA8bGk+Ly88L2xpPlxuICAgICAgICA8bGkgaWQ9XCJjb250YWN0XCI+Q29udGFjdDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICAgIGA7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xufTtcblxuY29uc3QgaW1nID0gKCkgPT4ge1xuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmM9XCJpbWFnZXMvYmFubmVyLWluZGV4LmpwZ1wiXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xufVxuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdhYm91dC11cycpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gXG4gICAgYFxuICAgIDxoND48c3Ryb25nPkFCT1VUPC9zdHJvbmc+PC9oND5cbiAgICA8aDE+aUx1dkJvYmE8L2gxPlxuICAgIDxwPmlMdXZCb2JhIGlzIEF1c3RyYWxpYSdzIG5ld2VzdCBhbmQgbW9zdCBpbm5vdmF0aXZlIGJ1YmJsZSB0ZWEgb3V0bGV0LiA8YnI+T3VyIGRlbGljaW91cyBzZWxlY3Rpb24gb2YgaWNlZCB0ZWFzIGFyZSBzaGFraW5nIHVwIHRoZSBnYW1lIGxpa2UgbmV2ZXIgYmVmb3JlLjwvcD5cbiAgICA8aDQ+T1VSIFBST01JU0U8L2g0PlxuICAgIDxwPllvdSBEZXNlcnZlIEJldHRlciBCZXZlcmFnZXM8L3A+XG4gICAgPHA+V2UgYXJlIGEgY29tbWl0dGVkIHRvIG5vdCBvbmx5IHByb3ZpZGUgdGhlIGJlc3QgYmV2ZXJhZ2UgZXhwZXJpZW5jZSBidXQgYWxzbyBxdWFsaXR5LiBPdXIgdGVhcyBhcmUgc291cmNlZCBmcm9tIGRpcmVjdGx5IGZyb20gVGFpd2FuIGFuZCB3ZSBicmV3IGl0IGZyZXNoIGRhaWx5LiA8L3A+XG4gICAgPHA+V2UgbWFrZSB5b3VyIGRyaW5rcyB3aGVuIHlvdSBvcmRlciBpdCBhbmQgaW4gZnJvbnQgb2YgeW91LiA8L3A+XG4gICAgPHA+QW5kIHdlIGFyZSBjb25zdGFudGx5IHNlYXJjaGluZyBmb3IgYmV0dGVyIHF1YWxpdHkgaW5ncmVkaWVudHMgYW5kIGZyZXNoIG5ldyB0YXN0ZXMgdGhhdCB3ZSBjYW4gYnJpbmcgdG8geW91LjwvcD5cbiAgICBgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG59XG5cbmNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gXG4gICAgYFxuICAgIDxwPkNvcHlyaWdodCDCqSAyMDIxLiBXZWIgRGVzaWduIGJ5IGR2YWFuYy48L3A+XG4gICAgYDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG5cbnJldHVybiB7IGhlYWRlciwgaW1nLCBtYWluLCBmb290ZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IGhvbWVQYWdlIH07IiwiaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lXCI7XG5cbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICBob21lUGFnZS5oZWFkZXIoKTtcbiAgaG9tZVBhZ2UuaW1nKCk7XG4gIGhvbWVQYWdlLm1haW4oKTtcbiAgaG9tZVBhZ2UuZm9vdGVyKCk7XG59O1xuXG5leHBvcnQgeyBsb2FkUGFnZSB9O1xuIiwiY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuICAgIG1lbnUuaW5uZXJIVE1MID0gXG4gICAgYFxuICAgICAgPGgxPk1lbnU8L2gxPlxuICAgICAgPGg0PkZsYXZvdXJlZCBNaWxrIFRlYTwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5BbG1vbmQgTWlsayBUZWE8L2xpPlxuICAgICAgICA8bGk+TG9uZ2FuICYgUmVkIERhdGUgTWlsayBUZWE8L2xpPlxuICAgICAgICA8bGk+QmxhY2sgU2VzYW1lIE1pbGsgVGVhPC9saT5cbiAgICAgICAgPGxpPkx5Y2hlZSBNaWxrIFRlYTwvbGk+XG4gICAgICAgIDxsaT5DYXJhbWVsIE1pbGsgVGVhPC9saT5cbiAgICAgICAgPGxpPk1hbmdvIE1pbGsgVGVhPC9saT5cbiAgICAgICAgPGxpPkNob2NvbGF0ZSBNaWxrIFRlYTxicj4od2hpdGUpL2RhcmsvbW9jaGEpPC9saT5cbiAgICAgICAgPGxpPk1hdGNoYSBNaWxrIFRlYTwvbGk+XG4gICAgICAgIDxsaT5Db2NvbnV0IE1pbGsgVGVhPC9saT5cbiAgICAgICAgPGxpPlN0cmF3YmVycnkgTWlsayBUZWE8L2xpPlxuICAgICAgICA8bGk+Q29mZmVlIE1pbGsgVGVhPC9saT5cbiAgICAgICAgPGxpPlRhcm8gUmVkIC8gR3JlZW4gTWlsayBUZWE8L2xpPlxuICAgICAgICA8bGk+R2luZ2VyIE1pbGsgVGVhPC9saT5cbiAgICAgICAgPGxpPlRvZmZlZSBDb2ZmZWUgTWlsayBUZWE8L2xpPlxuICAgICAgICA8bGk+SG9uZXlkZXcgTWlsayBUZWE8L2xpPlxuICAgICAgICA8bGk+V2F0ZXJtZWxvbiBNaWxrIFRlYTwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPGg0Pk1pbGsgVGVhPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkJyb3duIFN1Z2FyIE1pbGsgVGVhPC9saT5cbiAgICAgICAgPGxpPkphcGFuZXNlIFJpY2UgTWlsayBUZWE8L2xpPlxuICAgICAgICA8bGk+RWFybCBHcmV5IE1pbGsgVGVhPC9saT5cbiAgICAgICAgPGxpPkphc21pbmUgR3JlZW4gTWlsayBUZWE8L2xpPlxuICAgICAgICA8bGk+T29sb25nIE1pbGsgVGVhPC9saT5cbiAgICAgICAgPGxpPlByZW1pdW0gTWlsayBUZWE8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoND5GcnVpdHkgVGVhPC9oND5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpPkdyYXBlPC9saT5cbiAgICAgICAgPGxpPkx5Y2hlZTwvbGk+XG4gICAgICAgIDxsaT5HcmFwZWZydWl0PC9saT5cbiAgICAgICAgPGxpPk1hbmdvPC9saT5cbiAgICAgICAgPGxpPkFwcGxlPC9saT5cbiAgICAgICAgPGxpPlBhc3Npb25mcnVpdDwvbGk+XG4gICAgICAgIDxsaT5QZWFjaDwvbGk+XG4gICAgICAgIDxsaT5MZW1vbiBBbG9lPC9saT5cbiAgICAgICAgPGxpPlN0cmF3YmVycnk8L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxoND5TbW9vdGhpZTwvaDQ+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5CZXJyeSBCb29zdDxicj4oc3RyYXdiZXJyeSwgYmx1ZWJlcnJ5LCByYXNwYmVycnksIGFwcGxlIGp1aWNlLCBpY2UgY3JlYW0gJiBmcnVpdCBqZWxseSk8L2xpPlxuICAgICAgICA8bGk+QmFuYW5hIDxicj4oYmFuYW5hLCBmcmVzaCB5b2dodXJ0LCBpY2UgY3JlYW0gJiBlZ2cgcHVkZGluZyk8L2xpPlxuICAgICAgICA8bGk+Q2xvdWQ8YnI+KG1hbmdvLCBjb2NvbnV0LCBtYXRjaGEsIGljZSBjcmVhbSAmIG1hbmdvIHBvcCk8L2xpPlxuICAgICAgICA8bGk+U3RyYXdiZXJyeSBZb2dodXJ0PGJyPihzdHJhd2JlcnJ5LCBmcmVzaCB5b2dodXJ0LCBpY2UgY3JlYW0gJiBzdHJhd2JlcnJ5IHBvcCBiYWxsKTwvbGk+XG4gICAgICAgIDxsaT5Db29raWUgJiBDcmVhbTxicj4ob3JlYSxtJm0sIHdoaXRlIGNob2NvbGF0ZSwgaWNlIGNyZWFtICYgcGVhcmxzKTwvbGk+XG4gICAgICAgIDxsaT5Td2VldCBMb3ZlPGJyPih0YXJvLCBiYW5hbmEsIGNvY29udXQsIGljZSBjcmVhbSAmIHJlZCBiZWFuKTwvbGk+XG4gICAgICAgIDxsaT5NYW5nbyBQYXNzaW9uPGJyPihtYW5nbywgcGFzc2lvbmZydWl0LCBpY2UgY3JlYW0gJiBtYW5nbyBqZWxseSk8L2xpPlxuICAgICAgPC91bD5cbiAgICBgO1xufVxuXG5leHBvcnQgeyBtZW51IH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsb2FkUGFnZSB9IGZyb20gXCIuL2xvYWRQYWdlXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuXG5cblxuY29uc3QgYXBwID0gKGZ1bmN0aW9uICgpIHtcbiAgbG9hZFBhZ2UoKTtcbiAgY29uc3QgaG9tZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaG9tZVwiKTtcbiAgY29uc3QgbWVudU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVudVwiKTtcbiAgY29uc3QgY29udGFjdE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdFwiKTtcblxuICBob21lTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgXG4gIH0pO1xuICBtZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXBsYWNlTWFpbihtZW51KCkpKVxuXG4gIGNvbnRhY3ROYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBcbiAgfSk7XG5cbiAgY29uc3QgcmVwbGFjZU1haW4gPSAoZnVuYykgPT4ge1xuICAgIGxldCBnZXRNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJtYWluXCIpO1xuICAgIGdldE1haW4ucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZnVuYywgZ2V0TWFpbilcbiAgfVxuICBcbiBcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==