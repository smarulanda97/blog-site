import Link from 'next/link';
import { useContext } from 'react';
import ItemNavigation from './ItemNavigation';
import UnorderedLists from './../utils/UnorderedLists';
import ThemeContext from './../../context/ThemeContext';

const DesktopNavigation = () => {
  const {menus} = useContext(ThemeContext)

  return (
    <nav className="main_nav">
      {menus && menus.hasOwnProperty('mainNavigation') && (
        <UnorderedLists 
          items={menus.mainNavigation.menuItems}
          itemClasess={''}
          render={(item) => <ItemNavigation menuItem={item}/>}
        />
      )}
    </nav>
  )
};

export default DesktopNavigation;