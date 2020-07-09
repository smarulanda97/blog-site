import Link from 'next/link';
import PropTypes from 'prop-types';

const Title = ({ title, slug }) => {
  return (
    <div className="card-title card-title-small">
      <Link href={slug}>
        <a>
          {title}
        </a>
      </Link>
    </div>
  )
};

const Meta = ({ author, slug, publishDate }) => {
  return (
    <small className="post_meta">
      <a href={slug}>
        {author.username}
      </a>
      <span>{publishDate}</span>
    </small>
  )
};

const Body = ({ children }) => {
  return (
    <div className="card-body">
      {children}
    </div>
  )
};

Title.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Meta.propTypes = {
  slug: PropTypes.string.isRequired,
  author: PropTypes.shape({
    id: PropTypes.id,
    username: PropTypes.string.isRequired
  }).isRequired,
};

Body.propTypes = {
  children: PropTypes.node.isRequired
};

export default {
  Body,
  Title,
  Meta,
};