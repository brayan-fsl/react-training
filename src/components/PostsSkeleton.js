import React from 'react';
import Skeleton from "react-loading-skeleton";

const PostsSkeleton = () => {
    return (
      <section className="posts-skeleton">
        <ul className="posts-skeleton__list">
          {Array(9)
            .fill()
            .map((item, index) => (
              <li className="card mb-3" key={index}>
                <h2 className="section-title">
                    <Skeleton height={20} width={300} />
                </h2>
                <Skeleton height={58} />
              </li>
            ))}
        </ul>
      </section>
    )
  }

  export default PostsSkeleton;