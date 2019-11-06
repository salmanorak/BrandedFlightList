/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/flightListUtils.js":
/*!*******************************************!*\
  !*** ./src/components/flightListUtils.js ***!
  \*******************************************/
/*! exports provided: init, toogleFlightDetail, selectBrand, selectFlight, showSelectedFlightView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toogleFlightDetail\", function() { return toogleFlightDetail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectBrand\", function() { return selectBrand; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectFlight\", function() { return selectFlight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSelectedFlightView\", function() { return showSelectedFlightView; });\n/* harmony import */ var _js_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/utils.js */ \"./src/js/utils.js\");\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.js */ \"./src/data/data.js\");\n/* harmony import */ var _js_models_flight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/models/flight */ \"./src/js/models/flight.js\");\n\n\n\nvar slide = Object(_js_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"slide\"])();\n\nfunction init(flights, targetId) {\n  var targetElement = document.querySelector(\"#\".concat(targetId));\n  targetElement.innerHTML = createFlightList(flights);\n}\n\nfunction createFlightList(flights) {\n  var result = '';\n  flights.forEach(function (flight) {\n    result += createFlight(flight);\n  });\n  return result;\n}\n/*\nfunction createFlight(flight, brand) {\n\tconst flightItemTemplate = `<div class=\"flight-item\" data='${JSON.stringify(flight)}'>\n\t\t\t\t\t\t\t\t${brand ? '<span class=\"show-flight-list\">Uçuş değiştir</span>' : ''}\n\t\t\t\t\t\t\t\t<div class=\"summary\">\n\t\t\t\t\t\t\t\t\t<div class=\"flight-summary\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"from\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"time\">${flight.summary.departure.time}</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"port\">${flight.summary.departure.port}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"to\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"time\">${flight.summary.arrival.time}</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"port\">${flight.summary.arrival.port}</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"flight-logo\">${createAirlineLogo(flight.summary.carrierList)}</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"layover-port-list\">${createLayoverPort(flight.segments)}</div>\n\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"best-price\">\n\t\t\t\t\t\t\t\t\t\t${brand ? `<div class=\"brand\">${brand.name}</div>` : ''}\n\t\t\t\t\t\t\t\t\t\t${brand ? createPrice(brand.price) : createPrice(flight.price)}\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t${brand ? '' : '<div class=\"icon\"></div>'}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<span class=\"detail\">Uçuş Detayları</span>\n\t\t\t\t\t\t\t\t${brand ? '' : createCabinList(flight.cabinList)}\n\t\t\t\t\t\t\t</div>`;\n\treturn flightItemTemplate;\n}\n*/\n\n\nfunction createFlight(flight, brand) {\n  var flightItemTemplate = \"<div class=\\\"flight-item\\\" flightId='\".concat(flight.flightId, \"'>\\n\\t\\t\\t\\t\\t\\t\\t\\t\").concat(brand ? '<span class=\"show-flight-list\">Uçuş değiştir</span>' : '', \"\\n\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"summary\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"flight-summary\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"from\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"time\\\">\").concat(flight.summary.departure.time, \"</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"port\\\">\").concat(flight.summary.departure.port, \"</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"to\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"time\\\">\").concat(flight.summary.arrival.time, \"</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"port\\\">\").concat(flight.summary.arrival.port, \"</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"flight-logo\\\">\").concat(createAirlineLogo(flight.summary.carrierList), \"</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"layover-port-list\\\">\").concat(createLayoverPort(flight.segments), \"</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\\"best-price\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\").concat(brand ? \"<div class=\\\"brand\\\">\".concat(brand.name, \"</div>\") : '', \"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\").concat(brand ? createPrice(brand.price) : createPrice(flight.price), \"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\").concat(brand ? '' : '<div class=\"icon\"></div>', \"\\n\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t<span class=\\\"detail\\\">U\\xE7u\\u015F Detaylar\\u0131</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t\").concat(brand ? '' : createCabinList(flight.cabinList), \"\\n\\t\\t\\t\\t\\t\\t\\t</div>\");\n  return flightItemTemplate;\n}\n\nfunction createAirlineLogo(carrierList) {\n  var result = '';\n  carrierList.forEach(function (carierCode) {\n    var url = '';\n\n    switch (carierCode) {\n      case 'TK':\n        url = 'https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_tk.png';\n        break;\n\n      case 'AJ':\n        url = 'https://www.turkishairlines.com/theme/img/carrierairlines/carriercode_aj.png';\n        break;\n\n      case 'JB':\n        url = 'https://turkishairlines.ssl.cdn.sdlmedia.com/636686167032557807VY.png';\n        break;\n\n      default:\n        url = 'https://turkishairlines.ssl.cdn.sdlmedia.com/636686167032557807VY.png';\n        break;\n    }\n\n    result += \"<img class=\\\"segment-carrier-logo\\\" src=\\\"\".concat(url, \"\\\">\");\n  });\n  return result;\n}\n\nfunction createLayoverPort(segmenList) {\n  var portList = [];\n  var result = '';\n  var length = segmenList.length;\n  if (length === 1) return '<div class=\"direct\" style=\"left:50%\">Direkt</div>';\n\n  for (var i = 0; i < segmenList.length - 1; i++) {\n    var port = segmenList[i].arrival.port === segmenList[i + 1].departure.port ? segmenList[i].arrival.port : \"\".concat(segmenList[i].arrival.port, \" <i class=\\\"fas fa-long-arrow-alt-right\\\"></i> \").concat(segmenList[i + 1].departure.port);\n    portList.push(port);\n  }\n\n  portList.forEach(function (port, index) {\n    result += \"<div class=\\\"layover-port-item\\\" style=\\\"left:\".concat(100 / (portList.length + 1) * (index + 1), \"%\\\" >\").concat(port, \"</div>\");\n  });\n  return result;\n}\n\nfunction createCabinList(cabinList) {\n  var result = '<div class=\"cabin-list-container\" style=\"display:none\">';\n  cabinList.forEach(function (cabin, index) {\n    result += \"<div class=\\\"\".concat(cabin.name === 'Economy' ? 'eco' : 'bus', \"-cabin cabin\\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\\"cabin-info\\\">\").concat(cabin.name, \" Class</div>\\n\\t\\t\\t\\t\\t\\t\").concat(createBranList(cabin.brandList, index), \"\\n\\t\\t\\t\\t\\t</div>\");\n  });\n  return \"\".concat(result, \" </div>\");\n}\n\nfunction createBranList(brandList, cabinIndex) {\n  var result = '<div class=\"brand-list\">';\n  if (brandList && brandList.length <= 0) return '';\n  brandList.forEach(function (brand) {\n    result += \"<div class=\\\"brand-item\\\" brandId='\".concat(brand.name, \"' cabinIndex=\\\"\").concat(cabinIndex, \"\\\">\\n\\t\\t\\t\\t\\t\\t<div class=\\\"brand-name\\\">\\n\\t\\t\\t\\t\\t\\t\").concat(brand.name, \"\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\\"brand-price\\\">\\n\\t\\t\\t\\t\\t\\t\\t\").concat(createPrice(brand.price), \"\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t<div class=\\\"right-list\\\">\\n\\t\\t\\t\\t\\t\\t\\t\").concat(brand.price ? createRightList(brand.rightList) : '', \"\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t</div>\");\n  });\n  return \"\".concat(result, \"</div>\");\n}\n\nfunction createPrice(price) {\n  if (!price) return '<span class=\"full\">DOLU</span>';\n  return \"\\t<span class=\\\"amount\\\">\".concat(price.amount, \"</span>\\n\\t\\t\\t  \\t<span class=\\\"decimal\\\">\").concat(price.decimal, \"</span>\\n\\t\\t\\t\\t<span class=\\\"currency\\\">\").concat(price.currency, \"</span>\");\n}\n\nfunction createRightList(rightList) {\n  var result = '';\n  rightList.forEach(function (right) {\n    result += \"<span class=\\\"right-item\\\">\".concat(right, \"</span>\");\n  });\n  return result;\n}\n\nfunction toogleFlightDetail(e) {\n  var flightItem = e.currentTarget.parentElement;\n  var openFlight = document.querySelector('.flight-item.slideDown');\n  if (openFlight && openFlight !== flightItem) slide.up(openFlight.querySelector('.cabin-list-container'));\n  slide.toogle(flightItem.querySelector('.cabin-list-container'));\n}\n\nfunction selectBrand(e) {\n  var el = e.currentTarget;\n  var selectedBrand = el.attributes.brandId.value;\n  var selectedCabinIndex = el.attributes.cabinIndex.value;\n  el.dispatchEvent(new CustomEvent('brandSelected', {\n    bubbles: true,\n    detail: {\n      name: selectedBrand,\n      cabinIndex: selectedCabinIndex\n    }\n  }));\n}\n\nfunction selectFlight(e) {\n  var el = e.currentTarget;\n  var selectedFlightId = Number(el.attributes.flightId.value);\n  var flightSelected = new CustomEvent('flightSelected', {\n    bubbles: true,\n    detail: {\n      flightId: selectedFlightId,\n      brand: e.detail\n    }\n  });\n  el.dispatchEvent(flightSelected);\n}\n\nfunction showSelectedFlightView(e) {\n  var journey = e.currentTarget;\n  var selectedFlightHTML = journey.querySelector('.selected-flight');\n  var flight = Object(_js_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"findItemInArrayByProperty\"])(_data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"flightListData\"], 'flightId', e.detail.flightId);\n  var brand = Object(_js_utils_js__WEBPACK_IMPORTED_MODULE_0__[\"findItemInArrayByProperty\"])(flight.cabinList[e.detail.brand.cabinIndex].brandList, 'name', e.detail.brand.name);\n  selectedFlightHTML.innerHTML = createFlight(new _js_models_flight__WEBPACK_IMPORTED_MODULE_2__[\"Flight\"](flight), brand);\n  journey.querySelectorAll('.show-flight-list').forEach(function (item) {\n    item.addEventListener('click', showFlightList);\n  });\n  journey.classList.add('selected');\n}\n\nfunction showFlightList(e) {\n  e.currentTarget.parentElement.parentElement.parentElement.classList.remove('selected');\n}\n\n\n\n//# sourceURL=webpack:///./src/components/flightListUtils.js?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/css/main.scss?");

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/*! exports provided: flightListData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"flightListData\", function() { return flightListData; });\nvar flightListData = [{\n  flightId: 1,\n  segments: [{\n    flightNumber: 'TK1',\n    carrierCode: 'TK',\n    departure: {\n      port: 'IST',\n      date: '20.01.2020',\n      time: '12:00'\n    },\n    arrival: {\n      port: 'FRA',\n      date: '20.01.2020',\n      time: '14:00'\n    }\n  }],\n  price: {\n    amount: 250,\n    decimal: 99,\n    currency: 'TRY'\n  },\n  cabinList: [{\n    name: 'Economy',\n    brandList: [{\n      name: 'Eco FLY',\n      type: 'Economy',\n      price: {\n        amount: 250,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['10 kg kabin bagajı', '20 kg checkin bagajı']\n    }, {\n      name: 'Extra FLY',\n      type: 'Economy',\n      price: {\n        amount: 280,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['15 kg kabin bagajı', '25 kg checkin bagajı', 'ikram', 'ücretsiz koltuk seçimi', 'ücretsiz değişiklik', 'cezalı iade']\n    }, {\n      name: 'Premium FLY',\n      type: 'Economy',\n      price: {\n        amount: 352,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['20 kg kabin bagajı', '30 kg checkin bagajı', 'ikram', 'ücretsiz koltuk seçimi', 'ücretsiz değişiklik', 'cezasız iade']\n    }]\n  }, {\n    name: 'Business',\n    brandList: [{\n      name: 'Business',\n      type: 'Business',\n      price: {\n        amount: 452,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['20 kg kabin bagajı', '30 kg checkin bagajı', 'Özel ikram', 'ücretsiz koltuk seçimi', 'ücretsiz değişiklik', 'cezasız iade', 'business launch']\n    }]\n  }]\n}, {\n  flightId: 2,\n  segments: [{\n    flightNumber: 'TK2',\n    carrierCode: 'TK',\n    departure: {\n      port: 'IST',\n      date: '20.01.2020',\n      time: '14:00'\n    },\n    arrival: {\n      port: 'ADA',\n      date: '20.01.2020',\n      time: '17:00'\n    }\n  }, {\n    flightNumber: 'TK21',\n    carrierCode: 'AJ',\n    departure: {\n      port: 'ADA',\n      date: '20.01.2020',\n      time: '18:00'\n    },\n    arrival: {\n      port: 'SAW',\n      date: '20.01.2020',\n      time: '19:00'\n    }\n  }, {\n    flightNumber: 'TK22',\n    carrierCode: 'TK',\n    departure: {\n      port: 'IST',\n      date: '20.01.2020',\n      time: '20:00'\n    },\n    arrival: {\n      port: 'FRA',\n      date: '20.01.2020',\n      time: '22:00'\n    }\n  }],\n  price: {\n    amount: 220,\n    decimal: 99,\n    currency: 'TRY'\n  },\n  cabinList: [{\n    name: 'Economy',\n    brandList: [{\n      name: 'Eco FLY',\n      type: 'Economy',\n      price: {\n        amount: 220,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['10 kg kabin bagajı', '20 kg checkin bagajı']\n    }, {\n      name: 'Extra FLY',\n      type: 'Economy',\n      rightList: ['15 kg kabin bagajı', '25 kg checkin bagajı', 'ikram', 'ücretsiz koltuk seçimi', 'ücretsiz değişiklik', 'cezalı iade']\n    }, {\n      name: 'Premium FLY',\n      type: 'Economy',\n      price: {\n        amount: 332,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['20 kg kabin bagajı', '30 kg checkin bagajı', 'ikram', 'ücretsiz koltuk seçimi', 'ücretsiz değişiklik', 'cezasız iade']\n    }]\n  }, {\n    name: 'Business',\n    brandList: [{\n      name: 'Business',\n      type: 'Business',\n      price: {\n        amount: 422,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['20 kg kabin bagajı', '30 kg checkin bagajı', 'Özel ikram', 'ücretsiz koltuk seçimi', 'ücretsiz değişiklik', 'cezasız iade', 'business launch']\n    }]\n  }]\n}, {\n  flightId: 3,\n  segments: [{\n    flightNumber: '3',\n    carrierCode: 'TK',\n    departure: {\n      port: 'IST',\n      date: '20.01.2020',\n      time: '14:00'\n    },\n    arrival: {\n      port: 'TZX',\n      date: '20.01.2020',\n      time: '17:00'\n    }\n  }, {\n    flightNumber: '3',\n    carrierCode: 'AJ',\n    departure: {\n      port: 'TZX',\n      date: '20.01.2020',\n      time: '14:00'\n    },\n    arrival: {\n      port: 'ADA',\n      date: '20.01.2020',\n      time: '17:00'\n    }\n  }, {\n    flightNumber: '3',\n    carrierCode: 'JB',\n    departure: {\n      port: 'ADA',\n      date: '20.01.2020',\n      time: '14:00'\n    },\n    arrival: {\n      port: 'FRA',\n      date: '20.01.2020',\n      time: '17:00'\n    }\n  }],\n  price: {\n    amount: 220,\n    decimal: 99,\n    currency: 'TRY'\n  },\n  cabinList: [{\n    name: 'Economy',\n    brandList: [{\n      name: 'Eco FLY',\n      type: 'Economy',\n      price: {\n        amount: 220,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['10 kg kabin bagajı', '20 kg checkin bagajı']\n    }, {\n      name: 'Extra FLY',\n      type: 'Economy',\n      price: {\n        amount: 260,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['15 kg kabin bagajı', '25 kg checkin bagajı', 'ikram', 'ücretsiz koltuk seçimi', 'ücretsiz değişiklik', 'cezalı iade']\n    }, {\n      name: 'Premium FLY',\n      type: 'Economy',\n      price: {\n        amount: 332,\n        decimal: 99,\n        currency: 'TRY'\n      },\n      rightList: ['20 kg kabin bagajı', '30 kg checkin bagajı', 'ikram', 'ücretsiz koltuk seçimi', 'ücretsiz değişiklik', 'cezasız iade']\n    }]\n  }]\n}];\n\n//# sourceURL=webpack:///./src/data/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/data.js */ \"./src/data/data.js\");\n/* harmony import */ var _components_flightListUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/flightListUtils */ \"./src/components/flightListUtils.js\");\n/* harmony import */ var _js_models_flight_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/models/flight.js */ \"./src/js/models/flight.js\");\n\n\n\n\nvar flights = _data_data_js__WEBPACK_IMPORTED_MODULE_1__[\"flightListData\"].map(function (flight) {\n  return new _js_models_flight_js__WEBPACK_IMPORTED_MODULE_3__[\"Flight\"](flight);\n});\nObject(_components_flightListUtils__WEBPACK_IMPORTED_MODULE_2__[\"init\"])(flights, 'flight-list'); //**** Event Handling ****//\n\nvar flightSummaryAll = document.querySelectorAll('.summary');\nflightSummaryAll.forEach(function (flightSummary) {\n  if (flightSummary) flightSummary.addEventListener('click', _components_flightListUtils__WEBPACK_IMPORTED_MODULE_2__[\"toogleFlightDetail\"]);\n});\nvar flightListHTML = document.querySelectorAll('.flight-item');\nflightListHTML.forEach(function (flight) {\n  if (flight) flight.addEventListener('brandSelected', _components_flightListUtils__WEBPACK_IMPORTED_MODULE_2__[\"selectFlight\"]);\n});\nvar brandList = document.querySelectorAll('.brand-item');\nbrandList.forEach(function (brand) {\n  if (brand) brand.addEventListener('click', _components_flightListUtils__WEBPACK_IMPORTED_MODULE_2__[\"selectBrand\"]);\n});\nvar journeyList = document.querySelectorAll('.journey');\njourneyList.forEach(function (journey) {\n  if (journey) journey.addEventListener('flightSelected', _components_flightListUtils__WEBPACK_IMPORTED_MODULE_2__[\"showSelectedFlightView\"]);\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/models/flight.js":
/*!*********************************!*\
  !*** ./src/js/models/flight.js ***!
  \*********************************/
