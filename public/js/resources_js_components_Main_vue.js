(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Main_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalComponent */ "./resources/js/components/ModalComponent.vue");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Main",
  components: {
    ModalComponent: _ModalComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      deadline: '2022-12-03 14:00:00'
    };
  },
  mounted: function mounted() {
    console.log('main mounted');
    console.log(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(this.deadline));
  },
  methods: {
    dayjs: (dayjs__WEBPACK_IMPORTED_MODULE_1___default()),
    showModal: function showModal() {
      this.$refs.modal.showModal();
    }
  },
  computed: {
    daysLeft: function daysLeft() {
      return Math.abs(dayjs__WEBPACK_IMPORTED_MODULE_1___default()().diff(this.deadline, 'days'));
    },
    hoursLeft: function hoursLeft() {
      return Math.abs(dayjs__WEBPACK_IMPORTED_MODULE_1___default()().diff(this.deadline, 'hours') / 24);
    },
    minutesLeft: function minutesLeft() {
      return Math.abs(dayjs__WEBPACK_IMPORTED_MODULE_1___default()().diff(this.deadline, 'minute') / 60 / 24);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ModalComponent",
  data: function data() {
    return {
      isVisible: false,
      form: {},
      errors: []
    };
  },
  computed: {
    getForm: function getForm() {
      return {
        email: '',
        fio: ''
      };
    }
  },
  methods: {
    showModal: function showModal() {
      this.form = JSON.parse(JSON.stringify(this.getForm));
      this.isVisible = true;
    },
    hideModal: function hideModal() {
      this.isVisible = false;
      this.$emit('closed');
    },
    sendRequest: function sendRequest() {
      var _this = this;
      axios.post('api/public/barcode/generate', this.form).then(function (res) {
        console.log(res);
      })["catch"](function (err) {
        _this.errors = err.response.data.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.error_field{\n    border: 1px solid indianred;\n}\n.form-group {\n    margin-bottom: 20px;\n}\n.form-group:last-child {\n    margin-bottom: 0;\n}\n.dialog {\n    left: 0px !important;\n    top: 0px !important;\n    height: 100vh;\n    width: 100vw;\n    position: fixed;\n    margin: 0 !important;\n    padding: 0 !important;\n}\n.overlay {\n    position: fixed;\n    height: 100vh;\n    width: 100vw;\n    top: 0;\n    left: 0;\n    z-index: 99;\n    background-color: black;\n    opacity: 0.4;\n}\n.content {\n    z-index: 101;\n}\n.modal_card {\n    background-color: white;\n    border-radius: 15px;\n    padding: 20px;\n    z-index: 100;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/img/icon-1.svg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/icon-1.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "/images/icon-1.svg?f1d95a604fada157fef9997232313cb6";

/***/ }),

/***/ "./resources/js/assets/img/icon-2.svg":
/*!********************************************!*\
  !*** ./resources/js/assets/img/icon-2.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "/images/icon-2.svg?7de535efa0880f40cb0857bd7ffaf8b4";

/***/ }),

/***/ "./resources/js/assets/img/main-img.png":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/main-img.png ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/images/main-img.png?c965037941d1fcaab2cce2c6ab862437";

/***/ }),

/***/ "./resources/js/assets/img/pr-1.svg":
/*!******************************************!*\
  !*** ./resources/js/assets/img/pr-1.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/pr-1.svg?6955b8535d6b45b295d447fc80587e65";

/***/ }),

/***/ "./resources/js/assets/img/pr-2.svg":
/*!******************************************!*\
  !*** ./resources/js/assets/img/pr-2.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/pr-2.svg?b50e79f1f0e255fa0fcf4c887edce609";

/***/ }),

/***/ "./resources/js/assets/img/pr-3.svg":
/*!******************************************!*\
  !*** ./resources/js/assets/img/pr-3.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/pr-3.svg?eca87cd77ff974ac6d443a34daf2715d";

/***/ }),

/***/ "./resources/js/assets/img/pr-4.svg":
/*!******************************************!*\
  !*** ./resources/js/assets/img/pr-4.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/pr-4.svg?e0a63a38b438e8548f64eea6b1274c96";

/***/ }),

/***/ "./resources/js/assets/img/sp-1.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/sp-1.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/sp-1.png?41c32ed11ae5992e1f17ea18509ff5c3";

/***/ }),

/***/ "./resources/js/assets/img/sp-2.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/sp-2.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/sp-2.png?b6f0b7c6497f4bf83886ed481980081a";

/***/ }),

/***/ "./resources/js/assets/img/sp-3.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/sp-3.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/sp-3.png?4698e901338e5a39189882423b9e8c5f";

/***/ }),

