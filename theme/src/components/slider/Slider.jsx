import homeSlider from './../../../images/home_slider.jpg';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
  return (
    <div className="home vh-80">
      <div className="home_slider_container">
        <Carousel 
          controls={true}  
          indicators={false}
          className="home_slider"
        >
          <Carousel.Item>
            <div className="home_slider_background" style={{
              backgroundImage: `url(${homeSlider})`
            }}>
            </div>
            <img
              className="d-block opacity-0 w-100 vh-80"
              src={homeSlider}
              alt="First slide"
            />
            <div className="home_slider_content_container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="home_slider_content">
                      <div className="home_slider_item_category trans_200">
                        <a href="category.html" className="trans_200">Drupal 8</a>
                      </div>
                      <div className="home_slider_item_title">
                        <a href="post.html">
                          Make social authentication with Drupal 8
                        </a>
                      </div>
                      <div className="home_slider_item_link">
                        <a href="post.html" className="trans_200">
                          Continue Reading
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="similar_posts_container">
              <div className="container">
                <div className="row d-flex flex-row align-items-end">
                  <div className="col-lg-3 col-md-6 similar_post_col">
                    <div className="similar_post trans_200">
                      <a href="post.html">Tutorial: How to alter Webform forms Drupal 8 ?</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 similar_post_col">
                    <div className="similar_post trans_200">
                      <a href="post.html">Placetopay integration with Drupal 8 Commerce</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 similar_post_col">
                    <div className="similar_post trans_200">
                      <a href="post.html">Tutorial: Create Webform exporter plugin Drupal 8</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home_slider_next_container">
                <div className="home_slider_next" >
                  <div className="home_slider_next_background trans_400"></div>
                  <div className="home_slider_next_content trans_400">
                    <div className="home_slider_next_title">next</div>
                    <div className="home_slider_next_link">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="home_slider_background" style={{
              backgroundImage: `url(${homeSlider})`
            }}>
            </div>
            <img
              className="d-block opacity-0 w-100 vh-80"
              src={homeSlider}
              alt="First slide"
            />
            <div className="home_slider_content_container">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="home_slider_content">
                      <div className="home_slider_item_category trans_200">
                        <a href="category.html" className="trans_200">Drupal 8</a>
                      </div>
                      <div className="home_slider_item_title">
                        <a href="post.html">
                          Make social authentication with Drupal 8
                        </a>
                      </div>
                      <div className="home_slider_item_link">
                        <a href="post.html" className="trans_200">
                          Continue Reading
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="similar_posts_container">
              <div className="container">
                <div className="row d-flex flex-row align-items-end">
                  <div className="col-lg-3 col-md-6 similar_post_col">
                    <div className="similar_post trans_200">
                      <a href="post.html">Tutorial: How to alter Webform forms Drupal 8 ?</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 similar_post_col">
                    <div className="similar_post trans_200">
                      <a href="post.html">Placetopay integration with Drupal 8 Commerce</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 similar_post_col">
                    <div className="similar_post trans_200">
                      <a href="post.html">Tutorial: Create Webform exporter plugin Drupal 8</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home_slider_next_container">
                <div className="home_slider_next" >
                  <div className="home_slider_next_background trans_400"></div>
                  <div className="home_slider_next_content trans_400">
                    <div className="home_slider_next_title">next</div>
                    <div className="home_slider_next_link">How Did van Gogh’s Turbulent Mind Depict One of the Most Complex Concepts in Physics?</div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default Slider;