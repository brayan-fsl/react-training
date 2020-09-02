import {
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,
  CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_ERROR,
  FIND_POST_REQUEST, FIND_POST_SUCCESS, FIND_POST_ERROR,
  UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR,
  DESTROY_POST_REQUEST, DESTROY_POST_SUCCESS, DESTROY_POST_ERROR
 } from '../constants/actionTypes'
import initialState from './initialState'

const PostsReducer = (state = initialState.posts, action) => {
    switch(action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }
        case FETCH_POSTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CREATE_POST_REQUEST:
            return {
                ...state,
                creating: true,
                post: action.payload
            }
        case CREATE_POST_SUCCESS:
            const posts = state.posts.concat(action.payload)
            return {
                ...state,
                creating: false,
                posts: posts,
                post: action.payload
            }
        case CREATE_POST_ERROR:
            return {
                ...state,
                creating: false,
                error: action.payload
            }
        case FIND_POST_REQUEST:
            return {
                ...state,
                finding: true
            }
        case FIND_POST_SUCCESS:
            return {
                ...state,
                finding: false,
                posts: state.posts.map((post) => {
                    if (post.id === action.id) {
                        return {
                            ...post,
                            ...action.payload
                        }
                    } else {
                        return post
                    }
                }),
                post: action.payload
            }
        case FIND_POST_ERROR:
            return {
                ...state,
                finding: false,
                error: action.payload
            }
        case UPDATE_POST_REQUEST:
            return {
                ...state,
                updating: true,
                post: action.payload
            }
        case UPDATE_POST_SUCCESS:
            return {
                ...state,
                updating: false,
                posts: state.posts.map((post) => {
                    if (post.id === action.id) {
                        return {
                            ...post,
                            ...action.payload
                        }
                    } else {
                        return post
                    };
                }),
                post: action.payload
            }
        case UPDATE_POST_ERROR:
            return {
                ...state,
                creating: false,
                error: action.payload
            }
        case DESTROY_POST_REQUEST:
            return {
                ...state,
                destroying: true,
                post: action.payload
            }
        case DESTROY_POST_SUCCESS:
            return {
                ...state,
                destroying: false,
                posts: state.posts.filter(({ id }) => id !== action.payload.id),
                post: {}
            }
        case DESTROY_POST_ERROR:
            return {
                ...state,
                destroying: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default PostsReducer