/***/ "./resources/js/assets/img/sp-4.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/sp-4.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/sp-4.png?02a802f357457e2614708379441c0793";

/***/ }),

/***/ "./resources/js/assets/img/sp-5.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/sp-5.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/sp-5.png?a99ac204a235772896da63011ed6f4ed";

/***/ }),

/***/ "./resources/js/assets/img/sp-6.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/sp-6.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/sp-6.png?8c11d028472a71b3d1fe0cd3300e1e8b";

/***/ }),

/***/ "./resources/js/assets/img/sp-7.png":
/*!******************************************!*\
  !*** ./resources/js/assets/img/sp-7.png ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/sp-7.png?41c32ed11ae5992e1f17ea18509ff5c3";

/***/ }),

/***/ "./resources/js/assets/img/star.svg":
/*!******************************************!*\
  !*** ./resources/js/assets/img/star.svg ***!
  \******************************************/
/***/ ((module) => {

module.exports = "/images/star.svg?552e8fb9fac49709fd78531a3478739e";

/***/ }),

/***/ "./resources/js/assets/img/stickers.svg":
/*!**********************************************!*\
  !*** ./resources/js/assets/img/stickers.svg ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "/images/stickers.svg?de1df4db9eb1acf12ba15da22d35a13f";

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/Main.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Main.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Main_vue_vue_type_template_id_b9c20fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=b9c20fb8&scoped=true& */ "./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/components/Main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_b9c20fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Main_vue_vue_type_template_id_b9c20fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "b9c20fb8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Main.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=template&id=4b2d100a& */ "./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&");
/* harmony import */ var _ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _ModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/ModalComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Main.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Main.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_b9c20fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_b9c20fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_b9c20fb8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Main.vue?vue&type=template&id=b9c20fb8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&scoped=true&");


/***/ }),

