"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroy = exports.update = exports.find = exports.create = exports.get = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var performRequest = function performRequest() {
  var _ref,
      _ref$url,
      url,
      _ref$method,
      method,
      _ref$data,
      data,
      body,
      includeBody,
      response,
      _args = arguments;

  return regeneratorRuntime.async(function performRequest$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _ref = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref$url = _ref.url, url = _ref$url === void 0 ? 'https://jsonplaceholder.typicode.com/posts' : _ref$url, _ref$method = _ref.method, method = _ref$method === void 0 ? 'GET' : _ref$method, _ref$data = _ref.data, data = _ref$data === void 0 ? {} : _ref$data;
          body = JSON.stringify(data);
          includeBody = method !== 'GET';
          _context.next = 5;
          return regeneratorRuntime.awrap(fetch(url, _objectSpread({
            method: method
          }, includeBody && {
            body: body
          })));

        case 5:
          response = _context.sent;
          return _context.abrupt("return", response.json());

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
};

var get = function get() {
  var response = performRequest();
  return response;
};

exports.get = get;

var create = function create(post) {
  var method = 'POST';
  var response = performRequest({
    method: method,
    data: post
  });
  return response;
};

exports.create = create;

var find = function find(id) {
  var url = "https://jsonplaceholder.typicode.com/posts/".concat(id);
  var response = performRequest({
    url: url
  });
  return response;
};

exports.find = find;

var update = function update(_ref2) {
  var id = _ref2.id,
      title = _ref2.title,
      body = _ref2.body;
  var url = "https://jsonplaceholder.typicode.com/posts/".concat(id);
  var method = 'PUT';
  var response = performRequest({
    url: url,
    method: method,
    data: {
      title: title,
      body: body
    }
  });
  return response;
};

exports.update = update;

var destroy = function destroy(id) {
  var url = "https://jsonplaceholder.typicode.com/posts/".concat(id);
  var method = 'DELETE';
  var response = performRequest({
    url: url,
    method: method
  });
  return response;
};

exports.destroy = destroy;