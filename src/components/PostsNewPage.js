import React, { useEffect } from 'react'
import { createPost } from '../actions/posts'
import PostForm from '../components/PostForm'
import { useDispatch } from 'react-redux'

const PostsNewPage = ({history}) => {
  const post = {title: "", body: ""}
  const dispatch = useDispatch()
  const onSubmit = (post) => {
    dispatch(createPost(post))
    history.push('/posts')
  }

  return (
    <div className="content-container">
      <PostForm post={post} onSubmit={onSubmit}/>
    </div>
  )
}

export default PostsNewPage;