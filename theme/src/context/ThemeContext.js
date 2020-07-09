import React from 'react';

const ThemeContext = React.createContext({
  openMenu: false,
  toggleMenu: () => {},
  menus: {},
});

export default ThemeContext;