import dynamic from 'next/dynamic';
import { Col, Container, Row  } from 'react-bootstrap';
import PostsApi from './../api/PostsApi';
import CategoriesApi from './../api/CategoriesApi';

import Theme from './../theme/index';
import ImageSideBar from './../components/index/ImageSideBar';
import MostReadPosts from './../components/index/MostReadPosts';
import CategoriesList from './../components/index/CategoriesList';

const LatestPosts = dynamic(() => import('../components/index/LatestPosts'), { ssr: false });

const Index = ({ categories, latestPosts, mostReadPosts }) => {
  return (
    <Theme>
      <Container>
        <Row className="row-lg-eq-height">
          <Col lg={9}>
            <div className="main_content" data-testid="page">
              <div className="blog_section">
                <CategoriesList categories={categories} />
                <LatestPosts posts={latestPosts} />
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className="sidebar">
              <div className="sidebar_background"/>
              <MostReadPosts posts={mostReadPosts} />
              <ImageSideBar />
            </div>
          </Col>
        </Row>
      </Container>
    </Theme>
  )
}

export async function getStaticProps() {
  const [latestPosts, mostReadPosts, categories] = await Promise.all([
    PostsApi.getLatest(), 
    PostsApi.getMostRead(),
    CategoriesApi.getAll(),
  ]);

  return {
    props: { 
      categories: categories && categories.status === 200 ? categories.data : [],
      latestPosts: latestPosts && latestPosts.status === 200 ? latestPosts.data : [],
      mostReadPosts: mostReadPosts && mostReadPosts.status === 200 ? mostReadPosts.data : [],
    }
  }
}

export default Index;