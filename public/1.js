(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/components/Button/Button.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/react/components/Button/Button.css ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Button {\n    border: none;\n    border-radius: .5rem;\n    padding: .8rem;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: white;\n    background-color: var(--color-tertiary);\n}\n\n.Button:hover {\n    -webkit-filter: brightness(85%);\n            filter: brightness(85%);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/containers/Chat/Chat.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/react/containers/Chat/Chat.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Chat {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/containers/Chat/MessageBubble/MessageBubble.css":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/react/containers/Chat/MessageBubble/MessageBubble.css ***!
  \************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".MessageBubble {\n    color: var(--color-message-text);\n    border-radius: .8rem;\n    margin: .5rem 1rem;\n    padding: 1rem;\n    max-width: 40%;\n    display: flex;\n    word-break: break-word;\n}\n\n.BotMessage {\n    background-color: white;\n    align-self: flex-start;\n}\n\n.UserMessage {\n    background-color: var(--color-user-message);\n    justify-content: flex-end;\n    align-self: flex-end;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/containers/Chat/MessageField/MessageField.css":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/react/containers/Chat/MessageField/MessageField.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".MessageField {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: var(--message-field-margin) 0;\n    height: var(--message-field-height);\n}\n\n.MessageField textarea {\n    flex: 1;\n    border-radius: .4rem;\n    margin: 0 1rem;\n    padding: 1rem;\n    color: var(--color-font);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/containers/Chat/Messages/Messages.css":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/react/containers/Chat/Messages/Messages.css ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Messages {\n    height: calc(100vh - var(--toolbar-height) - var(--message-field-height) - (2 * var(--message-field-margin)));\n    display: flex;\n    flex-flow: column nowrap;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n\n.Messages > :first-child {\n    margin-top: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/react/components/Button/Button.css":
/*!*********************************************************!*\
  !*** ./resources/js/react/components/Button/Button.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Button.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/components/Button/Button.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/react/components/Button/Button.js":
/*!********************************************************!*\
  !*** ./resources/js/react/components/Button/Button.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.css */ "./resources/js/react/components/Button/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_1__);



var Button = function Button(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'submit' : _ref$type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: type,
    className: "Button",
    onClick: onClick
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./resources/js/react/containers/Chat/Chat.css":
/*!*****************************************************!*\
  !*** ./resources/js/react/containers/Chat/Chat.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Chat.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/containers/Chat/Chat.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/react/containers/Chat/Chat.js":
/*!****************************************************!*\
  !*** ./resources/js/react/containers/Chat/Chat.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Messages_Messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Messages/Messages */ "./resources/js/react/containers/Chat/Messages/Messages.js");
/* harmony import */ var _Chat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chat.css */ "./resources/js/react/containers/Chat/Chat.css");
/* harmony import */ var _Chat_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Chat_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MessageField_MessageField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageField/MessageField */ "./resources/js/react/containers/Chat/MessageField/MessageField.js");





var Chat = function Chat(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Chat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Messages_Messages__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageField_MessageField__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./resources/js/react/containers/Chat/MessageBubble/MessageBubble.css":
/*!****************************************************************************!*\
  !*** ./resources/js/react/containers/Chat/MessageBubble/MessageBubble.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./MessageBubble.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/containers/Chat/MessageBubble/MessageBubble.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/react/containers/Chat/MessageBubble/MessageBubble.js":
/*!***************************************************************************!*\
  !*** ./resources/js/react/containers/Chat/MessageBubble/MessageBubble.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MessageBubble_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageBubble.css */ "./resources/js/react/containers/Chat/MessageBubble/MessageBubble.css");
/* harmony import */ var _MessageBubble_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MessageBubble_css__WEBPACK_IMPORTED_MODULE_1__);



var MessageBubble = function MessageBubble(_ref) {
  var children = _ref.children,
      type = _ref.type;
  var style = ['MessageBubble'];

  if (type === 'user') {
    style.push('UserMessage');
  } else {
    style.push('BotMessage');
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: style.join(' ')
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (MessageBubble);

/***/ }),

/***/ "./resources/js/react/containers/Chat/MessageField/MessageField.css":
/*!**************************************************************************!*\
  !*** ./resources/js/react/containers/Chat/MessageField/MessageField.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./MessageField.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/containers/Chat/MessageField/MessageField.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/react/containers/Chat/MessageField/MessageField.js":
/*!*************************************************************************!*\
  !*** ./resources/js/react/containers/Chat/MessageField/MessageField.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions */ "./resources/js/react/store/actions/index.js");
/* harmony import */ var _MessageField_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageField.css */ "./resources/js/react/containers/Chat/MessageField/MessageField.css");
/* harmony import */ var _MessageField_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MessageField_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/Button/Button */ "./resources/js/react/components/Button/Button.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var MessageField = function MessageField(_ref) {
  var sendMessage = _ref.sendMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var refTextarea = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var sendMessageHandler = function sendMessageHandler(e) {
    e.preventDefault();
    sendMessage(message);
    setMessage('');
    refTextarea.current.focus();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: sendMessageHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MessageField"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    required: true,
    value: message,
    ref: refTextarea,
    placeholder: "Type your message",
    onChange: function onChange(event) {
      return setMessage(event.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Button_Button__WEBPACK_IMPORTED_MODULE_4__["default"], null, "Send")));
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    sendMessage: function sendMessage(message) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_2__["sendMessage"](message));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(MessageField));

/***/ }),

/***/ "./resources/js/react/containers/Chat/Messages/Messages.css":
/*!******************************************************************!*\
  !*** ./resources/js/react/containers/Chat/Messages/Messages.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/postcss-loader/src??ref--6-2!./Messages.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/react/containers/Chat/Messages/Messages.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/react/containers/Chat/Messages/Messages.js":
/*!*****************************************************************!*\
  !*** ./resources/js/react/containers/Chat/Messages/Messages.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Messages_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages.css */ "./resources/js/react/containers/Chat/Messages/Messages.css");
/* harmony import */ var _Messages_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Messages_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MessageBubble_MessageBubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MessageBubble/MessageBubble */ "./resources/js/react/containers/Chat/MessageBubble/MessageBubble.js");






var Messages = function Messages(_ref) {
  var messages = _ref.messages;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    react_scroll__WEBPACK_IMPORTED_MODULE_2__["animateScroll"].scrollToBottom({
      containerId: "messages"
    });
  }, [messages]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "messages",
    className: "Messages"
  }, messages.map(function (message, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageBubble_MessageBubble__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: index,
      type: message.from
    }, message.text);
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.chat.messages
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Messages));

/***/ })

}]);