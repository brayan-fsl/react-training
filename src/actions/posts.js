import { 
  FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_ERROR,
  CREATE_POST_REQUEST, CREATE_POST_SUCCESS, CREATE_POST_ERROR,
  FIND_POST_REQUEST, FIND_POST_SUCCESS, FIND_POST_ERROR,
  UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS, UPDATE_POST_ERROR,
  DESTROY_POST_REQUEST, DESTROY_POST_SUCCESS, DESTROY_POST_ERROR
} from '../constants/actionTypes'
import { get, create, find, update, destroy } from '../api/posts'

export const fetchPosts = () => {
  return async dispatch => {
    dispatch({type: FETCH_POSTS_REQUEST})
    try {
      const response = await get()  
      dispatch({type: FETCH_POSTS_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: FETCH_POSTS_ERROR, payload: error})
    }
  }
}

export const findPost = (postId) => {
  return async dispatch => {
    dispatch({type: FIND_POST_REQUEST, payload: postId})
    try {
      const response = await find(postId)
      dispatch({type: FIND_POST_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: FIND_POST_ERROR, payload: error})
    }
  }
}

export const createPost = (post) => {
  return async dispatch => {
    dispatch({type: CREATE_POST_REQUEST, payload: post})
    try {
      const response = await create(post)
      dispatch({type: CREATE_POST_SUCCESS, payload: {...post, id: response.id}})
    } catch (error) {
      dispatch({type: CREATE_POST_ERROR, payload: error})
    }
  }
}

export const updatePost = (post) => {
  return async dispatch => {
    dispatch({type: UPDATE_POST_REQUEST, payload: post})
    try {
      const response = await update(post)
      dispatch({type: UPDATE_POST_SUCCESS, payload: response})
    } catch (error) {
      dispatch({type: UPDATE_POST_ERROR, payload: error})
    }
  }
}

export const destroyPost = (post) => {
  return async dispatch => {
    dispatch({type: DESTROY_POST_REQUEST, payload: post})
    try {
      const response = await destroy(post.id)
      dispatch({type: DESTROY_POST_SUCCESS, payload: post})
    } catch (error) {
      dispatch({type: DESTROY_POST_ERROR, payload: error})
    }
  }
}


export const startLogout = () => {
  return () => {
    return {};
  };
};
