import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import useWindowScroll from './../../hooks/useWindowScroll';

const Header = ({ children }) => {
  const { scrollY } = useWindowScroll();
  
  return (
    <header className={`header ${scrollY && scrollY > 100 && 'scrolled'}`}>
      <Container>
        <Row>
          <Col>
            <div className="header_content d-flex flex-row align-items-center justify-content-start">
              {children}
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;  