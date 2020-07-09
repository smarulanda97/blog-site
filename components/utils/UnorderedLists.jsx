import PropTypes from 'prop-types';

const UnorderedLists = ({ items, render }) => {
  return (
    <ul>
      {items.map(item =>
        <li key={item.id}>
          {render(item)}
        </li>
      )}
    </ul>
  )
}

UnorderedLists.propTypes = {
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired
}

export default UnorderedLists;