"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLogout = exports.destroyPost = exports.updatePost = exports.createPost = exports.findPost = exports.fetchPosts = void 0;

var _actionTypes = require("../constants/actionTypes");

var _posts = require("../api/posts");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fetchPosts = function fetchPosts() {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _actionTypes.FETCH_POSTS_REQUEST
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap((0, _posts.get)());

          case 4:
            response = _context.sent;
            dispatch({
              type: _actionTypes.FETCH_POSTS_SUCCESS,
              payload: response
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: _actionTypes.FETCH_POSTS_ERROR,
              payload: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.fetchPosts = fetchPosts;

var findPost = function findPost(postId) {
  return function _callee2(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch({
              type: _actionTypes.FIND_POST_REQUEST,
              payload: postId
            });
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap((0, _posts.find)(postId));

          case 4:
            response = _context2.sent;
            dispatch({
              type: _actionTypes.FIND_POST_SUCCESS,
              payload: response
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            dispatch({
              type: _actionTypes.FIND_POST_ERROR,
              payload: _context2.t0
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.findPost = findPost;

var createPost = function createPost(post) {
  return function _callee3(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch({
              type: _actionTypes.CREATE_POST_REQUEST,
              payload: post
            });
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap((0, _posts.create)(post));

          case 4:
            response = _context3.sent;
            dispatch({
              type: _actionTypes.CREATE_POST_SUCCESS,
              payload: _objectSpread({}, post, {
                id: response.id
              })
            });
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            dispatch({
              type: _actionTypes.CREATE_POST_ERROR,
              payload: _context3.t0
            });

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.createPost = createPost;

var updatePost = function updatePost(post) {
  return function _callee4(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            dispatch({
              type: _actionTypes.UPDATE_POST_REQUEST,
              payload: post
            });
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap((0, _posts.update)(post));

          case 4:
            response = _context4.sent;
            dispatch({
              type: _actionTypes.UPDATE_POST_SUCCESS,
              payload: response
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            dispatch({
              type: _actionTypes.UPDATE_POST_ERROR,
              payload: _context4.t0
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.updatePost = updatePost;

var destroyPost = function destroyPost(post) {
  return function _callee5(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            dispatch({
              type: _actionTypes.DESTROY_POST_REQUEST,
              payload: post
            });
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap((0, _posts.destroy)(post.id));

          case 4:
            response = _context5.sent;
            dispatch({
              type: _actionTypes.DESTROY_POST_SUCCESS,
              payload: post
            });
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            dispatch({
              type: _actionTypes.DESTROY_POST_ERROR,
              payload: _context5.t0
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.destroyPost = destroyPost;

var startLogout = function startLogout() {
  return function () {
    return {};
  };
};

exports.startLogout = startLogout;