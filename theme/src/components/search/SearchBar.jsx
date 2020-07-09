import { useContext } from 'react';
import { Form, Image } from 'react-bootstrap';
import cloud from './../../../images/cloud.png';
import search from './../../../images/search.png';
import ThemeContext from './../../context/ThemeContext';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
  const { toggleMenu } = useContext(ThemeContext);

  return (
    <>
      <div className="search_container ml-auto">
        <div className="weather">
          <div className="temperature">+10°</div>
          <Image className="weather_icon" src={cloud} alt="" />
        </div>
        <Form>
          <Form.Control type="search" className="header_search_input" required="required" placeholder="Type to Search..." />
          <Image className="header_search_icon" src={search} alt="" />
        </Form>
      </div>
      <div className="hamburger ml-auto menu_mm" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="menu_mm trans_200" aria-hidden="true"/>
      </div>
    </>
  );  
}

export default SearchBar;