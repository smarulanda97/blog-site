import React from 'react';
import PropTypes from 'prop-types';
import CardsUtils from './CardsUtils';

const LargestWithImage = ({ post }) => {
  return (
    <div className="card card_largest_with_image grid-item">
      <img className="card-img-top" src={`${process.env.IMAGES_URL}${post.images.cover.url}`} alt={post.title} />
      <CardsUtils.Body>
        <CardsUtils.Title title={post.title} slug={post.slug} />
        <p className="card-text">{post.summary}</p>
        <CardsUtils.Meta author={post.authors[0]} slug={post.slug} publishDate={post.publish_date} />
      </CardsUtils.Body>
    </div>
  )
};

const SmallWithoutImage = ({ post }) => {
  return (
    <div className="card card_default card_small_no_image grid-item">
      <CardsUtils.Body>
        <CardsUtils.Title title={post.title} slug={post.slug} />
        <CardsUtils.Meta author={post.authors[0]} slug={post.slug} publishDate={post.publish_date} />
      </CardsUtils.Body>
    </div>
  )
};

const SmallWithBackground = ({ post }) => {
  return (
    <div className="card card_default card_small_with_background grid-item">
      <div className="card_background" style={{
        backgroundImage: `url(${process.env.IMAGES_URL}${post.images.cover.url})`
      }}></div>
      <CardsUtils.Body>
        <CardsUtils.Title title={post.title} slug={post.slug} />
        <CardsUtils.Meta author={post.authors[0]} slug={post.slug} publishDate={post.publish_date} />
      </CardsUtils.Body>
    </div>
  )
};

const SmallWithImage = ({ post }) => {
  return (
    <div className="card card_small_with_image grid-item">
      <img className="card-img-top" src={`${process.env.IMAGES_URL}${post.images.cover.url}`} alt={post.title} />
      <CardsUtils.Body>
        <CardsUtils.Title title={post.title} slug={post.slug} />
        <CardsUtils.Meta author={post.authors[0]} slug={post.slug} publishDate={post.publish_date} />
      </CardsUtils.Body>
    </div>
  )
};

const DefaultWithoutImage = ({ post }) => {
  return (
    <div className="card card_default card_default_no_image grid-item">
      <CardsUtils.Body>
        <CardsUtils.Title title={post.title} slug={post.slug} />
      </CardsUtils.Body>
    </div>
  )
};

const PostPropTypes = {
  authors: PropTypes.arrayOf({
    username: PropTypes.string,
  }),
  body: PropTypes.array,
  slug: PropTypes.string,
  title: PropTypes.string,
  publish_date: PropTypes.string,
  images: PropTypes.shape({
    cover: PropTypes.objectOf({ url: PropTypes.string })
  })
};

LargestWithImage.propTypes = PostPropTypes;
SmallWithoutImage.propTypes = PostPropTypes;
SmallWithBackground.propTypes = PostPropTypes;
SmallWithImage.propTypes = PostPropTypes;
DefaultWithoutImage.propTypes = PostPropTypes;

export default {
  LargestWithImage,
  SmallWithoutImage,
  SmallWithBackground,
  SmallWithImage,
  DefaultWithoutImage,
};