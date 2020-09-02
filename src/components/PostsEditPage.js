import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { findPost, updatePost } from '../actions/posts'
import PostForm from '../components/PostForm'
import { useSelector, useDispatch } from 'react-redux'
import PostFormSkeleton from '../components/PostFormSkeleton'

const PostsEditPage = ({history}) => {
  const { id } = useParams()
  const post = useSelector(state => state.posts.post)
  const loading = useSelector(state => state.posts.finding)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findPost(id))
  }, [id])

  const onSubmit = (post) => {
    dispatch(updatePost(post))
    history.push('/posts')
  }

  const formContent = <PostForm post={post} onSubmit={onSubmit}/>

  const content = loading ? <PostFormSkeleton/> : formContent

  return (
    <div className="content-container">
      {content}    
    </div>
  )
}

export default PostsEditPage;