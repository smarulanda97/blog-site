import PropTypes from 'prop-types';
import Masonry from 'masonry-layout';
import Cards from './../utils/Cards';
import { useEffect } from 'react';

const LatestPosts = ({ posts }) => {
  useEffect(() => {
    setTimeout(initializeMansory, 500)
  }, []);

  const initializeMansory = () => {
    new Masonry( '.grid', {
      itemSelector: '.grid-item',
      columnWidth: '.card_default',
      gutter:30
    })
  };

  return (
    <div className="section_content">
      <div className="grid clearfix">
        {
          posts.map((post, index) => {
            switch (index) {
              case 0:
                return <Cards.LargestWithImage post={post} key={post.id}/>
              case 1:
                return <Cards.SmallWithoutImage post={post} key={post.id}/>
              case 2:
                return <Cards.SmallWithBackground post={post} key={post.id}/>
              case 3:
              case 4:
                return <Cards.SmallWithImage post={post} key={post.id}/>
              case 5:
              case 6:
              case 7:
                return <Cards.DefaultWithoutImage post={post} key={post.id}/>
            }
          })
        }
      </div>
    </div>
  );
};

LatestPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default LatestPosts;