import React, { useContext } from 'react';
import ItemNavigation from './ItemNavigation';
import UnorderedLists from './../utils/UnorderedLists';
import ThemeContext from './../../context/ThemeContext';

const MobileNavigation = () => {
  const { openMenu, toggleMenu, menus } = useContext(ThemeContext);

  return (
    <div className={`${(openMenu || false) ? 'active' : ''} menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400`}>
      <div className="menu_close_container" onClick={toggleMenu}>
        <div className="menu_close">
          <div/>
          <div/>
        </div>
      </div>
      <div className="logo menu_mm"><a href="#">SMARULANDA</a></div>
      <div className="search">
        <form action="#">
          <input type="search" className="header_search_input menu_mm" required="required" placeholder="Type to Search..." />
          {/*<img className="header_search_icon menu_mm" src="images/search_2.png" alt="" />*/}
        </form>
      </div>
      <nav className="menu_nav">
        {menus && menus.hasOwnProperty('mainNavigation') && (
          <UnorderedLists 
            listClasses={"menu_mm"}
            items={menus.mainNavigation.menuItems}
            render={(item) => <ItemNavigation menuItem={item} itemClasses={"menu_mm"}/>}
          />
        )}
      </nav>
    </div>
  )
};

export default MobileNavigation;