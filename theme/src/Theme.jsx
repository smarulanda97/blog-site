import PropTypes from 'prop-types';
import Slider from './components/slider/Slider';
import Header from './components/general/Header';
import Footer from './components/general/Footer';
import ThemeProvider from './context/ThemeProvider';
import SearchBar from './components/search/SearchBar';
import SiteBranding from './components/branding/SiteBranding';
import MobileNavigation from './components/navigation/MobileNavigation';
import DesktopNavigation from './components/navigation/DesktopNavigation';

/**
 * Basic Theme structure for website
 */
const Theme = (props) => {
  const { children, pageTitle } = props;
  const withSlider = !props.hasOwnProperty('withSlider') || props.withSlider;
  const withFooter = !props.hasOwnProperty('withFooter') || props.withFooter;

  return (
    <ThemeProvider>
      {/* Theme header */}
      <Header>
        <SiteBranding />
        <DesktopNavigation />
        <SearchBar />
      </Header>
      {/* End Theme header */}
      {/* slider and mobile navigation */}
      <MobileNavigation />
      { withSlider ? <Slider /> : null }
      {/* End slider and mobile navigation */}
      {/* Theme Main content */}
      <main className="page_content">
        {children}
      </main>
      {/* End Theme Main content */}
      {/* Theme footer */}
      { withFooter ? <Footer /> : null }
      {/* End Theme header */}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Theme;