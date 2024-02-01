/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js1/module/acodionn.js":
/*!********************************!*\
  !*** ./js1/module/acodionn.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ acordion)\n/* harmony export */ });\nfunction acordion() {\n  const acordionList = document.querySelectorAll('[data-acordion=\"seletor\"] dt');\n  function ativando() {\n    this.nextElementSibling.classList.toggle('ativar');\n    this.classList.toggle('ativar');\n  }\n  // if (acordionList.length) {\n  //   acordionList[0].nextElementSibling.classList.add('ativar');\n  //   acordionList.forEach((item, index) => {\n  //     item.addEventListener('click', () => {\n  //       console.log(index);\n  //       item.nextElementSibling.classList.toggle('ativar');\n  //     });\n  //   });\n  // }\n\n  if (acordionList.length) {\n    acordionList[0].classList.add('ativar');\n    acordionList[0].nextElementSibling.classList.add('ativar');\n    acordionList.forEach((item) => {\n      item.addEventListener('click', ativando);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/acodionn.js?");

/***/ }),

/***/ "./js1/module/animaNumero.js":
/*!***********************************!*\
  !*** ./js1/module/animaNumero.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNumeros)\n/* harmony export */ });\nfunction animaNumeros() {\n  const numeros = document.querySelectorAll('[data-numeros]');\n  function ligarNumero() {\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let i = 0;\n      const timer = setInterval(() => {\n        i += incremento;\n        numero.innerText = i;\n        if (i >= total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, Math.random() * (1 - 0.01) + 0.1);\n    });\n  }\n  let observador;\n  function observando(mutacao) {\n    if (mutacao[0].target.classList.contains('ativou')) {\n      observador.disconnect();\n      ligarNumero();\n    }\n  }\n  const miraObservador = document.querySelector('.numeros');\n  observador = new MutationObserver(observando);\n  observador.observe(miraObservador, { attributes: true });\n}\n\nconsole.log('testeasdasd');\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/animaNumero.js?");

/***/ }),

/***/ "./js1/module/animapage.js":
/*!*********************************!*\
  !*** ./js1/module/animapage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaPage)\n/* harmony export */ });\nfunction animaPage() {\n  const sections = document.querySelectorAll('[data-scroll=\"anima\"]');\n  const windowAtiv = window.innerHeight * 0.6;\n  function animaScroll() {\n    sections.forEach((section) => {\n      const secTop = section.getBoundingClientRect().top - windowAtiv;\n      if (secTop < 0) {\n        section.classList.add('ativou');\n      } else if (section.classList.contains('ativo')) {\n        section.classList.remove('ativou');\n      }\n    });\n  }\n  if (sections.length) {\n    animaScroll();\n    window.addEventListener('scroll', animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/animapage.js?");

/***/ }),

/***/ "./js1/module/balonmap.js":
/*!********************************!*\
  !*** ./js1/module/balonmap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ balonMapa)\n/* harmony export */ });\nfunction balonMapa() {\n  function criarBalon(element) {\n    const balonBox = document.createElement('div');\n    const texto = element.getAttribute('aria-label');\n    balonBox.classList.add('balon');\n    balonBox.innerText = texto;\n    const div = document.querySelector('div');\n    div.appendChild(balonBox);\n    return balonBox;\n  }\n\n  const mouseMove = {\n    handleEvent(e) {\n      const px = 'px';\n      this.balonBox.style.top = `${e.pageY + 8}px`;\n      this.balonBox.style.left = (e.pageX + 8) + px;\n    },\n  };\n  const fecharBalon = {\n    handleEvent() {\n      this.balonBo.remove();\n      this.element.removeEventListener('mouseleave', fecharBalon);\n      this.element.removeEventListener('mousemove', mouseMove);\n    },\n  };\n\n  function mouseDentro() {\n    const balonBox = criarBalon(this);\n    // function mouseMove() {\n    //   balonBox.style.top = (e.pageY + 8) + \"px\"\n    //   balonBox.style.left = (e.pageX + 8) + \"px\"\n    // }\n    mouseMove.balonBox = balonBox;\n    this.addEventListener('mousemove', mouseMove);\n\n    //------------------------------\n    // function fecharBalon() {\n    //   balonBox.remove()\n    //   this.removeEventListener('mouseleave', fecharBalon)\n    // }\n\n    fecharBalon.balonBo = balonBox;\n    fecharBalon.element = this;\n    this.addEventListener('mouseleave', fecharBalon);\n  }\n  const balons = document.querySelectorAll('[data-balon]');\n  balons.forEach((balon) => {\n    balon.addEventListener('mouseover', mouseDentro);\n  });\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/balonmap.js?");

/***/ }),