/***/ "./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_4b2d100a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ModalComponent.vue?vue&type=template&id=4b2d100a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Main.vue?vue&type=template&id=b9c20fb8&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "main",
    { staticClass: "relative-block" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "main" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "main__inner" }, [
            _c("div", { staticClass: "main__wrap" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "button", on: { click: _vm.showModal } },
                [_vm._v("Қатысу")]
              ),
            ]),
            _vm._v(" "),
            _vm._m(2),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _vm._m(6),
      _vm._v(" "),
      _vm._m(7),
      _vm._v(" "),
      _vm._m(8),
      _vm._v(" "),
      _c("section", { staticClass: "request" }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "request__inner" }, [
            _c("p", [
              _vm._v("Билеттер саны шектеулі, өз мүмкіндігінді жіберіп алма!"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "request__time" }, [
              _c("div", [
                _c("p", [_vm._v(_vm._s(_vm.daysLeft))]),
                _vm._v(" "),
                _c("p", [_vm._v("күндер")]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v(_vm._s(_vm.hoursLeft))]),
                _vm._v(" "),
                _c("p", [_vm._v("сағат")]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v(_vm._s(_vm.minutesLeft))]),
                _vm._v(" "),
                _c("p", [_vm._v("минут")]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "button",
              { staticClass: "button", on: { click: _vm.showModal } },
              [_vm._v("Қатысу")]
            ),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("modal-component", { ref: "modal" }),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("header", { staticClass: "header" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "header__inner" }, [
          _c("p", [_vm._v("3 желтоқсан 2022, 14:00")]),
          _vm._v(" "),
          _c("p", [_vm._v("Бокейхана, 1 көшесі")]),
          _vm._v(" "),
          _c("p", [_vm._v("Назарбаев орталығының концерттік залы")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", [_vm._v("Özımız otyryp кäsıp jasaiyq")]),
      _vm._v(" "),
      _c("p", [_vm._v("Алғаш қазақ тіліңдегі ауқымды IT жоба!")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "main__img" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! ../assets/img/main-img.png */ "./resources/js/assets/img/main-img.png"), alt: "" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "about" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "about__inner" }, [
          _c("div", [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../assets/img/star.svg */ "./resources/js/assets/img/star.svg"), alt: "" },
            }),
            _vm._v(" "),
            _c("p", [_vm._v("10+ өзекті мәселені көтеретін спикерлер")]),
          ]),
          _vm._v(" "),
          _c("div", [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../assets/img/star.svg */ "./resources/js/assets/img/star.svg"), alt: "" },
            }),
            _vm._v(" "),
            _c("p", [_vm._v("1500+ қатысушылар")]),
          ]),
          _vm._v(" "),
          _c("div", [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../assets/img/star.svg */ "./resources/js/assets/img/star.svg"), alt: "" },
            }),
            _vm._v(" "),
            _c("p", [_vm._v("6 ойды қозғайтын тематикалық бағдарлама")]),
          ]),
          _vm._v(" "),
          _c("div", [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../assets/img/star.svg */ "./resources/js/assets/img/star.svg"), alt: "" },
            }),
            _vm._v(" "),
            _c("p", [
              _vm._v("Көңіл көтеретін бағдарлама және сыйлықтар науқаны"),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "why" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "why__inner" }, [
          _c("div", { staticClass: "title" }, [
            _vm._v("StartupHana өзектілігі неде?"),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "why__wrap" }, [
            _c("div", { staticClass: "why__item" }, [
              _vm._v(
                "\n                        Қазаұстан аумағында өскелең ұрпақтың арасында қазақ тілді\n                        IT-кәсіпкерлер қауымын ұйымдастыру\n                    "
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "why__img" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/stickers.svg */ "./resources/js/assets/img/stickers.svg"), alt: "" },
              }),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "why__items" }, [
              _c("div", { staticClass: "why__item" }, [
                _vm._v(
                  "\n                            IT-кәсіпкерлік мәдениетін жаңа деңгейге шығару\n                        "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "why__item" }, [
                _vm._v(
                  "\n                            Жас кәсіпкерлерге жан-жақты көмек көрсету: жобаның басталуынан\n                            өркендеуіне дейін\n                        "
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "speakers" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "speakers__inner" }, [
          _c("div", { staticClass: "title" }, [_vm._v("Спикерлер")]),
          _vm._v(" "),
          _c("div", { staticClass: "speakers__items" }, [
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-1.png */ "./resources/js/assets/img/sp-1.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Robert Fox")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v(" Purus nunc donec tortor aliquam nunc, non nec "),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-2.png */ "./resources/js/assets/img/sp-2.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Wade Warren")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Enim nulla quam venenatis neque sit elit amet"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-3.png */ "./resources/js/assets/img/sp-3.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Jenny Wilson")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Vel cras aenean pretium tortor posuere molestie et"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-4.png */ "./resources/js/assets/img/sp-4.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Jenny Wilson")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Vel cras aenean pretium tortor posuere molestie et"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-5.png */ "./resources/js/assets/img/sp-5.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Jenny Wilson")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Vel cras aenean pretium tortor posuere molestie et"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-6.png */ "./resources/js/assets/img/sp-6.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Jenny Wilson")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Vel cras aenean pretium tortor posuere molestie et"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-7.png */ "./resources/js/assets/img/sp-7.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Jenny Wilson")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Vel cras aenean pretium tortor posuere molestie et"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-1.png */ "./resources/js/assets/img/sp-1.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Jenny Wilson")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Vel cras aenean pretium tortor posuere molestie et"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-2.png */ "./resources/js/assets/img/sp-2.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Jenny Wilson")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Vel cras aenean pretium tortor posuere molestie et"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "speakers__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/sp-3.png */ "./resources/js/assets/img/sp-3.png"), alt: "" },
              }),
              _vm._v(" "),
              _c("div", [
                _c("p", [_vm._v("Jenny Wilson")]),
                _vm._v(" "),
                _c("span", [
                  _vm._v("Vel cras aenean pretium tortor posuere molestie et"),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "plan" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "plan__inner" }, [
          _c("div", { staticClass: "title" }, [_vm._v("Бағдарламасы")]),
          _vm._v(" "),
          _c("div", { staticClass: "plan__items" }, [
            _c("div", { staticClass: "plan__item" }, [
              _c("div", [_vm._v("12:00 - 14:00")]),
              _vm._v(" "),
              _c("div", [_vm._v("Тіркелу")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "plan__item" }, [
              _c("div", [_vm._v("14:30")]),
              _vm._v(" "),
              _c("div", [_vm._v("Басталуы")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "plan__item" }, [
              _c("div", [_vm._v("14:30")]),
              _vm._v(" "),
              _c("div", [
                _c("span", [_vm._v("Oilan")]),
                _vm._v(" бағдарламасы"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "plan__item" }, [
              _c("div", [_vm._v("15:00")]),
              _vm._v(" "),
              _c("div", [
                _c("span", [_vm._v("Basta")]),
                _vm._v(" бағдарламасы"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "plan__item" }, [
              _c("div", [_vm._v("15:30")]),
              _vm._v(" "),
              _c("div", [
                _c("span", [_vm._v("Jasa")]),
                _vm._v(" бағдарламасы"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "plan__item" }, [
              _c("div", [_vm._v("16:00")]),
              _vm._v(" "),
              _c("div", [
                _c("span", [_vm._v("Toqtama")]),
                _vm._v(" бағдарламасы"),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "plan__item" }, [
              _c("div", [_vm._v("17:00")]),
              _vm._v(" "),
              _c("div", [_vm._v("Аяқталуы")]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "prize" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "prize__inner" }, [
          _c("div", { staticClass: "title" }, [_vm._v("Сауықтыру кеші")]),
          _vm._v(" "),
          _c("div", { staticClass: "prize__items" }, [
            _c("div", { staticClass: "prize__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/pr-1.svg */ "./resources/js/assets/img/pr-1.svg"), alt: "" },
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Ой мен рухты дамытатын контент")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "prize__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/pr-2.svg */ "./resources/js/assets/img/pr-2.svg"), alt: "" },
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Қазақ тілді IT әуесқойлар қауымдастығы")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "prize__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/pr-3.svg */ "./resources/js/assets/img/pr-3.svg"), alt: "" },
              }),
              _vm._v(" "),
              _c("p", [_vm._v("Байқаулар мен сыйлықтар ұтысы!")]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "prize__item" }, [
              _c("img", {
                attrs: { src: __webpack_require__(/*! ../assets/img/pr-4.svg */ "./resources/js/assets/img/pr-4.svg"), alt: "" },
              }),
              _vm._v(" "),
              _c("p", [
                _vm._v("Astana Hub оқу бағдарламалары бойынша кеңестер"),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "contacts" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "contacts__inner" }, [
          _c("div", { staticClass: "contacts__info" }, [
            _c("p", [
              _vm._v(
                "\n                        Конференция Астана қаласы «Назарбаев орталығының концерттік\n                        залы» кешенінде өтеді\n                    "
              ),
            ]),
            _vm._v(" "),
            _c("div", [
              _c("div", [
                _c("img", {
                  attrs: { src: __webpack_require__(/*! ../assets/img/icon-1.svg */ "./resources/js/assets/img/icon-1.svg"), alt: "" },
                }),
                _vm._v(" "),
                _c("span", [_vm._v(" 3 желтоқсан 2022, 14:00 ")]),
              ]),
              _vm._v(" "),
              _c("div", [
                _c("img", {
                  attrs: { src: __webpack_require__(/*! ../assets/img/icon-2.svg */ "./resources/js/assets/img/icon-2.svg"), alt: "" },
                }),
                _vm._v(" "),
                _c("span", [_vm._v("Бокейхана, 1 көшесі ")]),
              ]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "contacts__maps" }, [
            _c("iframe", {
              staticStyle: { border: "0" },
              attrs: {
                src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.304792289789!2d71.43098551571032!3d51.102836448022984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4245844159552149%3A0xd2d83be83443e20!2z0YPQuy4g0JDQu9C40YXQsNC90LAg0LHQvtC60LXQudGF0LDQvdCwIDEsINCQ0YHRgtCw0L3QsCAwMjAwMDA!5e0!3m2!1sru!2skz!4v1667624266101!5m2!1sru!2skz",
                allowfullscreen: "",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
              },
            }),
          ]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isVisible && _vm.form
    ? _c("div", { staticClass: "dialog" }, [
        _c(
          "div",
          {
            staticClass: "h-100 content",
            staticStyle: {
              "text-align": "center",
              "background-color": "rgba(0, 0, 0, 0.65)",
            },
          },
          [
            _c(
              "div",
              {
                staticClass:
                  "row align-items-center justify-content-center h-100",
              },
              [
                _c("div", { staticClass: "col-sm-4 col-10 modal_card" }, [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticStyle: {
                          float: "left",
                          color: "black!important",
                        },
                        attrs: { for: "email" },
                      },
                      [_vm._v("Аты-жөні")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.fio,
                          expression: "form.fio",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_field: _vm.errors.fio },
                      attrs: {
                        type: "text",
                        id: "email",
                        placeholder: "Аты-жөні",
                      },
                      domProps: { value: _vm.form.fio },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "fio", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "label",
                      {
                        staticStyle: {
                          float: "left",
                          color: "black!important",
                        },
                        attrs: { for: "email" },
                      },
                      [_vm._v("E-mail адресіңіз")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.form.email,
                          expression: "form.email",
                        },
                      ],
                      staticClass: "form-control",
                      class: { error_field: _vm.errors.email },
                      attrs: {
                        type: "text",
                        id: "email",
                        placeholder: "mail@mail.ru",
                      },
                      domProps: { value: _vm.form.email },
                      on: {
                        input: function ($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.form, "email", $event.target.value)
                        },
                      },
                    }),
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "div",
                      {
                        staticClass: "btn btn-info",
                        staticStyle: { padding: "0 10px" },
                        on: { click: _vm.sendRequest },
                      },
                      [_vm._v("Жіберу")]
                    ),
                  ]),
                ]),
              ]
            ),
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "overlay", on: { click: _vm.hideModal } }),
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);