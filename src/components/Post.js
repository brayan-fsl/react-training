import React from 'react'
import { useDispatch } from 'react-redux'
import { destroyPost } from '../actions/posts'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(destroyPost(post))
    }
    const {id, title, body} = post

    const postUrl = `posts/${id}/edit`

    return (
        <div className="mb-3 overflow-auto">
            <h3>{title}</h3>
            <p>{body}</p>
            <div className="float-right">
                <Link className="btn btn-primary" to={postUrl}>Edit</Link>
                <button className="btn btn-danger ml-1" onClick={onClick}>
                    Delete
                </button>
            </div>
            
        </div>
    )
}

export default Post;