/***/ "./js1/module/clicouFora.js":
/*!**********************************!*\
  !*** ./js1/module/clicouFora.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clickFora)\n/* harmony export */ });\nfunction clickFora(element, events, retorno) {\n  const html = document.documentElement;\n  const atributo = 'data-outside';\n\n  function clicouFora(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(atributo);\n      events.forEach((eventos) => {\n        html.removeEventListener(eventos, clicouFora);\n      });\n      retorno();\n    }\n  }\n  if (!element.hasAttribute(atributo)) {\n    events.forEach((eventos) => {\n      setTimeout(() => {\n        html.addEventListener(eventos, clicouFora);\n      });\n    }); element.setAttribute(atributo, '');\n  }\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/clicouFora.js?");

/***/ }),

/***/ "./js1/module/dropMenu.js":
/*!********************************!*\
  !*** ./js1/module/dropMenu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dropMenu)\n/* harmony export */ });\n/* harmony import */ var _clicouFora_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clicouFora.js */ \"./js1/module/clicouFora.js\");\n\n\nfunction dropMenu() {\n  const dropMenus = document.querySelectorAll('[data-dropdown]');\n  const acoes = ['touchstart', 'click'];\n  function abrirMenu() {\n    // e.preventDefault()\n    this.classList.toggle('ativo');\n    (0,_clicouFora_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, acoes, () => {\n      this.classList.remove('ativo');\n    });\n  }\n  dropMenus.forEach((menu) => {\n    acoes.forEach((eventos) => {\n      menu.addEventListener(eventos, abrirMenu);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/dropMenu.js?");

/***/ }),

/***/ "./js1/module/fetchanimais.js":
/*!************************************!*\
  !*** ./js1/module/fetchanimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ infofetch)\n/* harmony export */ });\n/* harmony import */ var _animaNumero_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animaNumero.js */ \"./js1/module/animaNumero.js\");\n\n\nfunction infofetch() {\n  function addInfo(e) {\n    const h3 = e.especie;\n    const hastg = '#';\n    const h3selec = document.querySelector(hastg + h3);\n    const origemSpan = document.createElement('span');\n    const origemSpan1 = document.createElement('span');\n    const numerosNat = +e.natural;\n    origemSpan.classList.add('origem');\n    origemSpan.innerHTML = `- ${e.local}  <span data-numeros>${numerosNat}</span> </br> </br> - ${e.local2}  <span data-numeros>${+e.cativeiro}</span> `;\n\n    h3selec.appendChild(origemSpan);\n    h3selec.appendChild(origemSpan1);\n  }\n\n  async function puxarinfo(url) {\n    const infoAnimais = await fetch(url);\n    const animaisJson = await infoAnimais.json();\n    animaisJson.forEach((animal) => {\n      addInfo(animal);\n      (0,_animaNumero_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n  }\n  puxarinfo('./API/api.json');\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/fetchanimais.js?");

/***/ }),

/***/ "./js1/module/horarioFunc.js":
/*!***********************************!*\
  !*** ./js1/module/horarioFunc.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ funcionamento)\n/* harmony export */ });\nfunction funcionamento() {\n  const funcionamentos = document.querySelector('[data-semana]');\n  const funDias = funcionamentos.dataset.semana.split(',').map(Number);\n  const funHorario = funcionamentos.dataset.horario.split(',').map(Number);\n  const dataAgora = new Date();\n  const diaAtual = dataAgora.getDay();\n  const diaHora = dataAgora.getHours();\n  const funSemana = funDias.indexOf(diaAtual);\n  if (diaHora >= funHorario[0] && diaHora < funHorario[1] && funSemana > 0) {\n    funcionamentos.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/horarioFunc.js?");

/***/ }),

/***/ "./js1/module/menuMobile.js":
/*!**********************************!*\
  !*** ./js1/module/menuMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _clicouFora_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clicouFora.js */ \"./js1/module/clicouFora.js\");\n\n\nfunction menuMobile() {\n  const butonMenu = document.querySelector('[data-menu=\"buton\"]');\n  const listMenu = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touchstart'];\n  function abrirMenu() {\n    listMenu.classList.toggle('ativo');\n    butonMenu.classList.toggle('ativo');\n    (0,_clicouFora_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(listMenu, eventos, () => {\n      listMenu.classList.remove('ativo');\n      butonMenu.classList.remove('ativo');\n    });\n  }\n  if (butonMenu) {\n    abrirMenu();\n    eventos.forEach((event) => {\n      butonMenu.addEventListener(event, abrirMenu);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/menuMobile.js?");

/***/ }),

