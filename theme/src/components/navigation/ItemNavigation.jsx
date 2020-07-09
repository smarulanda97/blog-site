import Link from 'next/link';
import PropTypes from 'prop-types';

const ItemNavigation = (props) => {
  return (
    <Link href={props.menuItem.path}>
      <a>{props.menuItem.title}</a>
    </Link>
  )
}

ItemNavigation.propTypes = {
  menuItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    itemClasses: PropTypes.string
  }).isRequired
}

export default ItemNavigation;