import Link from 'next/link';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Copyright from './../utils/Copyright';
import Newsletter from './../utils/Newsletter';
import { Container, Row, Col } from 'react-bootstrap';
import UnorderedLists from './../utils/UnorderedLists';
import ThemeContext from './../../context/ThemeContext';

const SocialMediaMenuItem = ({ item }) => (
  <Link href={item.path}>
    <a target={"_blank"}>
      <img src={`${process.env.IMAGES_URL}${item.icon.url}`} />
    </a>
  </Link>
);

const Footer = () => {
  const {menus, settings } = useContext(ThemeContext)

  return (
    <footer className="footer">
      <Container>
        <Row className="row-lg-eq-height">
          <Col lg={9} className="order-lg-1 order-2">
            <div className="footer_content">
              <div className="footer_logo">
                { settings &&
                  <Link href={ settings.url || '/' } prefetch={false}>
                    <a target={'_blank'}>
                      { settings.name || 'Lorem ipsum' }
                    </a>
                  </Link>
                }
              </div>
              <div className="footer_social">
                { menus && menus.hasOwnProperty('socialMediaFooter') &&
                  <UnorderedLists 
                    listClasses={'footer_social_facebook'}
                    items={menus.socialMediaFooter.menuItems} 
                    render={item => <SocialMediaMenuItem item={item} />} />
                }
              </div>
              <Copyright />
            </div>
          </Col>
          <Col lg={3} className="order-lg-2 order-1">
            <Newsletter />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

SocialMediaMenuItem.prototypes = {
  item: PropTypes.objectOf({
    path: PropTypes.string.isRequired,
    icon: PropTypes.objectOf({
      url: PropTypes.string.isRequired,
    }),
  }),
};

export default Footer;