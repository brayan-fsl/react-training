import React from 'react';
import Skeleton from "react-loading-skeleton";

const PostFormSkeleton = () => {
    return (
      <section className="posts-skeleton">
        <ul className="posts-skeleton__list">
          <li className="card mb-5">
            <h2 className="section-title">
                <Skeleton height={20} width={300} />
            </h2>
            <Skeleton height={20} />
          </li>
          <li className="card mb-5">
            <h2 className="section-title">
                <Skeleton height={20} width={300} />
            </h2>
            <Skeleton height={40} />
          </li>
        </ul>
      </section>
    )
  }

  export default PostFormSkeleton;