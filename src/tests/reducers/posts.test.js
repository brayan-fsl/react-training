import PostsReducer from '../../reducers/posts';

test('should set default state', () => {
  const state = PostsReducer(undefined, {type: '@@INIT'})

  expect(state).toEqual({"loading": false, "creating": false, "finding": false, "post": {"body": "", "title": ""}, "posts": []})
});

// FETCH

test('should set correct state on FETCH_POSTS_REQUEST', () => {
  const state = PostsReducer(undefined, {type: 'FETCH_POSTS_REQUEST'})

  expect(state).toEqual({"loading": true, "creating": false, "finding": false, "post": {"body": "", "title": ""}, "posts": []})
});

test('should set correct state on FETCH_POSTS_SUCCESS', () => {
  const payload = [{title: "Post Title", body: "Post Body"}]
  const state = PostsReducer(undefined, {type: 'FETCH_POSTS_SUCCESS', payload: payload})

  expect(state).toEqual({"loading": false, "creating": false, "finding": false, "post": {"body": "", "title": ""}, "posts": payload})
});

test('should set correct state on FETCH_POSTS_ERROR', () => {
  const error = "Posts could not be retrieved"
  const state = PostsReducer(undefined, {type: 'FETCH_POSTS_ERROR', payload: error})

  expect(state).toEqual({"loading": false, "creating": false, "finding": false, "post": {"body": "", "title": ""}, "posts": [], error: error})
});

// CREATE

test('should set correct state on CREATE_POST_REQUEST', () => {
  const post = {title: "Post Title", body: "Post Body"}
  const state = PostsReducer(undefined, {type: 'CREATE_POST_REQUEST', payload: post})

  expect(state).toEqual({"loading": false, "creating": true, "finding": false, "post": post, "posts": []})
});

test('should set correct state on CREATE_POST_SUCCESS', () => {
  const post = {title: "Post Title", body: "Post Body"}
  const state = PostsReducer(undefined, {type: 'CREATE_POST_SUCCESS', payload: post})

  expect(state).toEqual({"loading": false, "creating": false, "finding": false, "post": post, "posts": [post]})
});

test('should set correct state on CREATE_POST_ERROR', () => {
  const error = "Posts could not ne retrieved"
  const state = PostsReducer(undefined, {type: 'CREATE_POST_ERROR', payload: error})

  expect(state).toEqual({"loading": false, "creating": false, "finding": false, "post": {"body": "", "title": ""}, "posts": [], error: error})
});

// FIND

test('should set correct state on FIND_POST_REQUEST', () => {
  const postId = 100
  const post = {title: "Post Title", body: "Post Body"}
  const state = PostsReducer(undefined, {type: 'FIND_POST_REQUEST', payload: postId})

  expect(state).toEqual({"loading": false, "creating": false, "finding": true, "post": {title: "", body: ""}, "posts": []})
});

test('should set correct state on FIND_POST_SUCCESS', () => {
  const post = {title: "Post Title", body: "Post Body"}
  const state = PostsReducer(undefined, {type: 'FIND_POST_SUCCESS', payload: post})

  expect(state).toEqual({"loading": false, "creating": false, "finding": false, "post": post, "posts": []})
});

test('should set correct state on FIND_POST_ERROR', () => {
  const error = "Posts could not ne retrieved"
  const state = PostsReducer(undefined, {type: 'FIND_POST_ERROR', payload: error})

  expect(state).toEqual({"loading": false, "creating": false, "finding": false, "post": {"body": "", "title": ""}, "posts": [], error: error})
});


