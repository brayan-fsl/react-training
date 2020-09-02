"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _actionTypes = require("../constants/actionTypes");

var _initialState = _interopRequireDefault(require("./initialState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PostsReducer = function PostsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initialState["default"].posts;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionTypes.FETCH_POSTS_REQUEST:
      return _objectSpread({}, state, {
        loading: true
      });

    case _actionTypes.FETCH_POSTS_SUCCESS:
      return _objectSpread({}, state, {
        loading: false,
        posts: action.payload
      });

    case _actionTypes.FETCH_POSTS_ERROR:
      return _objectSpread({}, state, {
        loading: false,
        error: action.payload
      });

    case _actionTypes.CREATE_POST_REQUEST:
      return _objectSpread({}, state, {
        creating: true,
        post: action.payload
      });

    case _actionTypes.CREATE_POST_SUCCESS:
      var posts = state.posts.concat(action.payload);
      return _objectSpread({}, state, {
        creating: false,
        posts: posts,
        post: action.payload
      });

    case _actionTypes.CREATE_POST_ERROR:
      return _objectSpread({}, state, {
        creating: false,
        error: action.payload
      });

    case _actionTypes.FIND_POST_REQUEST:
      return _objectSpread({}, state, {
        finding: true
      });

    case _actionTypes.FIND_POST_SUCCESS:
      return _objectSpread({}, state, {
        finding: false,
        posts: state.posts.map(function (post) {
          if (post.id === action.id) {
            return _objectSpread({}, post, {}, action.payload);
          } else {
            return post;
          }
        }),
        post: action.payload
      });

    case _actionTypes.FIND_POST_ERROR:
      return _objectSpread({}, state, {
        finding: false,
        error: action.payload
      });

    case _actionTypes.UPDATE_POST_REQUEST:
      return _objectSpread({}, state, {
        updating: true,
        post: action.payload
      });

    case _actionTypes.UPDATE_POST_SUCCESS:
      return _objectSpread({}, state, {
        updating: false,
        posts: state.posts.map(function (post) {
          if (post.id === action.id) {
            return _objectSpread({}, post, {}, action.payload);
          } else {
            return post;
          }

          ;
        }),
        post: action.payload
      });

    case _actionTypes.UPDATE_POST_ERROR:
      return _objectSpread({}, state, {
        creating: false,
        error: action.payload
      });

    case _actionTypes.DESTROY_POST_REQUEST:
      return _objectSpread({}, state, {
        destroying: true,
        post: action.payload
      });

    case _actionTypes.DESTROY_POST_SUCCESS:
      return _objectSpread({}, state, {
        destroying: false,
        posts: state.posts.filter(function (_ref) {
          var id = _ref.id;
          return id !== action.payload.id;
        }),
        post: {}
      });

    case _actionTypes.DESTROY_POST_ERROR:
      return _objectSpread({}, state, {
        destroying: false,
        error: action.payload
      });

    default:
      return state;
  }
};

var _default = PostsReducer;
exports["default"] = _default;