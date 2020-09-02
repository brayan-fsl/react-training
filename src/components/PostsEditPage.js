import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { findPost, updatePost } from '../actions/posts'
import PostForm from '../components/PostForm'
import { useSelector, useDispatch } from 'react-redux'

const PostsEditPage = ({history}) => {
  const { id } = useParams()
  const post = useSelector(state => state.posts.post)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findPost(id))
  }, [id])

  const onSubmit = (post) => {
    dispatch(updatePost(post))
    history.push('/posts')
  }

  return (
    <div className="content-container">
      <PostForm post={post} onSubmit={onSubmit}/>
    </div>
  )
}

export default PostsEditPage;