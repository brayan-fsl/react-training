import React, { useState, useEffect } from 'react'

const PostForm = ({post, onSubmit}) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  useEffect(() => {
    setTitle(post.title)
    setBody(post.body)
  }, [post])
  
  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const onBodyChange = (e) => {
    setBody(e.target.value) 
  }

  const _onSubmit = (e) => {
    e.preventDefault();
    onSubmit({title, body})
  }

  return (
    <form className="form" onSubmit={_onSubmit}>
      <label htmlFor="title">Title</label>
      <input id="title" type="text" onChange={onTitleChange} value={title}/>
      <label htmlFor="body">Body</label>
      <textarea id="body" onChange={onBodyChange} value={body}/>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  )
}

export default PostForm