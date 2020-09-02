import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { fetchPosts } from '../actions/posts'
import PostsSkeleton from '../components/PostsSkeleton'
import ReactPaginate from 'react-paginate';

const PostsList = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts.posts)
    const loading = useSelector(state => state.posts.loading)
    
    const [page, setPage] = useState(0)
    const [perPage, setPerPage] = useState(10)
    const pageCount = Math.ceil(posts.length / perPage)
    const offset = page * perPage

    const handlePageChange = (e) => {
        const selectedPage = e.selected;
        setPage(selectedPage)
    }

    const postsContent = () => {
        const content = posts.slice(offset, offset + perPage).map((post) => (
            <Post key={post.title} post={post}/>
        ))
        const paginator = <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"break-me"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}/>

        return (<div>
            {content}
            {paginator}
        </div>)
    }

    useEffect(() => {
        if(posts.length === 0) {
            dispatch(fetchPosts())
        }
    }, []);

    const content = loading ? <PostsSkeleton/> : postsContent()
    return content
}

export { PostsList as default }