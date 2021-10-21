/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var VNUG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entities/request/RequestRibbon.ts":
/*!***********************************************!*\
  !*** ./src/entities/request/RequestRibbon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RequestRibbon\": () => (/* binding */ RequestRibbon)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass RequestRibbon {\r\n    static ApproveClicked(formContext) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const result = yield Xrm.Navigation.openConfirmDialog({\r\n                title: \"Approval Confirmation\",\r\n                text: \"Are you sure you want to approve this request?\",\r\n            });\r\n            if (!result.confirmed)\r\n                return;\r\n            Xrm.Utility.showProgressIndicator(\"Approving request...\");\r\n            try {\r\n                const requestid = formContext.data.entity.getId();\r\n                Xrm.WebApi.updateRecord(\"vnug_request\", requestid, { statuscode: 100000001 });\r\n                Xrm.Utility.closeProgressIndicator();\r\n            }\r\n            catch (ex) {\r\n                Xrm.Utility.closeProgressIndicator();\r\n                Xrm.Navigation.openErrorDialog({ details: ex, message: `Failed to approve the request: ${ex.message}` });\r\n            }\r\n        });\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50aXRpZXMvcmVxdWVzdC9SZXF1ZXN0UmliYm9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNLGFBQWE7SUFDeEIsTUFBTSxDQUFPLGNBQWMsQ0FBQyxXQUE0Qjs7WUFDdEQsTUFBTSxNQUFNLEdBQUcsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDO2dCQUNwRCxLQUFLLEVBQUUsdUJBQXVCO2dCQUM5QixJQUFJLEVBQUUsZ0RBQWdEO2FBQ3ZELENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztnQkFBRSxPQUFPO1lBRTlCLEdBQUcsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUMxRCxJQUFJO2dCQUNGLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsU0FBUyxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQzlFLEdBQUcsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUN0QztZQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNYLEdBQUcsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDckMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQzthQUMxRztRQUNILENBQUM7S0FBQTtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vVk5VRy5SZXF1ZXN0TWFuYWdlbWVudC8uL3NyYy9lbnRpdGllcy9yZXF1ZXN0L1JlcXVlc3RSaWJib24udHM/NDY0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUmVxdWVzdFJpYmJvbiB7XHJcbiAgc3RhdGljIGFzeW5jIEFwcHJvdmVDbGlja2VkKGZvcm1Db250ZXh0OiBYcm0uRm9ybUNvbnRleHQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFhybS5OYXZpZ2F0aW9uLm9wZW5Db25maXJtRGlhbG9nKHtcclxuICAgICAgdGl0bGU6IFwiQXBwcm92YWwgQ29uZmlybWF0aW9uXCIsXHJcbiAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGFwcHJvdmUgdGhpcyByZXF1ZXN0P1wiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFyZXN1bHQuY29uZmlybWVkKSByZXR1cm47XHJcblxyXG4gICAgWHJtLlV0aWxpdHkuc2hvd1Byb2dyZXNzSW5kaWNhdG9yKFwiQXBwcm92aW5nIHJlcXVlc3QuLi5cIik7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0aWQgPSBmb3JtQ29udGV4dC5kYXRhLmVudGl0eS5nZXRJZCgpO1xyXG4gICAgICBYcm0uV2ViQXBpLnVwZGF0ZVJlY29yZChcInZudWdfcmVxdWVzdFwiLCByZXF1ZXN0aWQsIHsgc3RhdHVzY29kZTogMTAwMDAwMDAxIH0pO1xyXG4gICAgICBYcm0uVXRpbGl0eS5jbG9zZVByb2dyZXNzSW5kaWNhdG9yKCk7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICBYcm0uVXRpbGl0eS5jbG9zZVByb2dyZXNzSW5kaWNhdG9yKCk7XHJcbiAgICAgIFhybS5OYXZpZ2F0aW9uLm9wZW5FcnJvckRpYWxvZyh7IGRldGFpbHM6IGV4LCBtZXNzYWdlOiBgRmFpbGVkIHRvIGFwcHJvdmUgdGhlIHJlcXVlc3Q6ICR7ZXgubWVzc2FnZX1gIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/entities/request/RequestRibbon.ts\n");

/***/ }),

/***/ "./src/entries/RequestLibrary.ts":
/*!***************************************!*\
  !*** ./src/entries/RequestLibrary.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RequestRibbon\": () => (/* reexport safe */ _entities_request_RequestRibbon__WEBPACK_IMPORTED_MODULE_0__.RequestRibbon)\n/* harmony export */ });\n/* harmony import */ var _entities_request_RequestRibbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/request/RequestRibbon */ \"./src/entities/request/RequestRibbon.ts\");\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cmllcy9SZXF1ZXN0TGlicmFyeS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFrRSIsInNvdXJjZXMiOlsid2VicGFjazovL1ZOVUcuUmVxdWVzdE1hbmFnZW1lbnQvLi9zcmMvZW50cmllcy9SZXF1ZXN0TGlicmFyeS50cz8zOWM5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IFJlcXVlc3RSaWJib24gfSBmcm9tIFwiLi4vZW50aXRpZXMvcmVxdWVzdC9SZXF1ZXN0UmliYm9uXCI7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/entries/RequestLibrary.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entries/RequestLibrary.ts");
/******/ 	(VNUG = typeof VNUG === "undefined" ? {} : VNUG).RequestManagement = __webpack_exports__;
/******/ 	
/******/ })()
;