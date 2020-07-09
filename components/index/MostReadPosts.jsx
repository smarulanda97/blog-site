import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const MostReadPosts = ({ posts }) => {
  return (
    <div className="sidebar_section">
      <div className="sidebar_title_container">
        <div className="sidebar_title">Most read</div>
      </div>
      <div className="sidebar_section_content">
        <div className="sidebar_slider_container">
          <div className="sidebar_slider_top">
            {posts.map((post) => {
              return (
                <div className="side_post" key={post.id}>
                  <Link href={post.slug}>
                    <a href="post.html">
                      <div className="d-flex flex-row align-items-xl-center align-items-start justify-content-start">
                        <div className="side_post_image">
                          <div>
                            <img src={`${process.env.IMAGES_URL}${post.images.cover.url}`} alt={post.title} />
                          </div>
                        </div>
                        <div className="side_post_content">
                          <div className="side_post_title">{post.title}</div>
                          <small className="post_meta">{post.authors[0].username}<span>{post.published_at}</span></small>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
};

MostReadPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default MostReadPosts;