/*! exports provided: Flight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Flight\", function() { return Flight; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Price = function Price(price) {\n  _classCallCheck(this, Price);\n\n  this.amount = price.amount;\n  this.decimal = price.decimal;\n  this.currency = price.currency;\n};\n\nvar Brand = function Brand(brand) {\n  _classCallCheck(this, Brand);\n\n  this.name = brand.name;\n  this.type = brand.type;\n  this.price = brand.price ? new Price(brand.price) : '';\n  this.rightList = brand.rightList;\n};\n\nvar Cabin = function Cabin(cabin) {\n  _classCallCheck(this, Cabin);\n\n  this.name = cabin.name;\n  this.brandList = cabin.brandList.map(function (brand) {\n    return new Brand(brand);\n  });\n};\n\nvar Segment = function Segment(_ref) {\n  var flightNumber = _ref.flightNumber,\n      carrierCode = _ref.carrierCode,\n      departure = _ref.departure,\n      arrival = _ref.arrival;\n\n  _classCallCheck(this, Segment);\n\n  // destruction Object\n  this.flightNumber = flightNumber;\n  this.carrierCode = carrierCode;\n  this.departure = departure;\n  this.arrival = arrival;\n};\n\nvar Flight = function Flight(flightData) {\n  _classCallCheck(this, Flight);\n\n  this.flightId = flightData.flightId;\n  this.segments = flightData.segments.map(function (segment) {\n    return new Segment(segment);\n  });\n  this.price = new Price(flightData.price);\n  this.summary = {\n    carrierList: flightData.segments.map(function (segment) {\n      return segment.carrierCode;\n    }),\n    departure: flightData.segments[0].departure,\n    arrival: flightData.segments[flightData.segments.length - 1].arrival\n  };\n  this.cabinList = flightData.cabinList.map(function (cabin) {\n    return new Cabin(cabin);\n  });\n};\n\n//# sourceURL=webpack:///./src/js/models/flight.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: slide, findItemInArrayByProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slide\", function() { return slide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findItemInArrayByProperty\", function() { return findItemInArrayByProperty; });\nfunction slide() {\n  var up = function up(target) {\n    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n    target.style.transitionProperty = 'height, margin, padding';\n    target.style.transitionDuration = \"\".concat(duration, \"ms\");\n    target.style.boxSizing = 'border-box';\n    target.style.height = \"\".concat(target.offsetHeight, \"px\");\n    target.offsetHeight;\n    target.style.overflow = 'hidden';\n    target.style.height = 0;\n    target.style.paddingTop = 0;\n    target.style.paddingBottom = 0;\n    target.style.marginTop = 0;\n    target.style.marginBottom = 0;\n    window.setTimeout(function () {\n      target.style.display = 'none';\n      target.style.removeProperty('height');\n      target.style.removeProperty('padding-top');\n      target.style.removeProperty('padding-bottom');\n      target.style.removeProperty('margin-top');\n      target.style.removeProperty('margin-bottom');\n      target.style.removeProperty('overflow');\n      target.style.removeProperty('transition-duration');\n      target.style.removeProperty('transition-property');\n    }, duration);\n    target.parentElement.classList.remove('slideDown');\n  };\n\n  var down = function down(target) {\n    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n    target.style.removeProperty('display');\n    var display = window.getComputedStyle(target).display;\n\n    if (display === 'none') {\n      display = 'flex';\n    }\n\n    target.style.display = display;\n    var height = target.offsetHeight;\n    target.style.overflow = 'hidden';\n    target.style.height = 0;\n    target.style.paddingTop = 0;\n    target.style.paddingBottom = 0;\n    target.style.marginTop = 0;\n    target.style.marginBottom = 0;\n    target.offsetHeight;\n    target.style.boxSizing = 'border-box';\n    target.style.transitionProperty = 'height, margin, padding';\n    target.style.transitionDuration = \"\".concat(duration, \"ms\");\n    target.style.height = \"\".concat(height, \"px\");\n    target.style.removeProperty('padding-top');\n    target.style.removeProperty('padding-bottom');\n    target.style.removeProperty('margin-top');\n    target.style.removeProperty('margin-bottom');\n    window.setTimeout(function () {\n      target.style.removeProperty('height');\n      target.style.removeProperty('overflow');\n      target.style.removeProperty('transition-duration');\n      target.style.removeProperty('transition-property');\n    }, duration);\n    target.parentElement.classList.add('slideDown');\n  };\n\n  var toggle = function toggle(target) {\n    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;\n\n    if (window.getComputedStyle(target).display === 'none') {\n      return down(target, duration);\n    }\n\n    return up(target, duration);\n  };\n\n  return {\n    up: up,\n    down: down,\n    toogle: toggle\n  };\n}\n\nfunction findItemInArrayByProperty(arr, property, value) {\n  return arr.find(function (item) {\n    return item[property] === value;\n  });\n}\n\n\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });