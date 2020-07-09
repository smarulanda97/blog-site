import PropTypes from 'prop-types';
import ThemeApi from './../api/ThemeApi';
import { useState, useEffect } from 'react';
import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [menus, setMenus] = useState({});
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const getSiteMenus = async () => {
      const siteMenus = await ThemeApi.getSiteMenus();
      setMenus(siteMenus.data || {})
    }
    const getSiteSettings = async () => {
      const siteSettings = await  ThemeApi.getSiteSettings();
      setSettings(siteSettings.data || {})
    }

    getSiteSettings()
    getSiteMenus()
  }, [])

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <ThemeContext.Provider
      value={{
        menus: menus,
        settings: settings,
        openMenu: openMenu,
        toggleMenu: toggleMenu,
      }}
    >
      { children }
    </ThemeContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default ThemeProvider;