/***/ "./js1/module/modalLongin.js":
/*!***********************************!*\
  !*** ./js1/module/modalLongin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ modalInt)\n/* harmony export */ });\nfunction modalInt() {\n  const bntAbrir = document.querySelector('[data-modal=\"abrir\"]');\n  const btnFechar = document.querySelector('[data-modal=\"fechar\"]');\n  const containerModal = document.querySelector('[data-modal=\"container\"]');\n  const divLogin = containerModal.querySelector('div');\n  function abrirLogin(evennt) {\n    evennt.preventDefault();\n    containerModal.classList.add('ativo');\n    divLogin.classList.add('ativo');\n  }\n\n  function fecharLogin(event) {\n    event.preventDefault();\n    containerModal.classList.remove('ativo');\n    divLogin.classList.remove('ativo');\n  }\n  function clicarFora(event) {\n    if (event.target === this) {\n      fecharLogin(event);\n    }\n    // if (event.target === containerModal) {\n    //   fecharLogin(event)\n    // }\n  }\n  function teclaEsc(e) {\n    if (e.key === 'Escape') {\n      fecharLogin(e);\n    }\n  }\n  bntAbrir.addEventListener('click', abrirLogin);\n  btnFechar.addEventListener('click', fecharLogin);\n  containerModal.addEventListener('click', clicarFora);\n  window.addEventListener('keydown', teclaEsc);\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/modalLongin.js?");

/***/ }),

/***/ "./js1/module/navtab.js":
/*!******************************!*\
  !*** ./js1/module/navtab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ tabNav)\n/* harmony export */ });\nfunction tabNav() {\n  const tabmenu = document.querySelectorAll('[data-tab=\"menu\"] li');\n  const tabcontent = document.querySelectorAll('[data-tab=\"content\"] section');\n  function ative(index) {\n    tabcontent.forEach((itens) => {\n      itens.classList.remove('ativo');\n    });\n    const direcao = tabcontent[index].dataset.anima;\n    tabcontent[index].classList.add(direcao, 'ativo');\n  }\n  if (tabcontent && tabmenu) {\n    tabmenu.forEach((item, index) => {\n      item.addEventListener('click', () => {\n        ative(index);\n      });\n    });\n  }\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/navtab.js?");

/***/ }),

/***/ "./js1/module/suavescroll.js":
/*!***********************************!*\
  !*** ./js1/module/suavescroll.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ intScrollSuave)\n/* harmony export */ });\nfunction intScrollSuave() {\n  const linksInternos = document.querySelectorAll('[data-scroll=\"suave\"] a[href^=\"#\"]');\n\n  function scrollSuave(event) {\n    event.preventDefault();\n    const herfe = event.currentTarget.getAttribute('href');\n    const secao = document.querySelector(herfe);\n    const topo = secao.offsetTop;\n    window.scrollTo({\n      top: topo,\n      behavior: 'smooth',\n    });\n  }\n  if (linksInternos.length) {\n    // function scrollSuave2(event) {\n    //   event.preventDefault();\n    //   const herfe = event.currentTarget.getAttribute('href')\n    //   const secao = document.querySelector(herfe)\n    //   secao.scrollIntoView({\n    //     behavior: \"smooth\",\n    //     block: 'start',\n    //   })\n    //   //esse não precisa saber a distancia, apenas selecionar o elemento!\n    // }\n    linksInternos.forEach((link) => {\n      link.addEventListener('click', scrollSuave);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://projeto-1/./js1/module/suavescroll.js?");

/***/ }),

/***/ "./js1/script.js":
/*!***********************!*\
  !*** ./js1/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_navtab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/navtab.js */ \"./js1/module/navtab.js\");\n/* harmony import */ var _module_acodionn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/acodionn.js */ \"./js1/module/acodionn.js\");\n/* harmony import */ var _module_suavescroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/suavescroll.js */ \"./js1/module/suavescroll.js\");\n/* harmony import */ var _module_animapage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/animapage.js */ \"./js1/module/animapage.js\");\n/* harmony import */ var _module_modalLongin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/modalLongin.js */ \"./js1/module/modalLongin.js\");\n/* harmony import */ var _module_balonmap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/balonmap.js */ \"./js1/module/balonmap.js\");\n/* harmony import */ var _module_dropMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/dropMenu.js */ \"./js1/module/dropMenu.js\");\n/* harmony import */ var _module_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/menuMobile.js */ \"./js1/module/menuMobile.js\");\n/* harmony import */ var _module_horarioFunc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./module/horarioFunc.js */ \"./js1/module/horarioFunc.js\");\n/* harmony import */ var _module_fetchanimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module/fetchanimais.js */ \"./js1/module/fetchanimais.js\");\n/* eslint-disable import/extensions */\n\n // refatorado\n\n\n\n\n\n\n\n\n// refatorado animaNumero\n(0,_module_horarioFunc_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_module_acodionn_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_module_navtab_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_module_suavescroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_module_animapage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_module_modalLongin_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_module_balonmap_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_module_dropMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_module_menuMobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_module_fetchanimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n\n//# sourceURL=webpack://projeto-1/./js1/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js1/script.js");
/******/ 	
/******/ })()
;