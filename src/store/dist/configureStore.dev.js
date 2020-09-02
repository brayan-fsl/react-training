"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _auth = _interopRequireDefault(require("../reducers/auth"));

var _posts = _interopRequireDefault(require("../reducers/posts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true,
  traceLimit: 25
}) || _redux.compose;

var _default = function _default() {
  var store = (0, _redux.createStore)((0, _redux.combineReducers)({
    auth: _auth["default"],
    posts: _posts["default"]
  }), composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"])));
  return store;
};

exports["default"] = _default;