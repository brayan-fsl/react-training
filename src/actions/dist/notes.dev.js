"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLogout = exports.remove = exports.add = exports.fetch = void 0;

var fetch = function fetch() {
  return {
    type: 'FETCH'
  };
};

exports.fetch = fetch;

var add = function add() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$body = _ref.body,
      body = _ref$body === void 0 ? '' : _ref$body;

  return {
    type: 'ADD',
    post: {
      title: title,
      body: body
    }
  };
};

exports.add = add;

var remove = function remove() {
  return {
    type: 'LOGOUT'
  };
};

exports.remove = remove;

var startLogout = function startLogout() {
  return function () {
    return {}
  };
};

exports.startLogout = startLogout;