import React from 'react';
import PostsList from '../components/PostsList'
import { Link } from 'react-router-dom';

const PostsPage = () => {
  return (
    <div className="content-container">
      <h1>Posts</h1>
      <div className="mb-3"></div>
      <Link className="btn btn-primary" to="/posts/new">
        New
      </Link>
      <div className="mb-3"></div>
      <PostsList/>
    </div>
  )
}

export default PostsPage;