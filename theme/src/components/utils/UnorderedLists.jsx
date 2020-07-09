import PropTypes from 'prop-types';

const UnorderedLists = ({ items, render, listClasses, itemClasess }) => {
  return (
    <ul className={listClasses}>
      {items.map(item =>
        <li key={item.id} className={itemClasess}>
          {render(item)}
        </li>
      )}
    </ul>
  )
}

UnorderedLists.propTypes = {
  items: PropTypes.array.isRequired,
  render: PropTypes.func.isRequired,
  listClasses: PropTypes.string,
}

export default UnorderedLists;